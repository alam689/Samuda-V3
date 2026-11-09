import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

const KEY = "sccl-inquiry";
const InquiryContext = createContext(null);

function readStored() {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

export function InquiryProvider({ children }) {
  const [items, setItems] = useState(readStored);
  const [toast, setToast] = useState(null);
  const [bump, setBump] = useState(0);
  const timer = useRef();

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)); } catch { /* storage unavailable */ }
  }, [items]);

  const notify = useCallback((message, withLink = false) => {
    clearTimeout(timer.current);
    setToast({ message, withLink, id: Date.now() });
    timer.current = setTimeout(() => setToast(null), 3600);
  }, []);

  const add = useCallback((name) => setItems((list) => (list.includes(name) ? list : [...list, name])), []);
  const remove = useCallback((name) => setItems((list) => list.filter((n) => n !== name)), []);
  const clear = useCallback(() => setItems([]), []);

  const itemsRef = useRef(items);
  itemsRef.current = items;

  const toggle = useCallback((name) => {
    if (itemsRef.current.includes(name)) {
      remove(name);
      notify(`Removed ${name} from your inquiry list`);
    } else {
      add(name);
      setBump((b) => b + 1);
      notify(`${name} added to your inquiry list`, true);
    }
  }, [add, remove, notify]);

  const value = useMemo(
    () => ({ items, add, remove, clear, toggle, has: (n) => items.includes(n), toast, bump }),
    [items, add, remove, clear, toggle, toast, bump]
  );
  return <InquiryContext.Provider value={value}>{children}</InquiryContext.Provider>;
}

export const useInquiry = () => useContext(InquiryContext);
