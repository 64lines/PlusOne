export function saveCount(count: number) {
  localStorage.setItem("count", String(count));
}

export function loadCount(): number {
  const loadedCount = localStorage.getItem("count");
  return loadedCount ? Number(localStorage.getItem("count")) : 0;
}