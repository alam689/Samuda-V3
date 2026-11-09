// Prefix files in /public with the configured base path (works at "/" and on sub-paths).
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
