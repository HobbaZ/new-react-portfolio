// Generate a random whole number
export function randWholeNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
