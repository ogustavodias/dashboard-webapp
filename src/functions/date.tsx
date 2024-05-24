export function formatDate(date: Date) {
  const yyyy = date.getFullYear();
  const mm = `${date.getMonth() + 1}`.padStart(2, "0");
  const dd = `${date.getDate()}`.padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function getDate(timeBefore: number) {
  const now = new Date();
  const beforeMonth = now.getMonth() - timeBefore;
  const previous = new Date(now.getFullYear(), beforeMonth, now.getDate());
  return formatDate(previous);
}

export function getMonthWord(value: Date) {
  const month = value.toLocaleString("default", { month: "long" });
  return month.charAt(0).toUpperCase() + month.slice(1);
}
