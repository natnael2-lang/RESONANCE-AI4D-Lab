import { useEffect, useState } from 'react';

// Tracks scroll direction so the header can tuck away while reading and
// reappear the moment the user scrolls up. It stays in normal flow (sticky),
// so it never covers the top of the page.
export function useScrollState(threshold = 8) {
  const [state, setState] = useState({ hidden: false, scrolled: false, progress: 0 });

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const delta = y - last;

      setState((prev) => {
        let hidden = prev.hidden;
        if (y < 80) hidden = false;
        else if (delta > threshold) hidden = true;
        else if (delta < -threshold) hidden = false;
        const progress = max > 0 ? Math.min(1, y / max) : 0;
        const scrolled = y > 10;
        if (hidden === prev.hidden && scrolled === prev.scrolled && Math.abs(progress - prev.progress) < 0.004) {
          return prev;
        }
        return { hidden, scrolled, progress };
      });

      if (Math.abs(delta) > threshold) last = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return state;
}
