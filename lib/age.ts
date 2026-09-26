// Sep 30, 2009, 12:29 am US Eastern (EDT, UTC-4).
export const BIRTH = Date.parse("2009-09-30T00:29:00-04:00");
export const LIFESPAN_YEARS = 86.8;

const YEAR_MS = 365.2425 * 24 * 60 * 60 * 1000;

export function ageInYears(now: number) {
  return (now - BIRTH) / YEAR_MS;
}

// Text progress bar, e.g. "████░░░░░░░░░░░░░░░░".
export function lifeBar(years: number, width = 20) {
  const filled = Math.round(Math.min(1, years / LIFESPAN_YEARS) * width);
  return "█".repeat(filled) + "░".repeat(width - filled);
}
