import BigChair from './big_chair'
import MediumChair from './medium_chair'
import Chair from './chair'
import SmallChair from './small_chair'

export default class ChairFactory {
  static createObject(chairKind: 'big' | 'medium' | 'small'): Chair {
    switch (chairKind) {
      case 'big':
        return new BigChair()
      case 'medium':
        return new MediumChair()
      case 'small':
        return new SmallChair()
    }
  }
}
