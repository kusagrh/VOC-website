import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * On every route change: scroll to top for a plain path, or scroll to the
 * matching section for a "/#section" hash link (used when SmartLink sends
 * someone from another page back to a homepage anchor).
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Wait a tick for the route's content to mount before measuring.
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash]);

  return null;
}
