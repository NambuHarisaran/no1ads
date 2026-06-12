import { useEffect, useRef } from 'react';

// IntersectionObserver fade-up wrapper. stagger > 0 applies incremental
// transition-delay to direct children instead of the wrapper itself.
const Reveal = ({ children, className = '', stagger = 0, as: Tag = 'div', threshold = 0.15, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('revealed');
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (stagger > 0) {
              Array.from(el.children).forEach((child, i) => {
                child.style.transitionDelay = `${i * stagger}ms`;
              });
            }
            el.classList.add('revealed');
            observer.unobserve(el);
          }
        });
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, threshold]);

  return (
    <Tag ref={ref} className={`${stagger > 0 ? 'stagger-children' : 'reveal'} ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Reveal;
