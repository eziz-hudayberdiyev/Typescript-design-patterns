interface IProduct {
  name: string
}

class ConcreteProduct implements IProduct {
  public name = ''
}

class ConcreteProductA extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'ConcreteProductA'
  }
}

class ConcreteProductB extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'ConcreteProductB'
  }
}

class ConcreteProductC extends ConcreteProduct {
  constructor() {
    super()
    this.name = 'ConcreteProductC'
  }
}

class Creator {
  static createObject(someProperty: 'a' | 'b' | 'c'): IProduct {
    switch (someProperty) {
      case 'a':
        return new ConcreteProductA()
      case 'b':
        return new ConcreteProductB()
      case 'c':
        return new ConcreteProductC()
    }
  }
}

const Product = Creator.createObject('c')
console.log(Product.name)
