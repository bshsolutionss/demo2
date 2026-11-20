import { PageIntro } from '@/components/shared/page-intro';

export function AboutIntroduction() {
  return <PageIntro eyebrow="About EH" title={<>Your Goals.<br />
    <span className="text-muted">Our Priority.</span>
  </>} description="EH Tax & Business Solutions provides U.S. tax preparation for individuals, families, and small businesses, along with business formation guidance for entrepreneurs. Serving Central Florida with support in English and Spanish." />;
}
