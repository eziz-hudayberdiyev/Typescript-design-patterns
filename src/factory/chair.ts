import { dimension } from './dimension'

interface IChair {
  height: number
  width: number
  depth: number
  getDimensions(): dimension
}

export default class Chair implements IChair {
  height: number = 0
  width: number = 0
  depth: number = 0

  createObject(): Chair {
    return this
  }

  getDimensions(): dimension {
    return {
      height: this.height,
      width: this.width,
      depth: this.depth,
    }
  }
}
