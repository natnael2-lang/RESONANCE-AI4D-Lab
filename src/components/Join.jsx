import { join, links } from '../data/content';
import Ripples from './Ripples';
import Reveal from './Reveal';
import Icon from './Icon';

// The circles only appear where there is room beside the text (xl and up),
// fully inside the card, so they never sit behind the copy or get cut off.
export default function Join() {
  return (
    <section id="join" className="bg-slate-50 py-16 sm:py-24" aria-labelledby="join-title">
      <div className="page">
        <Reveal className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-600 via-brand-600 to-brand-500 px-6 py-14 text-white shadow-lift sm:px-14 sm:py-20">
          <Ripples
            waves={false}
            className="pointer-events-none absolute right-14 top-1/2 hidden h-72 w-72 -translate-y-1/2 text-white/30 xl:block"
          />
          <div className="relative max-w-2xl">
            <h2 id="join-title" className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {join.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white">{join.text}</p>
            <p className="mt-6 font-display text-xl font-bold sm:text-2xl">
              <a href={links.apply} className="underline decoration-brand-400 decoration-[3px] underline-offset-[6px] hover:text-green-100">
                {join.linkText}
              </a>
            </p>
            <a href={links.apply} className="btn group mt-8 bg-white text-brand-900 hover:bg-green-50">
              {join.button} <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}