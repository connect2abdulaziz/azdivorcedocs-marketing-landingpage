import { useEffect } from 'react';

const clamp = (value) => Math.max(0, Math.min(1, value));
const ease = (value) => value * value * (3 - 2 * value);

export function usePageMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return undefined;

    const cinema = document.querySelector('.cinema');
    const stage = document.querySelector('.cinema-stage');
    const one = document.querySelector('.scene-one');
    const two = document.querySelector('.scene-two');
    const balance = document.querySelector('.balance');
    const balanceImage = document.querySelector('.balance-image');
    const progress = document.querySelector('.scroll-track i');
    const dots = document.querySelector('.scene-dots');

    if (!cinema || !stage || !one || !two || !balance || !balanceImage || !progress) {
      return undefined;
    }

    const firstImage = one.querySelector('img');
    const secondImage = two.querySelector('img');
    const firstCopy = one.querySelector('.scene-copy');
    const secondCopy = two.querySelector('.scene-copy');
    let pending = false;

    function paint() {
      const progressValue = clamp(
        -cinema.getBoundingClientRect().top / (cinema.offsetHeight - stage.offsetHeight),
      );
      const reveal = ease(clamp((progressValue - 0.35) / 0.35));

      firstImage.style.transform = `scale(${1 + progressValue * 0.25}) translate3d(${progressValue * -2}%,${progressValue * -2}%,0)`;
      firstCopy.style.opacity = 1 - clamp((progressValue - 0.15) / 0.25);
      firstCopy.style.marginTop = `${-progressValue * 100}px`;
      two.style.clipPath = `inset(${(1 - reveal) * 100}% 0 0 0)`;
      secondImage.style.transform = `scale(${1.13 - clamp((progressValue - 0.35) / 0.65) * 0.13}) translate3d(0,${(1 - reveal) * 6}%,0)`;
      secondCopy.style.opacity = clamp((progressValue - 0.55) / 0.2);
      secondCopy.style.marginBottom = `${(1 - clamp((progressValue - 0.55) / 0.3)) * -35}px`;
      progress.style.width = `${progressValue * 100}%`;
      if (dots) dots.dataset.scene = progressValue > 0.55 ? '2' : '1';

      const box = balance.getBoundingClientRect();
      const balanceProgress = clamp((window.innerHeight - box.top) / (window.innerHeight + box.height));
      balanceImage.style.transform = `translate3d(0,${(balanceProgress - 0.5) * 7}%,0) scale(1.05)`;
      pending = false;
    }

    function schedule() {
      if (!pending) {
        pending = true;
        requestAnimationFrame(paint);
      }
    }

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    paint();

    let observer;
    if ('IntersectionObserver' in window) {
      document.documentElement.classList.add('motion');
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 },
      );
      document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    }

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      observer?.disconnect();
      document.documentElement.classList.remove('motion');
    };
  }, []);
}
