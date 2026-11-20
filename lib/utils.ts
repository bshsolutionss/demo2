/** Combine complete utility class names; callers own conflicting variants. */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
