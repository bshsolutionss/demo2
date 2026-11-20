import { navigation } from '@/config/navigation';
import { site } from '@/config/site';
import { PrimaryCTA } from '@/components/shared/primary-cta';
import { NavigationLink } from './navigation-link';

export function DesktopNav() {
  return (
    <div className="hidden flex-1 items-center gap-10 lg:flex">
      <nav aria-label="Main navigation" className="flex flex-1 justify-center gap-8 xl:gap-10">
        {navigation.map(item => <NavigationLink {...item} key={item.href} />)}
      </nav>
      <PrimaryCTA href={site.appointment.href} target="_blank" rel="noopener noreferrer" variant="accent" className="shrink-0 gap-4">
        Book a consultation <span aria-hidden="true">↗</span>
      </PrimaryCTA>
    </div>
  );
}
