import Link from 'next/link';
import { Brand } from '@/components/shared/brand';
import { Container } from './container';
import { navigation } from '@/config/navigation';
import { site } from '@/config/site';
export function SiteFooter() {
  return <footer className="bg-primary pt-14 pb-7 text-white">
    <Container>
      <div className="grid gap-10 border-b border-white/15 pb-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Brand />
          <p className="mt-6 max-w-64 text-sm leading-relaxed text-white/60">Tax clarity. Business confidence.<br />Serving Central Florida.<br />English & Spanish.</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-col items-start gap-4 text-sm">{navigation.map(item => <Link className="underline-offset-4 hover:underline" key={item.href} href={item.href}>{item.label}</Link>)}</nav>
        <div className="space-y-4 text-sm">
          <a href={`mailto:${site.email}`} className="block break-all underline-offset-4 hover:underline">{site.email}</a>{site.social.map(item => <a className="block text-white/70 underline-offset-4 hover:underline" key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">{item.label}<span className="sr-only"> (opens in a new tab)</span>
          </a>)}</div>
      </div>
      <div className="flex flex-col justify-between gap-4 pt-6 text-xs text-white/55 sm:flex-row">
        <p>© 2026 {site.name}</p>
        <p>Your Goals. Our Priority.</p>
      </div>
    </Container>
  </footer>;
}
