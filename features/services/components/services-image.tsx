import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { Reveal } from '@/components/shared/reveal';
import { getDictionary } from '@/i18n/server';

export async function ServicesImage() {
  const { t } = await getDictionary();
  return (
    <Container className="pb-12 lg:pb-20">
      <Reveal variant="media">
        <figure>
          <div className="relative aspect-4/3 overflow-hidden bg-secondary sm:aspect-video lg:aspect-[2.4/1]">
            <div className="scroll-parallax absolute inset-x-0 -inset-y-[7%]">
            <Image
              src="/images/tax-consultation-editorial.jpg"
              alt={t.services.image.alt}
              fill
              loading="eager"
              sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) calc(100vw - 80px), calc(100vw - 160px)"
              className="object-cover object-center"
            />
            </div>
          </div>
          <figcaption className="mt-4 flex flex-wrap justify-between gap-2 text-xs text-muted">
            <span>{t.services.image.caption}</span>
            <span className="text-[0.625rem] tracking-widest uppercase">{t.services.image.illustrative}</span>
          </figcaption>
        </figure>
      </Reveal>
    </Container>
  );
}
