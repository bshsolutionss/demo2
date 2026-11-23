import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from 'react';

interface SplitWordsProps {
  children: ReactNode;
  /**
   * `reveal`: words slide up from a mask whenever the nearest `<Reveal>` scrolls into view.
   * `load`: words slide up once on page load (for above-the-fold page titles; no JS needed).
   */
  mode?: 'reveal' | 'load';
  /** Milliseconds between consecutive words. */
  step?: number;
  /** Milliseconds before the first word. */
  delay?: number;
}

const inner = {
  reveal: 'inline-block motion-safe:transition-transform motion-safe:duration-[1100ms] motion-safe:ease-emphasized motion-safe:group-data-[pending=true]/reveal:translate-y-[110%]',
  load: 'inline-block motion-safe:animate-line-in',
} as const;

/**
 * Masked word-by-word heading reveal. Works on plain strings and recurses into nested elements
 * (`<br />`, `<span className="text-muted">`), so headings keep their markup and styling.
 */
export function SplitWords({ children, mode = 'reveal', step = 45, delay = 0 }: SplitWordsProps) {
  let index = 0;
  const timing = mode === 'reveal' ? 'transitionDelay' : 'animationDelay';

  function split(node: ReactNode): ReactNode {
    if (typeof node === 'string') {
      return node.split(/(\s+)/).map((part, key) => {
        if (!part) return null;
        if (/^\s+$/.test(part)) return part;
        const ms = delay + index++ * step;
        return (
          <span key={key} className="-mb-[0.12em] inline-block overflow-hidden pb-[0.12em] align-top">
            <span className={inner[mode]} style={{ [timing]: `${ms}ms` }}>{part}</span>
          </span>
        );
      });
    }
    if (Array.isArray(node)) return Children.map(node, split);
    if (isValidElement<{ children?: ReactNode }>(node) && node.props.children !== undefined) {
      return cloneElement(node as ReactElement<{ children?: ReactNode }>, undefined, split(node.props.children));
    }
    return node;
  }

  return <>{split(children)}</>;
}
