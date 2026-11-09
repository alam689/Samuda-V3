import { asset } from "../lib/asset.js";

// Official Samuda Chemical Complex Limited wordmark.
// Two versions are rendered: the blue original for light backgrounds and a white
// version for dark ones (hero overlay, scrolled blue header, footer). CSS picks one.
export default function Logo({ light = false }) {
  return (
    <span className={`logo${light ? " logo--light" : ""}`}>
      <img className="logo__img logo__img--color" src={asset("assets/img/brand/samuda-logo.png")} alt="Samuda Chemical Complex Limited" width="295" height="92" />
      <img className="logo__img logo__img--white" src={asset("assets/img/brand/samuda-logo-white.png")} alt="" aria-hidden="true" width="295" height="92" />
    </span>
  );
}
