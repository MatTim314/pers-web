// src/utils/slugify.js
export function noteSlug(filePath) {
  const base = filePath.split('/').pop().replace(/\.mdx?$/, '');
  return base
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
