import { useEffect, useRef } from "react";
import "./CustomCursor.css";

/**
 * CustomCursor — magnetic snap variant
 * - Dot:   follows the real mouse position exactly, always
 * - Ring:  in idle state, a small circle with a rotating dashed
 *          decoration (a "scanner" look). On hovering any
 *          interactive element, it morphs (lerped width/height/
 *          position) to match that element's own bounding box and
 *          border-radius — snapping onto it like a magnet — and
 *          reveals a small directional arrow at its centre.
 * - Stays glued to the hovered element if the page scrolls while
 *   hovering (common with sticky headers, long cards, etc).
 * - Hidden automatically on touch devices and reduced-motion.
 */

const IDLE_SIZE = 34;
const HOVER_PADDING = 14;
const LERP_POS = 0.22;
const LERP_SIZE = 0.24;

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Ring's current (animated) box
    let cx = mouseX,
      cy = mouseY,
      cw = IDLE_SIZE,
      ch = IDLE_SIZE;
    // Ring's target box — what it's lerping toward
    let tx = mouseX,
      ty = mouseY,
      tw = IDLE_SIZE,
      th = IDLE_SIZE;

    let rafId;
    let visible = false;
    let hoveredEl = null;

    function isInteractive(el) {
      return el.closest(
        'a, button, input, textarea, select, label, [role="button"], [data-cursor="pointer"]',
      );
    }

    function setIdleTarget() {
      tx = mouseX;
      ty = mouseY;
      tw = IDLE_SIZE;
      th = IDLE_SIZE;
      ring.style.borderRadius = "50%";
      ring.classList.remove("cursor-ring--snapped");
    }

    function setHoverTarget(el) {
      const rect = el.getBoundingClientRect();
      tx = rect.left + rect.width / 2;
      ty = rect.top + rect.height / 2;
      tw = rect.width + HOVER_PADDING;
      th = rect.height + HOVER_PADDING;

      const computed = getComputedStyle(el).borderRadius;
      // If the element itself has sharp corners, use a soft
      // rounded-rect instead of a literal 0px snap.
      ring.style.borderRadius =
        computed && computed !== "0px" ? computed : "14px";
      ring.classList.add("cursor-ring--snapped");
    }

    /* ── Mouse move ── */
    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!visible) {
        cx = mouseX;
        cy = mouseY;
        dot.classList.add("cursor-visible");
        ring.classList.add("cursor-visible");
        visible = true;
      }

      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      if (!hoveredEl) {
        tx = mouseX;
        ty = mouseY;
      }
    }

    /* ── Smooth lerp loop for the ring's position + size ── */
    function animate() {
      cx += (tx - cx) * LERP_POS;
      cy += (ty - cy) * LERP_POS;
      cw += (tw - cw) * LERP_SIZE;
      ch += (th - ch) * LERP_SIZE;

      ring.style.width = `${cw}px`;
      ring.style.height = `${ch}px`;
      ring.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;

      rafId = requestAnimationFrame(animate);
    }
    animate();

    /* ── Click effects ── */
    function onDown() {
      dot.classList.add("cursor--click");
      ring.classList.add("cursor--click");
    }
    function onUp() {
      dot.classList.remove("cursor--click");
      ring.classList.remove("cursor--click");
    }

    /* ── Hover detection + magnetic snap ── */
    function onOver(e) {
      const el = isInteractive(e.target);
      if (el) {
        hoveredEl = el;
        dot.classList.add("cursor--hover");
        ring.classList.add("cursor--hover");
        setHoverTarget(el);
      }
    }
    function onOut(e) {
      const el = isInteractive(e.target);
      if (el && el === hoveredEl) {
        hoveredEl = null;
        dot.classList.remove("cursor--hover");
        ring.classList.remove("cursor--hover");
        setIdleTarget();
      }
    }

    /* ── Keep the snap glued to its element on scroll/resize ── */
    function onScrollOrResize() {
      if (hoveredEl) setHoverTarget(hoveredEl);
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
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);
    window.addEventListener("scroll", onScrollOrResize, {
      passive: true,
      capture: true,
    });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
      window.removeEventListener("scroll", onScrollOrResize, true);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true"></div>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span className="cursor-ring__idle-deco" aria-hidden="true"></span>
        <span className="cursor-ring__arrow" aria-hidden="true">
          <i className="fa-solid fa-arrow-right"></i>
        </span>
      </div>
    </>
  );
}

export default CustomCursor;
