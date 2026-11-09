import { useEffect } from "react";

const SITE = "Samuda Chemical";

/** Sets the document title and meta description for a page. */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : "Samuda Chemical Complex Limited — Industrial Chemicals Manufacturer in Bangladesh";
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
      }
      tag.content = description;
    }
  }, [title, description]);
}

const reduceMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function splitWords(el) {
  if (el.dataset.split) return;
  el.dataset.split = "1";
  let i = 0;
  (function walk(node) {
    Array.from(node.childNodes).forEach((child) => {
      if (child.nodeType === 3) {
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) return frag.appendChild(document.createTextNode(part));
          const s = document.createElement("span");
          s.className = "w";
          s.textContent = part;
          s.style.transitionDelay = `${i++ * 28}ms`;
          frag.appendChild(s);
        });
        node.replaceChild(frag, child);
      } else if (child.nodeType === 1) {
        walk(child);
      }
    });
  })(el);
}

function countUp(el) {
  const target = parseInt(el.dataset.count, 10);
  if (Number.isNaN(target)) return;
  const start = performance.now();
  const frame = (ts) => {
    const p = Math.min((ts - start) / 1600, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))).toLocaleString("en-US");
    if (p < 1) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

/**
 * Scroll-reveal for static page content: `.reveal`, `.reveal-words` and `[data-count]`.
 * Runs per route; a MutationObserver picks up content that mounts later.
 * These classes are added outside React's props, so React never resets them.
 */
export function useScrollReveal(key) {
  useEffect(() => {
    const SEL = ".reveal, .reveal-words, [data-count]";
    const seen = new WeakSet();
    const show = (el) => {
      el.classList.add("is-visible");
      if (el.hasAttribute("data-count") && !reduceMotion()) countUp(el);
    };
    const io = "IntersectionObserver" in window && !reduceMotion()
      ? new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return;
            show(e.target);
            io.unobserve(e.target);
          });
        }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 })
      : null;

    const scan = () => {
      document.querySelectorAll(SEL).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (el.classList.contains("reveal-words")) splitWords(el);
        io ? io.observe(el) : show(el);
      });
    };
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.getElementById("main") || document.body, { childList: true, subtree: true });
    return () => { mo.disconnect(); io && io.disconnect(); };
  }, [key]);
}
