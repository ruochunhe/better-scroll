import Base from './Base'
export default class Position extends Base {
  constructor(element: HTMLElement) {
    super(element)
  }

  getComputedPosition() {
    let cssStyle = window.getComputedStyle(this.element, null) as any
    let x = +cssStyle.left.replace(/[^-\d.]/g, '')
    let y = +cssStyle.top.replace(/[^-\d.]/g, '')

    return {
      x,
      y
    }
  }

  translateTo(x: number, y: number) {
    this.style.left = `${Math.round(x)}px`
    this.style.top = `${Math.round(y)}px`
  }
}