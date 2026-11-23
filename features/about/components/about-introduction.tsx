import { PageIntro } from '@/components/shared/page-intro';
import { getDictionary } from '@/i18n/server';

export async function AboutIntroduction() {
  const { t } = await getDictionary();
  const copy = t.about.intro;
  return <PageIntro eyebrow={copy.eyebrow} title={<>{copy.title1}<br />
    <span className="text-muted">{copy.title2}</span>
  </>} description={copy.description} />;
}
