// Flyweight pattern let us effectively work with various types of data
// example could be loading of images in browsers, it uses flyweight pattern not to load already loaded inmages.
// caching also is connected to this pattern

class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  constructor() {
    this.cars = [];
  }

  create(model, price) {
    const candidate = this.getCar(model);
    if (!candidate) {
      const newCar = new Car(model, price);
      this.cars.push(newCar);

      return newCar;
    }

    return candidate;
  }

  getCar(model) {
    return this.cars.find((car) => car.model === model);
  }
}

const carFactory = new CarFactory();

const bmw = carFactory.create(new Car("bmw", 120000));
const bmw2 = carFactory.create(new Car("bmw", 300000));

console.log(bmw, bmw2);
