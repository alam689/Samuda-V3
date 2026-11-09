import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { asset } from "../lib/asset.js";
import { usePageMeta } from "../lib/hooks.js";

export default function Privacy() {
  usePageMeta("Privacy Policy", "How Samuda Chemical Complex Limited collects, uses and protects personal information submitted through this website.");
  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" aria-hidden="true"></div>
        <div className="container page-hero__inner">
          <nav className="breadcrumb" aria-label="Breadcrumb"><Link to="/">Home</Link><span>/</span><span>Privacy Policy</span></nav>
          <h1 className="page-hero__title">Privacy Policy</h1>
          <p className="page-hero__lead">How we handle the information you share with us through this website.</p>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Who we are</h2>
          <p>This website is operated by Samuda Chemical Complex Limited (&ldquo;Samuda&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), T.K. Bhaban, 13 Karwan Bazar, Dhaka-1215, Bangladesh.</p>

          <h2>Information we collect</h2>
          <ul>
            <li><strong>Inquiries and quotation requests:</strong> your name, company, email, phone number, country, delivery location and details of your requirement.</li>
            <li><strong>Job applications:</strong> your contact details, CV and any information you choose to include.</li>
            <li><strong>Inquiry list:</strong> products you add to your inquiry list are stored only in your own browser until you submit a request.</li>
          </ul>

          <h2>How we use it</h2>
          <p>We use your information only to respond to your inquiry, prepare quotations, process orders, assess job applications and keep appropriate business records. We do not sell your personal information.</p>

          <h2>Sharing</h2>
          <p>Your information is accessible only to authorised Samuda staff who need it, and to service providers who help us operate this website, under appropriate confidentiality obligations.</p>

          <h2>Retention</h2>
          <p>We keep personal information only for as long as necessary for the purposes above or as required by law. Job applications are retained for a limited period and then deleted.</p>

          <h2>Your choices</h2>
          <p>You may ask us to access, correct or delete your personal information by contacting <a href="mailto:info@scclbd.com">info@scclbd.com</a>.</p>

          <h2>Updates</h2>
          <p>We may update this policy from time to time. The latest version will always be available on this page.</p>
        </div>
      </section>
    </>
  );
}
