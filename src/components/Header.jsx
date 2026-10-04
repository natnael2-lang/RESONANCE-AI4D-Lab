import { useEffect, useState } from 'react';
import { site, nav, MAX_VISIBLE_TABS } from '../data/content';
import { useScrollState } from '../hooks/useScrollState';
import Icon from './Icon';

function Brand() {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-3" aria-label={`${site.name}, home`}>
      <img src={site.logo} alt="" width="40" height="40" className="h-10 w-10 shrink-0 rounded-full" />
      <span className="font-display text-[0.95rem] font-bold leading-tight text-white sm:text-xl">{site.name}</span>
    </a>
  );
}

const linkClass =
  'block whitespace-nowrap rounded-md px-3 py-2 text-[0.95rem] font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white';
const panelClass =
  'invisible absolute top-full z-10 min-w-[13rem] translate-y-1 rounded-xl bg-white p-2 text-slate-800 opacity-0 shadow-lift transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100';
const panelLink = 'block rounded-lg px-3 py-2 text-sm font-medium hover:bg-green-50';

// Dropdowns open on hover AND on keyboard focus (focus-within): no JS state needed.
function DesktopItem({ item }) {
  if (!item.children) {
    return (
      <li>
        <a href={item.href} className={linkClass}>
          {item.label}
        </a>
      </li>
    );
  }
  return (
    <li className="group relative">
      <a href={item.href} className={`${linkClass} inline-flex items-center gap-1`} aria-haspopup="true">
        {item.label}
        <Icon name="chevron" className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
      </a>
      <ul className={`${panelClass} left-0`}>
        {item.children.map((c) => (
          <li key={c.href}>
            <a href={c.href} className={panelLink}>
              {c.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

function MoreMenu({ items }) {
  return (
    <li className="group relative">
      <button type="button" className={`${linkClass} inline-flex items-center gap-1`} aria-haspopup="true">
        More
        <Icon name="chevron" className="h-3.5 w-3.5" />
      </button>
      <ul className={`${panelClass} right-0`}>
        {items.flatMap((i) => [
          <li key={i.id}>
            <a href={i.href} className={panelLink}>
              {i.label}
            </a>
          </li>,
          ...(i.children || []).map((c) => (
            <li key={c.href}>
              <a href={c.href} className={`${panelLink} pl-7 text-slate-600`}>
                {c.label}
              </a>
            </li>
          )),
        ])}
      </ul>
    </li>
  );
}

export default function Header({ onSearch }) {
  const { scrolled, progress } = useScrollState();
  const [open, setOpen] = useState(false);

  const visible = nav.slice(0, MAX_VISIBLE_TABS);
  const more = nav.slice(MAX_VISIBLE_TABS);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Sticky (in flow): content starts below it and is never covered. It stays pinned while scrolling and stretches to the full screen width. */}
      <header
        className={`sticky top-[-0.75rem] z-40 pt-3 text-white transition-all duration-300 focus-within:translate-y-0 motion-reduce:transition-none ${
          scrolled ? 'px-0' : 'px-3 sm:px-5 lg:px-8'}`}
      >
        <a
          href="#main"
          className="absolute left-3 top-[-4rem] z-50 rounded-md bg-white px-4 py-2 text-sm font-semibold text-brand-900 focus:top-3"
        >
          Skip to main content
        </a>

        {/* Floating bar at the top; stretches edge to edge once the page scrolls. */}
        <div className={`mx-auto bg-brand-900 transition-all duration-300 motion-reduce:transition-none ${scrolled ? 'max-w-full rounded-none shadow-lift' : 'max-w-[90rem] rounded-2xl shadow-card'}`}>
        <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6 lg:px-10">
          <Brand />

          <nav aria-label="Primary" className="hidden xl:block">
            <ul className="flex items-center gap-1">
              {visible.map((item) => (
                <DesktopItem key={item.id} item={item} />
              ))}
              {more.length > 0 && <MoreMenu items={more} />}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={onSearch}
              className="inline-flex h-10 items-center gap-2 rounded-full px-3 text-white/90 transition-colors hover:bg-white/10"
              aria-label="Search"
            >
              <Icon name="search" className="h-5 w-5" />
              <kbd className="hidden rounded border border-white/30 px-1.5 text-[11px] text-white/60 xl:inline" aria-hidden="true">
                /
              </kbd>
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 xl:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Icon name="menu" className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Reading-progress line in the site's greens. */}
        <div className="mx-4 h-[3px] rounded-full bg-white/10 sm:mx-6 lg:mx-10" aria-hidden="true">
          <div
            className="h-full origin-left bg-gradient-to-r from-brand-500 via-brand-400 to-logo-sage"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 xl:hidden" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu">
          <button type="button" className="absolute inset-0 bg-brand-950/70" aria-label="Close menu" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[min(22rem,90vw)] flex-col bg-brand-900 text-white shadow-lift">
            <div className="flex h-16 items-center justify-end px-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10"
                aria-label="Close menu"
                autoFocus
              >
                <Icon name="close" className="h-6 w-6" />
              </button>
            </div>

            <nav aria-label="Primary" className="flex-1 overflow-y-auto px-3 pb-8">
              <ul>
                {nav.map((item) => (
                  <li key={item.id} className="border-b border-white/10 last:border-0">
                    <a href={item.href} className="block rounded-lg px-3 py-4 text-lg font-medium hover:bg-white/10">
                      {item.label}
                    </a>
                    {item.children?.map((c) => (
                      <a key={c.href} href={c.href} className="mb-2 block rounded-lg py-2 pl-8 pr-3 text-base text-white/75 hover:bg-white/10">
                        {c.label}
                      </a>
                    ))}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}