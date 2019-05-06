import { el } from 'redom'

export class Canvas {
  el: HTMLCanvasElement

  constructor ({ width = 512, height = 512 } = {}) {
    this.el = el('canvas', { width, height }) as HTMLCanvasElement
  }
}
