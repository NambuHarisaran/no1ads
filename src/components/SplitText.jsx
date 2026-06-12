import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

const SplitText = ({
  text,
  className = '',
  delay = 100,
  duration = 0.6,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'left',
  tag = 'p',
  onLetterAnimationComplete,
}) => {
  const ref = useRef(null);
  const [fontsLoaded, setFontsLoaded] = useState(document.fonts.status === 'loaded');

  if (!fontsLoaded) {
    document.fonts.ready.then(() => setFontsLoaded(true));
  }

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.set(ref.current, { opacity: 1 });
        return;
      }
      const el = ref.current;

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      let targets;
      const splitter = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === 'lines',
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
      });

      switch (splitType) {
        case 'lines':
          targets = splitter.lines;
          break;
        case 'words':
          targets = splitter.words;
          break;
        default:
          targets = splitter.chars;
      }

      targets.forEach(t => {
        t.style.willChange = 'transform, opacity';
      });

      gsap.set(el, { opacity: 1 });

      const tween = gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            fastScrollEnd: true,
          },
          onComplete: () => {
            onLetterAnimationComplete?.();
          },
          willChange: 'transform, opacity',
          force3D: true,
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        splitter.revert();
      };
    },
    {
      dependencies: [text, fontsLoaded, delay, duration, ease, splitType, threshold, rootMargin],
      scope: ref,
    }
  );

  const style = {
    textAlign,
    overflow: 'hidden',
    display: 'inline-block',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    opacity: 0,
  };
  const classes = `split-parent ${className}`;
  const Tag = tag;

  return (
    <Tag ref={ref} style={style} className={classes}>
      {text}
    </Tag>
  );
};

export default SplitText;
