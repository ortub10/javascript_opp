function init() {
  car2_obj.addToHtml();
  car4_obj.addToHtml();
}

let car2_obj = {
  company: "Ford",
  year: 2019,
  km: 40000,
  color: "blue",
  price: 80000,
  addToHtml: function () {
    document.body.innerHTML += `<br> Name: ${this.company}, color: ${this.color}`;
  },
};

car2_obj.color = "black";
car2_obj.yad = 3;

let car3_obj = {};
car3_obj.color = "blue";
car3_obj.company = "lada";

let car4_obj = {
  company: "Ferrari",
  year: 2022,
  km: 10000,
  color: "red",
  price: 2000000,
  addToHtml: function () {
    document.body.innerHTML += `<br> Name: ${this.company}, color: ${this.color}`;
  },
};
init();
