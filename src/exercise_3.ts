class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}
  details(): string {
    return `${this.brand}, ${this.model}, ${this.year}`;
  }
}

const car_1 = new Car("honda", "city", 2012);
console.log(car_1.details());
