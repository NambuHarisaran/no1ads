import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import PropTypes from "prop-types";

function MagneticButton({
  children,
  className = "",
  as = "button",
  href,
  type = "button",
  strength = 0.3,
  onClick
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.35 });

  const handleMove = (event) => {
    const element = ref.current;
    if (!element) return;

    const { left, top, width, height } = element.getBoundingClientRect();
    const offsetX = event.clientX - (left + width / 2);
    const offsetY = event.clientY - (top + height / 2);

    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    ref,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    onClick,
    style: { x: springX, y: springY },
    whileTap: { scale: 0.97 },
    className
  };

  if (as === "a") {
    return (
      <motion.a {...sharedProps} href={href}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button {...sharedProps} type={type}>
      {children}
    </motion.button>
  );
}

MagneticButton.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.oneOf(["button", "a"]),
  href: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  strength: PropTypes.number,
  onClick: PropTypes.func
};

export default MagneticButton;
