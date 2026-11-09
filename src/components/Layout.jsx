import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useInquiry } from "../lib/inquiry.jsx";
import { useScrollReveal } from "../lib/hooks.js";

function Toast() {
  const { toast } = useInquiry();
  return (
    <div className={`toast${toast ? " is-shown" : ""}`} role="status" aria-live="polite">
      {toast && (
        <>
          {toast.message}
          {toast.withLink && <> · <Link to="/contact#rfq">Request quote</Link></>}
        </>
      )}
    </div>
  );
}

/** Scroll to the top on navigation, or to #hash targets once they have rendered. */
function useScrollManager() {
  const { pathname, hash, search } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    const seek = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else if (tries++ < 20) requestAnimationFrame(seek);
    };
    seek();
  }, [pathname, hash, search]);
}

export default function Layout() {
  const { pathname } = useLocation();
  useScrollManager();
  useScrollReveal(pathname);

  useEffect(() => {
    const onScroll = () => document.documentElement.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <Toast />
    </>
  );
}
