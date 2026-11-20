import { PageIntro } from '@/components/shared/page-intro';
import { site } from '@/config/site';

export function ServicesIntroduction() {
  return (
    <PageIntro
      eyebrow="Our services"
      title={<>Tax matters. Business plans.<br />
        <span className="text-muted">A clearer starting point.</span>
      </>}
      description={`U.S. tax preparation for individuals, families, and small businesses, alongside business formation guidance for entrepreneurs. Serving ${site.serviceArea} in English and Spanish.`}
    />
  );
}
