import { site, nav } from '../data/content';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-900 py-12 text-white">
      <div className="page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <a href="#top" className="flex items-center gap-3" aria-label={`${site.name}, back to top`}>
          <img src={site.logo} alt="" width="40" height="40" className="h-10 w-10 rounded-full" />
          <span className="font-display text-xl font-bold">{site.name}</span>
        </a>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={n.href} className="inline-block py-1 text-white/85 hover:text-white hover:underline">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#top" className="inline-flex h-11 w-11 items-center justify-center self-start rounded-full border border-white/30 hover:bg-white/10 lg:self-auto" aria-label="Back to top">
          <Icon name="arrow" className="h-5 w-5 -rotate-90" />
        </a>
      </div>
    </footer>
  );
}