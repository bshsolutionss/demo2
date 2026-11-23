import { SectionContainer } from '@/components/shared/section-container';
import { getDictionary } from '@/i18n/server';
import { services } from '../data/services';
import { ServiceDetail } from './service-detail';

export async function ServicesList() {
  const { t } = await getDictionary();
  return (
    <SectionContainer aria-label={t.services.listLabel} className="bg-white">
      {services.map(service => <ServiceDetail key={service.slug} service={service} t={t} />)}
    </SectionContainer>
  );
}
