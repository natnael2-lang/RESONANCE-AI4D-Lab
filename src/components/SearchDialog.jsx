import { useEffect, useMemo, useRef, useState } from 'react';
import Icon from './Icon';

export default function SearchDialog({ open, onClose, index }) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    setQuery('');
    setActive(0);
    inputRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return index.slice(0, 8);
    return index
      .filter((i) => `${i.title} ${i.type} ${i.text || ''}`.toLowerCase().includes(q))
      .slice(0, 10);
  }, [query, index]);

  if (!open) return null;

  const go = (item) => {
    onClose();
    if (item.href.startsWith('#')) {
      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.assign(item.href);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      go(results[active]);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center px-4 pt-[10vh]" role="dialog" aria-modal="true" aria-label="Search">
      <button type="button" className="absolute inset-0 bg-brand-950/70" aria-label="Close search" onClick={onClose} tabIndex={-1} />
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-white text-slate-800 shadow-lift" onKeyDown={onKeyDown}>
        <div className="flex items-center gap-3 border-b border-slate-200 px-5">
          <Icon name="search" className="h-5 w-5 text-brand-700" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            type="search"
            placeholder="Search"
            className="h-14 w-full bg-transparent text-base outline-none placeholder:text-slate-500"
            role="combobox"
            aria-expanded="true"
            aria-controls="search-results"
            aria-activedescendant={results[active] ? `result-${active}` : undefined}
            aria-label="Search"
          />
          <button type="button" onClick={onClose} className="rounded-md px-2 py-1 text-xs font-medium text-slate-600 hover:bg-slate-100" aria-label="Close search">
            Esc
          </button>
        </div>

        <ul id="search-results" role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
          {results.length === 0 && <li className="px-4 py-6 text-center text-sm text-slate-600">No results</li>}
          {results.map((r, i) => (
            <li key={`${r.title}-${i}`} id={`result-${i}`} role="option" aria-selected={i === active}>
              <button
                type="button"
                onClick={() => go(r)}
                onMouseEnter={() => setActive(i)}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left ${i === active ? 'bg-green-50' : ''}`}
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{r.title}</span>
                  {r.text && <span className="block truncate text-xs text-slate-600">{r.text}</span>}
                </span>
                <span className="shrink-0 rounded-full bg-brand-100 px-2.5 py-0.5 text-[11px] font-semibold text-brand-800">{r.type}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
