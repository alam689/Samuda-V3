import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { Consent, Field, FormFoot, Success, useSmartForm } from "../components/forms.jsx";
import { CATEGORIES, productsIn } from "../data/catalog.js";
import { useInquiry } from "../lib/inquiry.jsx";
import { usePageMeta } from "../lib/hooks.js";

const TABS = [["rfq", "Request a Quote"], ["general", "General Inquiry"]];

function QuoteForm() {
  const { items, add, remove, clear } = useInquiry();
  const [params] = useSearchParams();
  const doc = params.get("doc");
  const product = params.get("product");
  const form = useSmartForm({
    prefix: "RFQ",
    extraCheck: () => (items.length ? {} : { products: "Please add at least one product." }),
    onSuccess: () => clear(),
  });
  const { errors, fieldProps, setErrors } = form;

  useEffect(() => { if (product) add(product); }, [product, add]);

  const defaultMessage = doc === "Certificates"
    ? "Please share copies of your ISO 9001 certificate and other quality / compliance certificates."
    : doc
    ? `Please share the ${doc === "SDS" ? "Safety Data Sheet (SDS)" : "Technical Data Sheet (TDS)"} for ${product || "the selected product"}.`
    : "";

  if (form.reference) {
    return (
      <Success
        title="Thank you — request received." reference={form.reference}
        lines={["Please keep your reference number for any follow-up.", "Our sales team will review your requirement and contact you shortly."]}
        again="Submit another request" onAgain={form.reset}
      />
    );
  }

  return (
    <form ref={form.formRef} onSubmit={form.onSubmit} noValidate>
      <div className={`form-alert${form.alert ? " is-shown" : ""}`} role="alert">{form.alert}</div>
      <div className="form-grid">
        <Field label="Products of interest" htmlFor="rfq-pick" required full error={errors.products}
          hint={<>You can also add products from the <Link to="/products" style={{ color: "var(--green)", textDecoration: "underline" }}>catalogue</Link>.</>}>
          <select
            id="rfq-pick" data-skip="1" value=""
            onChange={(e) => { if (e.target.value) { add(e.target.value); setErrors((er) => ({ ...er, products: "" })); } }}
          >
            <option value="">Add a product…</option>
            {CATEGORIES.map((c) => (
              <optgroup key={c.slug} label={c.name}>
                {productsIn(c.slug).map((p) => <option key={p.slug} value={p.name}>{p.name}</option>)}
              </optgroup>
            ))}
          </select>
          <div className="picked" aria-live="polite">
            {items.map((name) => (
              <span key={name} className="picked__chip">
                {name} <button type="button" aria-label={`Remove ${name}`} onClick={() => remove(name)}>&times;</button>
              </span>
            ))}
          </div>
          <input type="hidden" name="products" value={items.join(", ")} />
        </Field>

        <Field label="Contact name" htmlFor="rfq-name" required error={errors.name}>
          <input id="rfq-name" type="text" autoComplete="name" required {...fieldProps("name")} />
        </Field>
        <Field label="Company name" htmlFor="rfq-company" required error={errors.company}>
          <input id="rfq-company" type="text" autoComplete="organization" required {...fieldProps("company")} />
        </Field>
        <Field label="Business email" htmlFor="rfq-email" required error={errors.email}>
          <input id="rfq-email" type="email" autoComplete="email" required {...fieldProps("email")} />
        </Field>
        <Field label="Phone number" htmlFor="rfq-phone" required error={errors.phone}>
          <input id="rfq-phone" type="tel" autoComplete="tel" required data-phone="" data-msg="Please enter a valid phone number, e.g. +880 1XXX-XXXXXX." {...fieldProps("phone")} />
        </Field>
        <Field label="Country" htmlFor="rfq-country" required error={errors.country}>
          <input id="rfq-country" type="text" autoComplete="country-name" defaultValue="Bangladesh" required {...fieldProps("country")} />
        </Field>
        <Field as="fieldset" label="Preferred contact method">
          <div className="radio-row" style={{ marginTop: 8 }}>
            {["Email", "Phone", "WhatsApp"].map((m, i) => (
              <label key={m}><input type="radio" name="contactMethod" value={m.toLowerCase()} defaultChecked={i === 0} /> {m}</label>
            ))}
          </div>
        </Field>
        <Field label="Grade / concentration" htmlFor="rfq-grade" optional>
          <input id="rfq-grade" name="grade" type="text" placeholder="e.g. 50%" />
        </Field>
        <Field label="Estimated quantity" htmlFor="rfq-qty" required error={errors.quantity}>
          <div className="inline-row">
            <input id="rfq-qty" type="number" min="1" step="any" required {...fieldProps("quantity")} />
            <label className="sr-only" htmlFor="rfq-unit">Unit</label>
            <select id="rfq-unit" name="unit" defaultValue="MT">
              {["kg", "MT", "Litres", "Drums", "IBCs"].map((u) => <option key={u}>{u}</option>)}
            </select>
          </div>
        </Field>
        <Field label="Intended application" htmlFor="rfq-app">
          <input id="rfq-app" name="application" type="text" placeholder="e.g. Cotton knit bleaching" />
        </Field>
        <Field label="Delivery location" htmlFor="rfq-location" required error={errors.deliveryLocation}>
          <input id="rfq-location" type="text" placeholder="City / port" required {...fieldProps("deliveryLocation")} />
        </Field>
        <Field label="Message" htmlFor="rfq-message" full>
          <textarea id="rfq-message" name="message" defaultValue={defaultMessage} placeholder="Packaging preferences, delivery schedule, documents required…" />
        </Field>
        <Consent fieldProps={fieldProps} error={errors.consent} msg="Please agree so we can respond to your request.">
          I agree that Samuda Chemical may use these details to respond to my request, as described in the <Link to="/privacy">Privacy Policy</Link>.
        </Consent>
      </div>
      <FormFoot busy={form.busy} label="Submit Request" />
    </form>
  );
}

