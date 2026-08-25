import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * Renders a real router <Link> for app routes ("/career", "/login", ...)
 * and a plain <a> for in-page section anchors ("#programs", "#why-us").
 * Hash anchors clicked from a page other than "/" are redirected to
 * "/#section" via a Link so the browser lands on the homepage first.
 */
export default function SmartLink({ href, children, className = "", onClick, ...props }) {
  const { pathname } = useLocation();
  const isHash = href.startsWith("#");

  if (isHash && pathname !== "/") {
    return (
      <Link to={`/${href}`} className={className} onClick={onClick} {...props}>
        {children}
      </Link>
    );
  }

  if (isHash) {
    return (
      <a href={href} className={className} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link to={href} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}
