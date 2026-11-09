import { useRef, useState } from "react";
import Icon from "./Icon.jsx";

const MESSAGES = {
  valueMissing: "This field is required.",
  typeMismatch: "Please enter a valid email address.",
  tooShort: "Please add a little more detail.",
};
const PHONE = /^[0-9+()\-\s]{7,20}$/;

/** Returns an error message for one input, or "" when it is valid. */
function checkInput(input) {
  const custom = input.dataset.msg;
  if (input.type === "file" && input.files?.[0]) {
    const f = input.files[0];
    const maxMb = Number(input.dataset.maxMb || 5);
    const accepted = (input.accept || "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
    const ext = `.${f.name.split(".").pop().toLowerCase()}`;
    if (accepted.length && !accepted.includes(ext)) return "Please upload a PDF or Word document.";
    if (f.size > maxMb * 1024 * 1024) return `File is larger than ${maxMb} MB.`;
  }
  if (input.dataset.phone !== undefined && input.value.trim() && !PHONE.test(input.value.trim())) {
    return custom || "Please enter a valid phone number.";
  }
  if (input.validity.valid) return "";
  if (input.validity.valueMissing) return input.type === "checkbox" || input.type === "file" ? custom || MESSAGES.valueMissing : MESSAGES.valueMissing;
  for (const k of Object.keys(MESSAGES)) if (input.validity[k]) return custom || MESSAGES[k];
  return "Please check this field.";
}

function makeRef(prefix) {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  return `SCCL-${prefix}-${ymd}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

/**
 * Form state: per-field errors, submit with validation, reference numbers and success state.
 * `extraCheck(form)` may return { name: message } for checks outside native inputs.
 * Set `endpoint` to POST multipart form data to a backend; without one, success is simulated.
 */
export function useSmartForm({ prefix, endpoint = "", extraCheck, onSuccess }) {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [alert, setAlert] = useState("");
  const [busy, setBusy] = useState(false);
  const [reference, setReference] = useState(null);

  const inputs = () => Array.from(formRef.current.elements).filter((el) => el.name && el.type !== "hidden" && !el.dataset.skip);

  const validateOne = (el) => setErrors((e) => ({ ...e, [el.name]: checkInput(el) }));

  const fieldProps = (name) => ({
    name,
    "aria-invalid": errors[name] ? "true" : "false",
    onBlur: (e) => (e.target.value || e.target.type === "checkbox") && validateOne(e.target),
    onChange: (e) => errors[name] && validateOne(e.target),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const next = {};
    let first = null;
    for (const el of inputs()) {
      const msg = checkInput(el);
      if (msg) { next[el.name] = msg; first = first || el; }
    }
    Object.assign(next, extraCheck?.(formRef.current) || {});
    setErrors(next);
    if (Object.values(next).some(Boolean)) {
      setAlert("Please review the highlighted fields and try again.");
      (first || formRef.current.querySelector("[aria-invalid=true]"))?.focus();
      return;
    }
    setAlert("");
    setBusy(true);
    const ref = makeRef(prefix);
    try {
      if (endpoint) {
        const body = new FormData(formRef.current);
        body.append("reference", ref);
        body.append("submittedAt", new Date().toISOString());
        const res = await fetch(endpoint, { method: "POST", body });
        if (!res.ok) throw new Error(res.status);
      } else {
        await new Promise((r) => setTimeout(r, 900)); // no backend configured yet
      }
      setReference(ref);
      onSuccess?.(ref);
    } catch {
      setAlert("Sorry — we couldn't send your message. Please try again or email info@scclbd.com.");
    } finally {
      setBusy(false);
    }
  };

  const reset = () => { setReference(null); setErrors({}); setAlert(""); };

  return { formRef, errors, alert, busy, reference, fieldProps, onSubmit, reset, setErrors, validateOne };
}

export function Field({ label, htmlFor, required, optional, hint, error, full, children, as = "div" }) {
  const Tag = as;
  const Label = as === "fieldset" ? "legend" : "label";
  return (
    <Tag className={`field${full ? " field--full" : ""}${error ? " has-error" : ""}`}>
      {label && (
        <Label htmlFor={as === "fieldset" ? undefined : htmlFor}>
          {label}
          {required && <span className="req" aria-hidden="true"> *</span>}
          {optional && <span className="opt"> (optional)</span>}
        </Label>
      )}
      {children}
      {hint && <span className="field__hint">{hint}</span>}
      <span className="field__error">{error}</span>
    </Tag>
  );
}

export function Consent({ fieldProps, error, msg, children }) {
  return (
    <div className={`field field--full${error ? " has-error" : ""}`}>
      <label className="consent">
        <input type="checkbox" required data-msg={msg} {...fieldProps("consent")} /> <span>{children}</span>
      </label>
      <span className="field__error">{error}</span>
    </div>
  );
}

export function FormFoot({ busy, label }) {
  return (
    <div className="form-foot">
      <p>Fields marked <span style={{ color: "var(--danger)" }}>*</span> are required.</p>
      <button className={`btn btn--primary${busy ? " is-loading" : ""}`} type="submit">{label} <Icon name="arrow" /></button>
    </div>
  );
}

export function Success({ title, reference, lines, again, onAgain }) {
  return (
    <div className="success is-shown" role="status" tabIndex={-1} ref={(el) => el?.focus()}>
      <div className="success__icon"><Icon name="check" /></div>
      <h3>{title}</h3>
      <p className="muted">{lines[0]}</p>
      <span className="success__ref">{reference}</span>
      <p className="muted">{lines[1]}</p>
      <button className="btn btn--outline" type="button" onClick={onAgain}>{again}</button>
    </div>
  );
}
