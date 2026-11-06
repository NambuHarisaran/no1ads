import { gsap, ScrollTrigger } from './gsap.js';
import { getLenis, scrollToTarget } from './SmoothScroll.jsx';

/**
 * Binds horizontal touch swiping, mouse dragging, and horizontal trackpad
 * wheel gestures on `surfaceEl` to a pinned GSAP ScrollTrigger (`getST()`).
 *
 * Why this architecture works seamlessly:
 * Because ScrollTrigger maps vertical scroll `[st.start, st.end]` to the
 * horizontal track position, translating horizontal swipe deltas (`-dx`) into
 * scroll position within `[st.start, st.end]` keeps vertical scrolling ("scroll
 * down") and horizontal swiping ("swipe left/right") 100% synchronized with
 * zero jump or desync.
 */
export function bindHorizontalSwipe(surfaceEl, getST, { speed = 1.35 } = {}) {
  if (!surfaceEl) return () => {};

  let startX = 0;
  let startY = 0;
  let lastX = 0;
  let lastT = 0;
  let velX = 0;
  let startScrollY = 0;
  let lockAxis = null; // 'x' | 'y' | null
  let isPointerDown = false;
  let inertiaTween = null;
  const proxy = { y: 0 };

  const setScrollY = y => {
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(y, { immediate: true });
    } else {
      window.scrollTo(0, y);
    }
    ScrollTrigger.update();
  };

  const stopInertia = () => {
    if (inertiaTween) {
      inertiaTween.kill();
      inertiaTween = null;
    }
  };

  // --- Touch events (Mobile & Tablet) ---
  const onTouchStart = e => {
    if (e.touches.length !== 1) return;
    const st = getST();
    if (!st) return;
    stopInertia();
    const t = e.touches[0];
    startX = lastX = t.clientX;
    startY = t.clientY;
    lastT = performance.now();
    velX = 0;
    lockAxis = null;
    startScrollY = gsap.utils.clamp(st.start, st.end, window.scrollY);
  };

  const onTouchMove = e => {
    if (e.touches.length !== 1) return;
    const st = getST();
    if (!st) return;
    const t = e.touches[0];
    const dx = t.clientX - startX;
    const dy = t.clientY - startY;

    if (!lockAxis) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      lockAxis = Math.abs(dx) >= Math.abs(dy) * 0.85 ? 'x' : 'y';
    }

    if (lockAxis !== 'x') return;

    // Prevent browser back/forward gesture while swiping the track horizontally
    if (e.cancelable) e.preventDefault();

    const now = performance.now();
    const dt = Math.max(1, now - lastT);
    const instVel = (t.clientX - lastX) / dt; // px per ms
    velX = velX * 0.35 + instVel * 0.65;
    lastX = t.clientX;
    lastT = now;

    const targetY = gsap.utils.clamp(st.start, st.end, startScrollY - dx * speed);
    setScrollY(targetY);
  };

  const onTouchEnd = () => {
    if (lockAxis !== 'x') {
      lockAxis = null;
      return;
    }
    lockAxis = null;
    const st = getST();
    if (!st || Math.abs(velX) < 0.12) return;

    stopInertia();
    proxy.y = window.scrollY;
    const coast = gsap.utils.clamp(st.start, st.end, proxy.y - velX * 240 * speed);
    inertiaTween = gsap.to(proxy, {
      y: coast,
      duration: 0.48,
      ease: 'power2.out',
      onUpdate: () => setScrollY(proxy.y),
      onComplete: () => {
        inertiaTween = null;
      },
    });
  };

  // --- Mouse drag (Desktop grab & swipe) ---
  const onMouseDown = e => {
    if (e.button !== 0 || e.target.closest('a, button')) return;
    const st = getST();
    if (!st) return;
    stopInertia();
    isPointerDown = true;
    startX = lastX = e.clientX;
    lastT = performance.now();
    velX = 0;
    lockAxis = null;
    startScrollY = gsap.utils.clamp(st.start, st.end, window.scrollY);
    surfaceEl.classList.add('is-dragging');
  };

  const onMouseMove = e => {
    if (!isPointerDown) return;
    const st = getST();
    if (!st) return;
    const dx = e.clientX - startX;
    if (!lockAxis && Math.abs(dx) > 5) lockAxis = 'x';
    if (lockAxis !== 'x') return;

    e.preventDefault();
    const now = performance.now();
    const dt = Math.max(1, now - lastT);
    velX = (e.clientX - lastX) / dt;
    lastX = e.clientX;
    lastT = now;

    const targetY = gsap.utils.clamp(st.start, st.end, startScrollY - dx * speed);
    setScrollY(targetY);
  };

  const onMouseUp = () => {
    if (!isPointerDown) return;
    isPointerDown = false;
    surfaceEl.classList.remove('is-dragging');
    onTouchEnd();
  };

  // --- Trackpad horizontal two-finger scroll ---
  const onWheel = e => {
    if (Math.abs(e.deltaX) <= Math.abs(e.deltaY) || Math.abs(e.deltaX) < 2) return;
    const st = getST();
    if (!st) return;
    const cur = window.scrollY;
    if (cur < st.start - 8 || cur > st.end + 8) return;
    const nextY = gsap.utils.clamp(st.start, st.end, cur + e.deltaX);
    if (Math.abs(nextY - cur) > 0.5) {
      if (e.cancelable) e.preventDefault();
      setScrollY(nextY);
    }
  };

  surfaceEl.addEventListener('touchstart', onTouchStart, { passive: true });
  surfaceEl.addEventListener('touchmove', onTouchMove, { passive: false });
  surfaceEl.addEventListener('touchend', onTouchEnd, { passive: true });
  surfaceEl.addEventListener('touchcancel', onTouchEnd, { passive: true });
  surfaceEl.addEventListener('mousedown', onMouseDown);
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('mouseup', onMouseUp);
  surfaceEl.addEventListener('wheel', onWheel, { passive: false });

  return () => {
    stopInertia();
    surfaceEl.classList.remove('is-dragging');
    surfaceEl.removeEventListener('touchstart', onTouchStart);
    surfaceEl.removeEventListener('touchmove', onTouchMove);
    surfaceEl.removeEventListener('touchend', onTouchEnd);
    surfaceEl.removeEventListener('touchcancel', onTouchEnd);
    surfaceEl.removeEventListener('mousedown', onMouseDown);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    surfaceEl.removeEventListener('wheel', onWheel);
  };
}

/**
 * Step a pinned horizontal ScrollTrigger section forward (+1) or backward (-1)
 * by `1 / totalSteps` of its total scroll distance. Falls back to native
 * horizontal scroll on `fallbackScroller` when reduced-motion is active.
 */
export function stepHorizontalTrigger(st, dir, totalSteps = 8, fallbackScroller = null) {
  if (st) {
    const span = Math.max(1, st.end - st.start);
    const step = span / totalSteps;
    const cur = gsap.utils.clamp(st.start, st.end, window.scrollY);
    const target = gsap.utils.clamp(st.start, st.end, cur + dir * step);
    scrollToTarget(target, { duration: 0.65 });
    return;
  }
  if (fallbackScroller) {
    fallbackScroller.scrollBy({ left: dir * 300, behavior: 'smooth' });
  }
}
