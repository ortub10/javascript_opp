function init() {
  let st = "Hello";
  console.log("st:", st, typeof st);

  let num = 3.14;
  console.log("num", num, typeof num);

  let bool = true;
  console.log("bool", bool, typeof bool);

  let car1_ar = ["mazda", 2020, 30000, 100000, "red", "yad2"];
  console.log("car1_ar", car1_ar, typeof car1_ar);

  let car2_obj = {
    company: "Ford",
    year: 2019,
    km: 40000,
    color: "blue",
    price: 80000,
  };

  console.log("car2_obj", car2_obj, typeof car2_obj);
}

init();
