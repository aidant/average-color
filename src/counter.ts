export class Counter<T> {
  map = new Map<T, number>()

  count (key: T) {
    const number = this.map.get(key) || 0
    this.map.set(key, number + 1)
  }

  tally (top: number) {
    return [...this.map.entries()].sort((a, b) => a[1] > b[1] ? -1 : 1).slice(0, top).map(([key]) => key)
  }
}
