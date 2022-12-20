let dt = new Date();
let dt1 = new Date("2022-03-03");
let dt2 = new Date("2022-02-02");

window.onload = function () {
  let id_h2 = document.querySelector("#id_h2");
  id_h2.innerHTML += dt + "<br/>";
  id_h2.innerHTML += dt.getFullYear() + "<br/>";
  id_h2.innerHTML += dt.getMonth() + "<br/>";
  id_h2.innerHTML += dt.getDay() + "<br/>";
  id_h2.innerHTML += dt.getDate() + "<br/>";
  id_h2.innerHTML += dt.getTime() + "<br/>";

  let toatl = dt1.getTime() - dt2.getTime();
  id_h2.innerHTML += `total: ${toatl} <br/>`;

  let days = Math.floor(toatl / (1000 * 60 * 60 * 24));
  id_h2.innerHTML += `days: ${days} <br/>`;
};
