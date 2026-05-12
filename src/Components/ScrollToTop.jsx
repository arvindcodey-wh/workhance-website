import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function ScrollToTop() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // console.log(state);
    // If jobId exists, we are handling scroll in the Career component.
    // We return early to PREVENT window.scrollTo(0, 0) from ever firing.
    if (state?.jobId !== undefined) {
      return; 
    }

    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
}