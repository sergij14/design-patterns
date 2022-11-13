// clases that we create should be opened for extension closed for modification
// if we want to have new feature, we don't need to modify the old code

// AreaCalculator will be extended when needed

class ShapeArea {
  area() {
    throw new Error("'area' method should be implemented");
  }
}

class Square extends ShapeArea {
  constructor(size) {
    super();
    this.size = size;
  }

  area() {
    return this.size ** 2;
  }
}

class Rect extends ShapeArea {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends ShapeArea {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return this.radius ** 2 * Math.PI;
  }
}

class AreaCalculator {
  constructor(shapes = []) {
    this.shapes = shapes;
  }

  calculate() {
    return this.shapes.reduce((acc, shape) => {
      return acc + shape.area();
    }, 0);
  }
}

const calc = new AreaCalculator([
  new Square(10),
  new Circle(10),
  new Rect(10, 8),
]);
console.log(calc.calculate());
