import { useEffect, useState } from "react";

/**
 * Centralised capability check so every heavy visual effect
 * (canvas particles, cursor glow, tilt, parallax) agrees on
 * whether it's safe/worthwhile to run.
 */
export function useDeviceCapability() {
  const [state, setState] = useState({
    reducedMotion: false,
    finePointer: true,
    isSmallScreen: false,
  });

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const screenQuery = window.matchMedia("(max-width: 767px)");

    const update = () =>
      setState({
        reducedMotion: motionQuery.matches,
        finePointer: pointerQuery.matches,
        isSmallScreen: screenQuery.matches,
      });

    update();
    motionQuery.addEventListener("change", update);
    pointerQuery.addEventListener("change", update);
    screenQuery.addEventListener("change", update);
    return () => {
      motionQuery.removeEventListener("change", update);
      pointerQuery.removeEventListener("change", update);
      screenQuery.removeEventListener("change", update);
    };
  }, []);

  return state;
}
