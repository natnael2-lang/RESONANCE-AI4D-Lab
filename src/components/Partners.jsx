import { partners } from '../data/content';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

// Logos share one height so the row looks even; each keeps its own proportions and colours.
export default function Partners() {
  return (
    <section id="partners" className="bg-white py-16 sm:py-24" aria-labelledby="partners-title">
      <div className="page">
        <SectionHeading title="Our Partners" id="partners-title" />
        <ul className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(14rem,1fr))] gap-4">
          {partners.map((p, i) => (
            <Reveal as="li" key={p.name} delay={i * 130}>
              <div className="flex h-full min-h-[9rem] items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-card motion-reduce:transition-none">
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className="h-24 w-auto max-w-full object-contain"
                  />
                ) : (
                  <span className="font-display text-3xl font-bold text-ink">{p.name}</span>
                )}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}