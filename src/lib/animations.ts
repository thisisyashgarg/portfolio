
// Intersection Observer for revealing elements on scroll
export const initRevealOnScroll = () => {
  const callback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((el) => observer.observe(el));

  // Staggered animations
  const staggerElements = document.querySelectorAll('.stagger-item');
  staggerElements.forEach((el, index) => {
    // Faster transition delay - reduced from 0.1s to 0.03s
    (el as HTMLElement).style.transitionDelay = `${index * 0.03}s`;
    observer.observe(el);
  });

  return observer;
};

// Page transitions
export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  // Faster transition duration - reduced from 0.3s to 0.15s
  animate: { opacity: 1, y: 0, transition: { duration: 0.15 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
};

// Scroll to element with smooth behavior
export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
