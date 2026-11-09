# Samuda Chemical Complex Limited — Website (V3, React)

The corporate website for SCCL, rebuilt as a **React** single-page app (Vite + React Router). The colours follow the official Samuda brand on [scclbd.com](https://www.scclbd.com/about-us/).

| Token | Colour | Use |
|---|---|---|
| Samuda Green | `#07864B` | Primary buttons, links, panels, certificate cards |
| Bright Green | `#3DD08A` | Accents on dark backgrounds, the two-tone divider |
| Green (text) | `#07864B` | Green text and icons on white (meets WCAG AA contrast) |
| Slate | `#182C39` | Dark sections, footer, body headings |
| Typeface | Ubuntu | As used on scclbd.com, with Instrument Serif italics for accent words |

## Run it locally

You need [Node.js](https://nodejs.org) 18 or newer. In this folder:

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:5173. Pages reload automatically as you edit.

To create the production build in `dist/` and preview it:

```bash
npm run build
```

```bash
npm run preview
```

## Project structure

```
index.html                 HTML shell (fonts, meta)
public/assets/             images, favicon and the policy PDF (served as-is)
src/
  main.jsx                 entry: router + inquiry-list provider
  App.jsx                  routes
  styles.css               design system (Samuda palette tokens at the top)
  components/
    Layout.jsx             header, footer, toast, scroll handling, scroll-reveal
    Header.jsx, MegaMenus.jsx, Footer.jsx, Logo.jsx, Icon.jsx
    products.jsx           product card, gallery, category cards, industry groupings
    WorldMap.jsx           dotted world map (land data bundled from the world-atlas package)
    forms.jsx              form validation, reference numbers, success states
  pages/                   one component per page (Home, Products, ProductDetail, Plants, ...)
  data/products.json       product catalogue (single source for menus, cards, filters, detail pages)
  data/policies.js         labour-rights commitments (English + Bengali) and the policy index
  lib/                     inquiry-list context, page-meta and scroll-reveal hooks, asset paths
legacy-static/             the previous static (Python-built) version, kept for reference
```

## Editing content

- **Products:** edit `src/data/products.json`. The fields are the same as before: `slug`, `name`, `formula`, `category`, `chemical`, `form`, `short`, `overview` and `industries`, plus optional `image`, `features`, `properties`, `tables`, `dosage`, `usage`, `applications`, `capacity`, `capacityShort`, `packaging`, `technology` and `storage`. Product images go in `public/assets/img/products/<image>.webp`.
- **Page text:** edit the matching file in `src/pages/`.
- **Colours:** edit the tokens at the top of `src/styles.css`.

## Forms

The quote, general-inquiry and careers forms validate in the browser and issue a reference number such as `SCCL-RFQ-20261028-AB12`. There is no backend yet. To receive submissions, pass an `endpoint` to `useSmartForm({ prefix, endpoint })` in `src/pages/Contact.jsx` and `src/pages/Careers.jsx`. The form then POSTs its data as `multipart/form-data`.

## Deployment

The build is static: deploy the `dist/` folder to any web host. Because the app uses clean URLs (e.g. `/products/caustic-soda`), the host must serve `index.html` for unknown paths. `.github/workflows/deploy-pages.yml` handles this for GitHub Pages: it builds with the repository sub-path and adds a `404.html` fallback.

## Before launch: confirm with Samuda

Based on the blueprint's content-governance rules, check these items with the company before publishing:

| Item | Where it appears | Status |
|---|---|---|
| Logo | Header, footer, favicon | Vector **recreation** of the S mark. Replace the SVG in `src/components/Logo.jsx` (and `public/assets/img/favicon.svg`) with the official logo |
| Photography | Site-wide | Real Samuda photos from `products.docx` and `Plants.docx` are used for products, plants and the lab. The homepage hero (aerial tanks) and a few page banners still use the first supplied images. Replace them with real high-resolution (1920 px+) Samuda photos if available |
| Email `info@scclbd.com` | Utility bar, footer, contact | Confirm the address. No phone numbers are published yet |
| Head office: T.K. Bhaban, 13 Karwan Bazar, Dhaka-1215 | Footer, About, Contact | Confirm floor and current address |
| Factory: Sikirgaon, Gazaria, Munshiganj | Footer, About, Contact | Confirm. The mock-up also mentions a Chattogram (Chandgaon) site, which has been left out until verified |
| Established 2006, T.K. Group concern | Home, About | Confirm with company records |
| "30+ export countries" and regions (Asia, Africa, Europe) | Home, Global Reach | From a 2024 article and the mock-up. Confirm the current figure |
| Product data (18 products) | Catalogue and detail pages | Taken from `products.docx`. Obvious typos were corrected (e.g. "Carbon Loren" → Carbone Lorraine, "Tarloskar" → Kirloskar, "Deuse" → Dense, density unit g/lm → g/ml) |
| Hydrochloric acid capacity | HCl page, Plants page | The source says "Monthly production capacity of HCl = 150-180 MT/Day". Shown as **150–180 MT/day**. Confirm the unit |
| Calcium carbonate (uncoated/coated) specs | CaCO₃ page | The source's property table and packaging text were copied from CPW/HCl, so they are **omitted**. Supply the real CaCO₃ specification table |
| Production capacities | Product pages, Plants page, Home | Published as stated in `products.docx` / `Plants.docx` |
| "One of the largest caustic soda & hydrogen peroxide producers in Bangladesh" | Home hero, About, footer | Wording from `Plants.docx` |
| Labour Rights policy (English) | `policies.html` | English text is a translation of the Bengali original from `Company Policy.docx`. Have HR review the translation |
| Policy manual PDF | `policies.html` (download) | **Approved** for public download (27 Oct 2026). The full 81-page 2020 PDF is published |
| Mission, vision and values | About | Draft wording. Needs approval |
| Quality, safety and sustainability statements | Quality and Manufacturing pages | Kept general, with no certifications or figures. Add verified certificates (name, scope, issuer, validity) |
| Privacy Policy | `privacy.html` | Template. Needs legal review |

## Next phases (from the blueprint)

- Backend and admin panel: products, documents (TDS/SDS), inquiry management and roles.
- Full Bangla language version (the Labour Rights policy already has an English/বাংলা toggle).
- Real TDS and SDS downloads once documents are approved.
