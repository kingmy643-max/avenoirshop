"use client";
import { useEffect } from "react";

/**
 * Runs the first-visit logo splash.
 * The splash markup lives in app/layout.tsx so it is painted before React loads;
 * this component only decides when it is finished.
 *
 *  - shown once per browser session (sessionStorage)
 *  - tap / click / Esc / Enter / Space skips it
 *  - fires "avn:splash-done" when the star starts opening, so the hero logo can start animating
 *  - a timeout guarantees it can never get stuck on screen
 */
const SEEN_KEY = "avn_splash";
const announce = () => window.dispatchEvent(new Event("avn:splash-done"));

export default function SplashControl() {
  useEffect(() => {
    const el = document.getElementById("splash");
    if (!el) return;
    const root = document.documentElement;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      try { sessionStorage.setItem(SEEN_KEY, "1"); } catch { /* private mode: splash may show again, that's fine */ }
      announce();
      root.classList.add("splash-seen");
      el.remove();
    };

    // Already seen in this session (the inline script in <head> sets this class before first paint).
    if (root.classList.contains("splash-seen")) { finish(); return; }
    try { sessionStorage.setItem(SEEN_KEY, "1"); } catch { /* ignore */ }

    const ownEvent = (e: AnimationEvent) => e.target === el; // ignore events bubbling up from the logo layers
    const onStart = (e: AnimationEvent) => {
      if (ownEvent(e) && (e.animationName === "splash-open" || e.animationName === "splash-out")) announce();
    };
    const onEnd = (e: AnimationEvent) => {
      if (ownEvent(e) && (e.animationName === "splash-out" || e.animationName === "splash-skip")) finish();
    };
    const skip = () => { el.classList.add("skip"); announce(); };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") skip();
    };

    el.addEventListener("animationstart", onStart);
    el.addEventListener("animationend", onEnd);
    el.addEventListener("click", skip);
    window.addEventListener("keydown", onKey);
    const failsafe = window.setTimeout(finish, 5000);

    return () => {
      window.clearTimeout(failsafe);
      el.removeEventListener("animationstart", onStart);
      el.removeEventListener("animationend", onEnd);
      el.removeEventListener("click", skip);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return null;
}
