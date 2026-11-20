import { Container } from './container';
import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';
import { Brand } from '@/components/shared/brand';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary text-primary-foreground">
      <Container className="flex h-24 items-center justify-between gap-8">
        <Brand imageClassName="w-24 sm:w-28" />
        <DesktopNav />
        <MobileNav />
      </Container>
    </header>
  );
}