function GeneralForm() {
  const form = useSmartForm({ prefix: "INQ" });
  const { errors, fieldProps } = form;

  if (form.reference) {
    return (
      <Success
        title="Thank you — message sent." reference={form.reference}
        lines={["Your reference number:", "We will get back to you as soon as possible."]}
        again="Send another message" onAgain={form.reset}
      />
    );
  }

  return (
    <form ref={form.formRef} onSubmit={form.onSubmit} noValidate>
      <div className={`form-alert${form.alert ? " is-shown" : ""}`} role="alert">{form.alert}</div>
      <div className="form-grid">
        <Field label="Full name" htmlFor="g-name" required error={errors.name}>
          <input id="g-name" type="text" autoComplete="name" required {...fieldProps("name")} />
        </Field>
        <Field label="Company" htmlFor="g-company" optional>
          <input id="g-company" name="company" type="text" autoComplete="organization" />
        </Field>
        <Field label="Email" htmlFor="g-email" required error={errors.email}>
          <input id="g-email" type="email" autoComplete="email" required {...fieldProps("email")} />
        </Field>
        <Field label="Phone" htmlFor="g-phone" optional error={errors.phone}>
          <input id="g-phone" type="tel" autoComplete="tel" data-phone="" {...fieldProps("phone")} />
        </Field>
        <Field label="Topic" htmlFor="g-topic" required full error={errors.topic}>
          <select id="g-topic" required defaultValue="" {...fieldProps("topic")}>
            <option value="">Select a topic…</option>
            {["Product information", "Technical support", "Export inquiry", "Supplier / partnership", "Plant visit", "Media", "Other"].map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Message" htmlFor="g-message" required full error={errors.message}>
          <textarea id="g-message" required minLength={10} {...fieldProps("message")} />
        </Field>
        <Consent fieldProps={fieldProps} error={errors.consent} msg="Please agree so we can respond to your message.">
          I agree that Samuda Chemical may use these details to respond to my message, as described in the <Link to="/privacy">Privacy Policy</Link>.
        </Consent>
      </div>
      <FormFoot busy={form.busy} label="Send Message" />
    </form>
  );
}

export default function Contact() {
  usePageMeta("Contact & Request a Quote", "Contact Samuda Chemical Complex Limited or request a quotation for basic chemicals, performance chemicals and calcium carbonate.");
  const { hash } = useLocation();
  const [tab, setTab] = useState(hash === "#general" ? "general" : "rfq");
  useEffect(() => { if (hash === "#general" || hash === "#rfq") setTab(hash.slice(1)); }, [hash]);

  const onKey = (e, i) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = TABS[(i + (e.key === "ArrowRight" ? 1 : TABS.length - 1)) % TABS.length][0];
    setTab(next);
    document.getElementById(`tab-${next}`)?.focus();
  };

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true" />
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>Contact</span></nav>
          <p className="eyebrow eyebrow--light">Contact &amp; inquiries</p>
          <h1 className="page-hero__title reveal-words">Let&rsquo;s talk <em>chemistry</em>.</h1>
          <p className="page-hero__lead reveal">Request a quotation or send us a general inquiry. Every submission receives a reference number, and our team will respond as soon as possible.</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 64 }} id="rfq">
        <div className="container form-shell">
          <div className="form-card" id="general">
            <div className="tabs" role="tablist" aria-label="Inquiry type">
              {TABS.map(([key, label], i) => (
                <button
                  key={key} id={`tab-${key}`} className="tab" type="button" role="tab"
                  aria-controls={`panel-${key}`} aria-selected={tab === key} tabIndex={tab === key ? 0 : -1}
                  onClick={() => setTab(key)} onKeyDown={(e) => onKey(e, i)}
                >
                  {label}
                </button>
              ))}
            </div>
            <div id="panel-rfq" role="tabpanel" aria-labelledby="tab-rfq" hidden={tab !== "rfq"}><QuoteForm /></div>
            <div id="panel-general" role="tabpanel" aria-labelledby="tab-general" hidden={tab !== "general"}><GeneralForm /></div>
          </div>

          <aside className="contact-aside" id="offices">
            <div className="contact-box">
              <h3>Head Office</h3>
              <address>T.K. Bhaban, 13 Karwan Bazar<br />Dhaka-1215, Bangladesh</address>
              <p><a href="mailto:info@scclbd.com">info@scclbd.com</a></p>
              <p style={{ margin: 0 }}>
                <a href="https://www.google.com/maps/search/?api=1&query=T.K.+Bhaban+Karwan+Bazar+Dhaka" target="_blank" rel="noopener noreferrer">Get directions</a>
              </p>
            </div>
            <div className="contact-box contact-box--light">
              <h3>Factory</h3>
              <address>Sikirgaon, Gazaria<br />Munshiganj, Bangladesh</address>
              <p style={{ margin: 0 }} className="muted">Site visits by appointment only.</p>
            </div>
            <div className="contact-box contact-box--light">
              <h3>What happens next?</h3>
              <ol className="steps-mini">
                <li>You receive a reference number instantly.</li>
                <li>Your request is assigned to a sales specialist.</li>
                <li>We contact you to confirm details and share a quotation.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
