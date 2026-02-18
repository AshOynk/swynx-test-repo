// Pre-existing dead file
export function parseLegacyFormat(input) {
  const lines = input.split('\n');
  const result = {};
  for (const line of lines) {
    const [key, value] = line.split('=');
    if (key && value) {
      result[key.trim()] = value.trim();
    }
  }
  return result;
}

export function serializeLegacyFormat(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n');
}
