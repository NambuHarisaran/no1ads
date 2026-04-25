import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import PropTypes from "prop-types";

function AnimatedCounter({ value, suffix = "", duration = 1.5, decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 100,
    damping: 30,
    mass: 0.7,
    restDelta: 0.001
  });

  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const controls = springValue.on("change", (latest) => {
      const formatted = Number.parseFloat(latest.toFixed(decimals));
      const rounded = decimals > 0 ? formatted.toFixed(decimals) : Math.floor(formatted).toString();
      setDisplay(rounded.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    });

    motionValue.set(value);

    return () => {
      controls();
    };
  }, [isInView, value, motionValue, springValue, decimals]);

  useEffect(() => {
    if (!isInView) return;
    const timeout = setTimeout(() => motionValue.set(value), duration * 1000 * 0.25);
    return () => clearTimeout(timeout);
  }, [duration, isInView, motionValue, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

AnimatedCounter.propTypes = {
  value: PropTypes.number.isRequired,
  suffix: PropTypes.string,
  duration: PropTypes.number,
  decimals: PropTypes.number
};

export default AnimatedCounter;
