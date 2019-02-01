export function formatDate(date: Date) {
  return String(date).split(" ").slice(0,4).join(" ")
}