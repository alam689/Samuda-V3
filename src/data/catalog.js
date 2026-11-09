import data from "./products.json";

export const CATEGORIES = data.categories;
export const CATS = Object.fromEntries(data.categories.map((c) => [c.slug, c]));
export const INDUSTRIES = data.industries;
export const PRODUCTS = data.products;
export const BY_SLUG = Object.fromEntries(data.products.map((p) => [p.slug, p]));

export const productsIn = (category) => PRODUCTS.filter((p) => p.category === category);
export const productsFor = (industry) => PRODUCTS.filter((p) => p.industries.includes(industry));
export const industryCount = (industry) => productsFor(industry).length;

export function relatedTo(product, count = 3) {
  const same = PRODUCTS.filter((q) => q.category === product.category && q.slug !== product.slug);
  const rest = PRODUCTS.filter((q) => q.category !== product.category);
  return [...same, ...rest].slice(0, count);
}
