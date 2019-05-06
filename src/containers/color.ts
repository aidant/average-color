import { Canvas, Image } from '../components'
import { el } from 'redom'
import { Counter } from '../counter';

export class Color {
  el: HTMLElement
  canvas: Canvas
  context: CanvasRenderingContext2D
  image: Image

  constructor () {
    this.el = el('div', this.canvas = new Canvas())
    this.context = this.canvas.el.getContext('2d')
    this.image = new Image()
  }

  calculate () {
    const counter = new Counter<string>()
    const image = this.context.getImageData(0, 0, this.canvas.el.width, this.canvas.el.height)
    for (let index = 0; index < image.data.length; index += 4) {
      const [red, green, blue, alpha] = image.data.subarray(index, index + 4)
      const string = `rgb(${red}, ${green}, ${blue})`
      counter.count(string)
    }
    for (const color of counter.tally(Infinity)) {
      console.log(`%c ${color}`, `background: ${color}; color: white; font-size: 50px`)
    }
  }

  async update ({ src }) {
    await this.image.update(src)
    this.canvas.el.width = this.image.el.width
    this.canvas.el.height = this.image.el.height
    this.context.fillStyle = 'rgb(53, 17, 27)'
    this.context.fillRect(0, 0, this.canvas.el.width, this.canvas.el.height)
    this.context.globalAlpha = 0.5
    this.context.drawImage(this.image.el, 0, 0)
    this.calculate()
  }
}
