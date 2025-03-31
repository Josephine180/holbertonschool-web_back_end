export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }
  let result = '';
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result += (result ? '-': '') + value.slice(startString.length);
    }
  }
  return result;
}
