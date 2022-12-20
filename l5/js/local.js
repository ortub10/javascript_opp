let save_ar = [];

window.onload = function () {
  declareEvents();
  checkLocal();
};

function checkLocal() {
  if (localStorage["student"]) {
    save_ar = JSON.parse(localStorage["student"]);
    console.log(save_ar);
    createStudents();
  }
}

const declareEvents = function () {
  let add_btn = document.querySelector("#add_btn");
  add_btn.addEventListener("click", function () {
    let obj = {
      name: document.querySelector("#id_name").value,
      score: document.querySelector("#id_score").value,
    };
    save_ar.push(obj);
    localStorage.setItem("student", JSON.stringify(save_ar));

    createStudents();
  });
};

const createStudents = function () {
  let id_ul = document.querySelector("#id_ul");
  id_ul.innerHTML = "";
  save_ar.forEach(function (item) {
    id_ul.innerHTML += `<li>${item.name} - ${item.score}</li>`;
  });
};
