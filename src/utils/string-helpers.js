// New dead file — added in this PR but never imported
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function slugify(str) {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

export function truncate(str, maxLen = 100) {
  if (str.length <= maxLen) return str;
  return str.slice(0, maxLen) + '...';
}

export class StringFormatter {
  constructor(locale = 'en') {
    this.locale = locale;
  }

  format(template, values) {
    return template.replace(/\{(\w+)\}/g, (_, key) => values[key] || '');
  }
}
