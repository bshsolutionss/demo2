import { PageIntro } from '@/components/shared/page-intro';
import { getDictionary } from '@/i18n/server';

export async function ServicesIntroduction() {
  const { t } = await getDictionary();
  const copy = t.services.intro;
  return (
    <PageIntro
      eyebrow={copy.eyebrow}
      title={<>{copy.title1}<br />
        <span className="text-muted">{copy.title2}</span>
      </>}
      description={copy.description}
    />
  );
}
