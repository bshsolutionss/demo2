import { getDictionary } from '@/i18n/server';
import { cn } from '@/lib/utils';

/**
 * Decorative oversized ticker; every phrase repeats content stated elsewhere on the page.
 * Each track renders the phrase list twice and slides exactly -50%, so the loop has no seam.
 * Row heights are fixed by `leading-none` + explicit height, so fonts or animation never shift layout.
 */
export async function MarqueeBand() {
  const { t } = await getDictionary();
  const copy = (key: string) => (
    <ul key={key} className="flex shrink-0 items-center">
      {t.marquee.map(item => (
        <li key={item} className="flex items-center whitespace-nowrap">
          <span className="px-[0.35em]">{item}</span>
          <span className="mx-[0.35em] size-[0.14em] shrink-0 rounded-full bg-accent" />
        </li>
      ))}
    </ul>
  );
  const track = (className: string) => (
    <div className={cn('flex h-[1em] w-max items-center will-change-transform group-hover:[animation-play-state:paused]', className)}>
      {copy('a')}
      {copy('b')}
    </div>
  );

  return (
    <div aria-hidden="true" className="group overflow-hidden border-y border-border bg-background py-8 text-[clamp(2.75rem,7vw,6.5rem)] leading-none font-medium tracking-[-0.05em] select-none [contain:paint] lg:py-12">
      {track('motion-safe:animate-marquee')}
      {/* Second, outlined row runs the other way on larger screens only (halves the work on phones). */}
      <div className="mt-3 hidden text-transparent [-webkit-text-stroke:1px_var(--accent-ink)] sm:block">
        {track('motion-safe:animate-marquee-reverse')}
      </div>
    </div>
  );
}
