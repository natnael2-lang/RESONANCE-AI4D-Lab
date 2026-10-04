import { useCallback, useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import SearchDialog from './components/SearchDialog';
import Hero from './components/Hero';
import Vision from './components/Vision';
import FocusAreas from './components/FocusAreas';
import Join from './components/Join';
import Partners from './components/Partners';
import Footer from './components/Footer';
import { searchIndex } from './data/content';

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const lastFocus = useRef(null);

  const openSearch = useCallback(() => {
    lastFocus.current = document.activeElement;
    setSearchOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
    lastFocus.current?.focus?.();
  }, []);

  // "/" or Ctrl/Cmd+K opens search, unless the user is typing in a field.
  useEffect(() => {
    const onKey = (e) => {
      const typing = /input|textarea|select/i.test(e.target.tagName) || e.target.isContentEditable;
      if ((e.key === '/' && !typing) || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        openSearch();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openSearch]);

  return (
    <>
      <Header onSearch={openSearch} />
      <main id="main">
        <Hero />
        <Vision />
        <FocusAreas />
        <Join />
        <Partners />
      </main>
      <Footer />
      <SearchDialog open={searchOpen} onClose={closeSearch} index={searchIndex} />
    </>
  );
}
