function init() {
  createCars();
  createSalesMan();
}

function createCars() {
  let car1 = CarClass("Ferrari", "yellow", 2022, 1000);
  car1.addToHtml();
  let car2 = CarClass("Lada", "blue", 1984, 1000);
  car2.addToHtml();

  let car3 = new CarClassNew("Tesla", "silver", 2023, 10000);
  car3.render();
}

function createSalesMan() {
  let salesMan1 = salesManClass(
    "Avi Cohen",
    "Tel aviv",
    "Shoam 20 , Tel aviv",
    "056-332210"
  );

  salesMan1.addToHtml();

  let salesMan2 = salesManClass(
    "Tal Levi",
    "Haifa",
    "Nave shanan 20 , Haifa",
    "050-6598866"
  );

  salesMan2.addToHtml();
}

init();
