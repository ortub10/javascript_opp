function init() {
  let word1 = "hello";
  let word2 = word1;
  word1 = "bye";

  let car1_obj = {
    name: "Mazda",
    color: "red",
  };

  let car2_obj = car1_obj;
  car1_obj.name = "Ferrari";
  console.log(car2_obj);
  console.log(word2);

  let id_h2 = document.querySelector("#id_h2");
  id_h2.innerHTML = "Hello"; // This is possible because "id_h2" is by reference
  let inner = document.querySelector("#id_h2").innerHTML; //
  inner = "Bye"; // No change the innerHtml bacause "inner" is by value
}

init();
