export default function getRandom (min = 0, max = 1000) {
  return Math.floor(Math.random() * (max - min)) + min
}
