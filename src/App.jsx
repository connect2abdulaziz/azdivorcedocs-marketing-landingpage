import { useCallback, useEffect, useState } from 'react';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { MobileNav } from './components/layout/MobileNav';
import { SkipLink } from './components/layout/SkipLink';
import { ArizonaSection } from './components/sections/ArizonaSection';
import { ClosingSection } from './components/sections/ClosingSection';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { FaqSection } from './components/sections/FaqSection';
import { HeroSection } from './components/sections/HeroSection';
import { PricingSection } from './components/sections/PricingSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { QualificationSection } from './components/sections/QualificationSection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { WhySection } from './components/sections/WhySection';
import { ServiceDialog } from './components/ui/ServiceDialog';
import { usePageMotion } from './hooks/usePageMotion';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [dialogKey, setDialogKey] = useState(null);
  const [qualification, setQualification] = useState(null);
  const [presetHelp, setPresetHelp] = useState(null);

  usePageMotion();

  const closeNavigation = useCallback(() => {
    setNavOpen(false);
  }, []);

  const openDialog = useCallback((key) => {
    setNavOpen(false);
    setDialogKey(key);
  }, []);

  const startDivorce = useCallback((helpPreference = null) => {
    setNavOpen(false);
    if (typeof helpPreference === 'string') setPresetHelp(helpPreference);
    document.getElementById('qualify')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleQualificationComplete = useCallback((answers) => {
    setQualification(answers);
    openDialog(answers.help === 'guided' ? 'quote' : 'start');
  }, [openDialog]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) closeNavigation();
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
        onStart={startDivorce}
        onSignIn={() => openDialog('portal')}
      />
      <MobileNav
        open={navOpen}
        onClose={closeNavigation}
        onStart={startDivorce}
        onSignIn={() => {
          closeNavigation();
          openDialog('portal');
        }}
      />
      <main id="main">
        <HeroSection onStart={startDivorce} />
        <QualificationSection
          presetHelp={presetHelp}
          onComplete={handleQualificationComplete}
        />
        <WhySection onStart={() => startDivorce()} />
        <ProcessSection onStart={() => startDivorce()} />
        <PricingSection onStart={startDivorce} />
        <ArizonaSection onStart={() => startDivorce()} />
        <ComparisonSection onStart={() => startDivorce()} />
        <ReviewsSection />
        <FaqSection />
        <ClosingSection onStart={startDivorce} />
      </main>
      <Footer onSignIn={() => openDialog('portal')} />
      <ServiceDialog
        dialogKey={dialogKey}
        qualification={qualification}
        onClose={() => setDialogKey(null)}
      />
    </>
  );
}
