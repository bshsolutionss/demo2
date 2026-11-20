import Image from 'next/image';
import { Container } from '@/components/layout/container';
import { Reveal } from '@/components/shared/reveal';

export function ServicesImage() {
  return (
    <Container className="pb-12 lg:pb-20">
      <Reveal variant="media">
        <figure>
          <div className="relative aspect-4/3 overflow-hidden bg-secondary sm:aspect-video lg:aspect-[2.4/1]">
            <Image
              src="/images/tax-consultation-editorial.jpg"
              alt="Illustrative consultation showing two people reviewing tax paperwork with a pen and calculator"
              fill
              loading="eager"
              sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 1024px) calc(100vw - 80px), calc(100vw - 160px)"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="mt-4 flex flex-wrap justify-between gap-2 text-xs text-muted">
            <span>Tax preparation. A conversation about your next step.</span>
            <span className="text-[0.625rem] tracking-widest uppercase">Illustrative imagery</span>
          </figcaption>
        </figure>
      </Reveal>
    </Container>
  );
}
