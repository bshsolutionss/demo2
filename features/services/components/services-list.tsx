import { SectionContainer } from '@/components/shared/section-container';
import { services } from '../data/services';
import { ServiceDetail } from './service-detail';

export function ServicesList() {
  return (
    <SectionContainer aria-label="Confirmed business services" className="bg-white">
      {services.map(service => <ServiceDetail key={service.slug} service={service} />)}
    </SectionContainer>
  );
}
