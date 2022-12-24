const tasks_ar = [];

window.onload = function () {
  declareEvents();
  checkLocal();
};

function checkLocal() {
  if (localStorage["tasks"]) {
    let _ar = JSON.parse(localStorage["tasks"]);
    _ar.forEach(function (item) {
      tasks_ar.push(item);
    });
    createTasks(tasks_ar);
  }
}
const declareEvents = function () {
  let add_btn = document.querySelector("#add_btn");
  let reset_btn = document.querySelector("#reset_btn");
  reset_btn.addEventListener("click", function () {
    tasks_ar.splice(0, tasks_ar.length);
    createTasks(tasks_ar);
  });
  add_btn.addEventListener("click", function () {
    let name_val = document.querySelector("#id_name").value;
    let time_val = document.querySelector("#id_time").value;
    let task_obj = {
      name: name_val,
      time: time_val,
      id: Date.now(),
    };
    tasks_ar.push(task_obj);
    console.log(task_obj);
    createTasks(tasks_ar);
  });
};

const delSinsleTask = function (_idDel) {
  tasks_ar.forEach(function (item, i) {
    if (item.id == _idDel) {
      tasks_ar.splice(i, 1);
    }
  });
  createTasks(tasks_ar);
};

const createTasks = function (_ar) {
  document.querySelector("#id_parent").innerHTML = "";
  _ar = _.sortBy(_ar, "time");
  //save in localStorage
  localStorage.setItem("tasks", JSON.stringify(_ar));
  _ar.forEach(function (item) {
    let task = new Task("#id_parent", item);
    task.render();
  });
};
