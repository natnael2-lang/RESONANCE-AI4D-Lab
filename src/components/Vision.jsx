import { vision } from '../data/content';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import Icon from './Icon';
import { useInView } from '../hooks/useInView';

// Icons follow the order of the pillars. Add `icon: 'name'` to a pillar in content.js to override.
const icons = ['bulb', 'sprout', 'community'];

// Each pillar rises in on scroll and a green rule draws itself above it.
function Pillar({ v, i }) {
  const [ref, inView] = useInView();
  return (
    <li ref={ref} className="relative py-8">
      <span
        className={`absolute inset-x-0 top-0 h-px origin-left bg-brand-500/60 ${inView ? 'animate-draw-line' : 'scale-x-0'} motion-reduce:scale-x-100 motion-reduce:animate-none`}
        style={{ animationDelay: `${i * 150}ms` }}
        aria-hidden="true"
      />
      <Reveal delay={i * 150} className="grid gap-4 sm:grid-cols-12 sm:items-center sm:gap-8">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-brand-700 sm:col-span-2" aria-hidden="true">
          <Icon name={v.icon ?? icons[i] ?? 'bulb'} className="h-7 w-7" />
        </span>
        <h3 className="font-display text-2xl font-bold text-brand-900 sm:col-span-4 sm:text-3xl">{v.title}</h3>
        <p className="text-lg leading-relaxed text-slate-700 sm:col-span-6">{v.text}</p>
      </Reveal>
    </li>
  );
}

export default function Vision() {
  return (
    <section id="vision" className="bg-slate-50 py-16 sm:py-24" aria-labelledby="vision-title">
      <div className="page">
        <SectionHeading title="Our Vision" id="vision-title" />
        <ul className="mt-10 border-b border-slate-200">
          {vision.map((v, i) => (
            <Pillar key={v.title} v={v} i={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}