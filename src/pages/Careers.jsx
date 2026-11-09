import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { Consent, Field, FormFoot, Success, useSmartForm } from "../components/forms.jsx";
import { asset } from "../lib/asset.js";
import { usePageMeta } from "../lib/hooks.js";

const PERKS = [
  ["shield", "Safety culture", "Training and procedures that put people first."],
  ["microscope", "Technical learning", "Hands-on experience in production and quality."],
  ["users", "Strong teams", "Colleagues who support each other to do great work."],
  ["spark", "Group strength", "Part of T.K. Group, with opportunities to develop."],
];
const AREAS = ["Plant operations", "Laboratory & quality", "Engineering & maintenance", "Sales & marketing", "Supply chain & logistics", "Finance & administration"];

function ApplicationForm() {
  const [fileName, setFileName] = useState("");
  const form = useSmartForm({ prefix: "CV", onSuccess: () => setFileName("") });
  const { errors, fieldProps } = form;

  if (form.reference) {
    return (
      <Success
        title="Application received." reference={form.reference}
        lines={["Your reference number:", "Thank you for your interest in Samuda Chemical."]}
        again="Submit another application" onAgain={form.reset}
      />
    );
  }

  const cv = fieldProps("cv");
  return (
    <form ref={form.formRef} onSubmit={form.onSubmit} noValidate>
      <div className={`form-alert${form.alert ? " is-shown" : ""}`} role="alert">{form.alert}</div>
      <div className="form-grid">
        <Field label="Full name" htmlFor="c-name" required error={errors.name}>
          <input id="c-name" type="text" autoComplete="name" required {...fieldProps("name")} />
        </Field>
        <Field label="Email" htmlFor="c-email" required error={errors.email}>
          <input id="c-email" type="email" autoComplete="email" required {...fieldProps("email")} />
        </Field>
        <Field label="Phone" htmlFor="c-phone" required error={errors.phone}>
          <input id="c-phone" type="tel" autoComplete="tel" required data-phone="" {...fieldProps("phone")} />
        </Field>
        <Field label="Area of interest" htmlFor="c-area" required error={errors.area}>
          <select id="c-area" required defaultValue="" {...fieldProps("area")}>
            <option value="">Select…</option>
            {AREAS.map((a) => <option key={a}>{a}</option>)}
          </select>
        </Field>
        <Field label="CV / résumé" htmlFor="c-cv" required full error={errors.cv}>
          <label className="file-drop" htmlFor="c-cv">
            <Icon name="doc" />
            <div><strong>{fileName || "Upload your CV"}</strong><span>PDF or Word, up to 5 MB</span></div>
            <input
              id="c-cv" type="file" accept=".pdf,.doc,.docx" data-max-mb="5" required data-msg="Please attach your CV."
              {...cv}
              onChange={(e) => { setFileName(e.target.files[0]?.name || ""); form.validateOne(e.target); }}
            />
          </label>
        </Field>
        <Field label="Cover note" htmlFor="c-msg" optional full>
          <textarea id="c-msg" name="message" />
        </Field>
        <Consent fieldProps={fieldProps} error={errors.consent} msg="Please agree to continue.">
          I agree that Samuda Chemical may store and process my application for recruitment purposes, as described in the <Link to="/privacy">Privacy Policy</Link>.
        </Consent>
      </div>
      <FormFoot busy={form.busy} label="Submit Application" />
    </form>
  );
}

export default function Careers() {
  usePageMeta("Careers", "Build your career at Samuda Chemical Complex Limited. Explore opportunities in manufacturing, laboratory, engineering, sales and corporate functions.");
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" style={{ backgroundImage: `url(${asset("assets/img/plants/qc-lab.webp")})` }} aria-hidden="true" />
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>Careers</span></nav>
          <p className="eyebrow eyebrow--light">Careers</p>
          <h1 className="page-hero__title reveal-words">Build your future in <em>chemistry</em>.</h1>
          <p className="page-hero__lead reveal">Join a team that makes the products Bangladeshi industry relies on — and grow your skills in a safe, professional environment.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div><p className="eyebrow">Why Samuda</p><h2 className="h2">A place to <em>grow</em>.</h2></div>
            <p className="muted">We look for curious, careful and committed people across plant operations, laboratory, engineering, sales and support functions.</p>
          </div>
          <div className="cards-4">
            {PERKS.map(([ic, t, d], i) => (
              <article key={t} className="icard reveal" style={{ "--d": `${i * 80}ms` }}><Icon name={ic} /><h3>{t}</h3><p>{d}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mist" id="apply">
        <div className="container form-shell">
          <div>
            <div className="empty-state reveal" style={{ margin: "0 0 32px", maxWidth: "none", textAlign: "left", padding: 40 }}>
              <Icon name="clock" />
              <h2>No open positions listed right now</h2>
              <p className="muted" style={{ margin: 0 }}>New vacancies will be published here. You are welcome to submit a general application and we will keep your CV on file for suitable roles.</p>
            </div>
            <div className="form-card">
              <h2 className="h3" style={{ fontSize: "1.6rem", marginBottom: 24 }}>General application</h2>
              <ApplicationForm />
            </div>
          </div>
          <aside className="contact-aside">
            <div className="contact-box">
              <h3>Applicant privacy</h3>
              <p>Your application is used only for recruitment. We keep CVs securely and for a limited period, and you can ask us to delete your data at any time.</p>
              <p style={{ margin: 0 }}><Link to="/privacy">Read the Privacy Policy</Link></p>
            </div>
            <div className="contact-box contact-box--light">
              <h3>Recruitment process</h3>
              <ol className="steps-mini">
                <li>Submit your application online.</li>
                <li>Shortlisted candidates are contacted for interview.</li>
                <li>Successful candidates receive a formal offer.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
