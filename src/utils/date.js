export function formatDate(date) {
  return date.toISOString().split('T')[0];
}

export function parseDate(str) {
  return new Date(str);
}
