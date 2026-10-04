import { focusAreas } from '../data/content';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Icon from './Icon';

// Four equal cards: they are informational (no separate pages), so no arrows, numbers or hover lift.
export default function FocusAreas() {
  return (
    <section id="focus" className="bg-white py-16 sm:py-24" aria-labelledby="focus-title">
      <div className="page">
        <SectionHeading title="Key Focus Areas" id="focus-title" />

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((f, i) => (
            <Reveal as="li" key={f.id} delay={i * 100}>
              <div className={`relative h-full overflow-hidden rounded-2xl p-7 sm:p-8 ${f.tint}`}>
                <span className={`absolute inset-x-0 top-0 h-1.5 ${f.bar}`} aria-hidden="true" />
                <span className={`inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-card ${f.iconStyle}`}>
                  <Icon name={f.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold leading-snug text-ink sm:text-2xl">{f.title}</h3>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}