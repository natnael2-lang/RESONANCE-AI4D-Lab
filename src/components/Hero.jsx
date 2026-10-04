import { hero, links, join } from '../data/content';
import Ripples from './Ripples';
import Icon from './Icon';

// Entrance choreography: each block floats in a beat after the previous one.
const enter = (ms) => ({ animationDelay: `${ms}ms` });
const anim = 'animate-float-in motion-reduce:animate-none';

// Renders the lead sentence with its key phrase underlined in the site's bright green.
function Lead() {
  const i = hero.lead.indexOf(hero.highlight);
  if (i < 0) return hero.lead;
  return (
    <>
      {hero.lead.slice(0, i)}
      <span className="font-semibold text-brand-900 underline decoration-brand-400 decoration-[3px] underline-offset-[6px]">{hero.highlight}</span>
      {hero.lead.slice(i + hero.highlight.length)}
    </>
  );
}

export default function Hero() {
  return (
    <section id="top" className="-mt-[4.75rem] bg-gradient-to-b from-green-50 to-slate-50 pt-[4.75rem] text-brand-900" aria-labelledby="hero-title">
      {/* Text and motif share one grid, so the circles can never cover or be cut by the content. */}
      <div className="page grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
        <div className="lg:col-span-7">
          <h1 id="hero-title" style={enter(0)} className={`${anim} font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl`}>
            {hero.title[0]}
            <br />
            {hero.title[1]}
          </h1>

          <p style={enter(150)} className={`${anim} mt-6 max-w-xl text-lg leading-relaxed text-slate-700 sm:text-xl`}>
            <Lead />
          </p>

          <div style={enter(300)} className={`${anim} mt-8`}>
            <a href={links.apply} className="btn group bg-brand-800 text-white hover:bg-brand-900">
              {join.button} <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Below the text on mobile, to the right on desktop. Always fully visible. */}
        <div className="flex justify-center lg:col-span-5 lg:justify-end" aria-hidden="true">
          <Ripples className="aspect-square w-64 text-brand-600/50 sm:w-80 lg:w-full lg:max-w-sm" />
        </div>
      </div>
    </section>
  );
}