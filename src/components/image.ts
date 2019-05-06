import { el } from 'redom'

export class Image {
  el: HTMLImageElement

  constructor () {
    this.el = el('img') as HTMLImageElement
  }

  update (src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.el.addEventListener('load', () => resolve())
      this.el.addEventListener('error', () => reject())
      this.el.src = src
    })
  }

}
