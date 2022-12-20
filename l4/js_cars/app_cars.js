window.onload = function () {
  createCars();
};

const createCars = function () {
  let car1 = new Car(".row", "ferrari", "red", 500000);
  car1.redner();

  let car2 = new Car(".row", "Mazda", "blue", 100000);
  car2.redner();
};
