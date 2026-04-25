import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function CustomCursor() {
  const cursorX = useMotionValue(-120);
  const cursorY = useMotionValue(-120);

  const springX = useSpring(cursorX, { stiffness: 420, damping: 35, mass: 0.35 });
  const springY = useSpring(cursorY, { stiffness: 420, damping: 35, mass: 0.35 });

  const ringX = useSpring(cursorX, { stiffness: 210, damping: 26, mass: 0.8 });
  const ringY = useSpring(cursorY, { stiffness: 210, damping: 26, mass: 0.8 });

  const [isEnabled, setIsEnabled] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const pointer = window.matchMedia("(pointer:fine)");

    const updatePointerCapability = () => {
      setIsEnabled(pointer.matches);
    };

    updatePointerCapability();

    if (pointer.addEventListener) {
      pointer.addEventListener("change", updatePointerCapability);
    }

    const moveCursor = (event) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };

    const hideCursor = () => {
      cursorX.set(-120);
      cursorY.set(-120);
    };

    const pressCursor = () => setIsPressed(true);
    const releaseCursor = () => setIsPressed(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseout", hideCursor);
    window.addEventListener("mousedown", pressCursor);
    window.addEventListener("mouseup", releaseCursor);

    return () => {
      if (pointer.removeEventListener) {
        pointer.removeEventListener("change", updatePointerCapability);
      }
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseout", hideCursor);
      window.removeEventListener("mousedown", pressCursor);
      window.removeEventListener("mouseup", releaseCursor);
    };
  }, [cursorX, cursorY]);

  if (!isEnabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] h-2.5 w-2.5 rounded-full bg-brand-red mix-blend-screen"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: isPressed ? 0.75 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[89] h-8 w-8 rounded-full border border-brand-red/70"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: isPressed ? 1.8 : 1, opacity: isPressed ? 0.35 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}

export default CustomCursor;
