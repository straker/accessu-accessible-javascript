const units = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: 24 * 60 * 60 * 1000 * 365/12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000
}

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
const dtf = new Intl.DateTimeFormat('en');

// Transform an ISO time to either a relative measurement or as a date
// @see https://stackoverflow.com/a/53800501/2124254
export function getTime(d1, d2 = new Date()) {
  if (typeof d1 === 'string') {
    d1 = new Date(d1);
  }
  const elapsed = d1 - d2;

  if (Math.abs(elapsed) > units.day * 2) {
    return dtf.format(d1);
  }

  // "Math.abs" accounts for both "past" & "future" scenarios
  for (const u in units) {
    if (Math.abs(elapsed) > units[u] || u == 'second') {
      return rtf.format(Math.round(elapsed/units[u]), u)
    }
  }
}

// Format a number to use "K" for thousands
export function formatStat(num) {
  if (num > 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }

  return num;
}