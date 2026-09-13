import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { MobileNav } from './components/layout/MobileNav';
import { SkipLink } from './components/layout/SkipLink';
import { CinemaSection } from './components/sections/CinemaSection';
import { ClosingSection } from './components/sections/ClosingSection';
import { HumanSection } from './components/sections/HumanSection';
import { PricingSection } from './components/sections/PricingSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { ServiceRibbon } from './components/sections/ServiceRibbon';
import { ServicesSection } from './components/sections/ServicesSection';
import { ServiceDialog } from './components/ui/ServiceDialog';
import { usePageMotion } from './hooks/usePageMotion';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [dialogKey, setDialogKey] = useState(null);

  usePageMotion();

  const closeNavigation = useCallback(() => {
    setNavOpen(false);
  }, []);

  const openDialog = useCallback((key) => {
    setNavOpen(false);
    setDialogKey(key);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 800) closeNavigation();
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeNavigation();
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [closeNavigation]);

  return (
    <>
      <SkipLink />
      <Header
        navOpen={navOpen}
        onToggleNav={() => setNavOpen((open) => !open)}
        onOpenDialog={openDialog}
      />
      <MobileNav open={navOpen} onClose={closeNavigation} onOpenDialog={openDialog} />
      <main id="main">
        <CinemaSection onOpenDialog={openDialog} />
        <ServiceRibbon />
        <ServicesSection />
        <HumanSection />
        <ProcessSection />
        <PricingSection onOpenDialog={openDialog} />
        <ClosingSection onOpenDialog={openDialog} />
      </main>
      <Footer onOpenDialog={openDialog} />
      <ServiceDialog dialogKey={dialogKey} onClose={() => setDialogKey(null)} />
    </>
  );
}
