import { useEffect, useRef } from "react";
import "./CustomCursor.css";

/**
 * CustomCursor
 * - Dot:  follows mouse instantly via transform
 * - Ring: trails behind using requestAnimationFrame lerp (0.1 factor)
 * - Hover state fires on every <a>, <button>, <input>, <select>,
 *   <textarea> and anything with data-cursor="pointer"
 * - Hidden automatically on touch devices
 */
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Don't activate on touch-only devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let rafId;
    let visible = false;

    /* ── Position helpers ── */
    function moveDot(x, y) {
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }

    function moveRing(x, y) {
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    }

    /* ── Mouse move ── */
    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!visible) {
        // Snap ring to mouse on first move so it doesn't slide in from 0,0
        ringX = mouseX;
        ringY = mouseY;
        dot.classList.add("cursor-visible");
        ring.classList.add("cursor-visible");
        visible = true;
      }

      moveDot(mouseX, mouseY);
    }

    /* ── Smooth ring animation loop ── */
    function animateRing() {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      moveRing(ringX, ringY);
      rafId = requestAnimationFrame(animateRing);
    }
    animateRing();

    /* ── Click effects ── */
    function onDown() {
      dot.classList.add("cursor--click");
      ring.classList.add("cursor--click");
    }
    function onUp() {
      dot.classList.remove("cursor--click");
      ring.classList.remove("cursor--click");
    }

    /* ── Hover detection (event delegation — works with dynamic content) ── */
    function isInteractive(el) {
      return el.closest(
        'a, button, input, textarea, select, label, [role="button"], [data-cursor="pointer"]',
      );
    }

    function onEnter(e) {
      if (isInteractive(e.target)) {
        dot.classList.add("cursor--hover");
        ring.classList.add("cursor--hover");
      }
    }
    function onLeave(e) {
      if (isInteractive(e.target)) {
        dot.classList.remove("cursor--hover");
        ring.classList.remove("cursor--hover");
      }
    }

    /* ── Hide when leaving window ── */
    function onLeaveWindow() {
      dot.classList.remove("cursor-visible");
      ring.classList.remove("cursor-visible");
      visible = false;
    }
    function onEnterWindow() {
      dot.classList.add("cursor-visible");
      ring.classList.add("cursor-visible");
      visible = true;
    }

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"></div>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true"></div>
    </>
  );
}

export default CustomCursor;
