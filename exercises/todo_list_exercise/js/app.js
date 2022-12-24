let tasks_ar = [];

window.onload = function () {
  declareEvents();
};

const declareEvents = function () {
  let add_btn = document.querySelector("#add_btn");
  let reset_btn = document.querySelector("#reset_btn");
  reset_btn.addEventListener("click", function () {
    tasks_ar = [];
    createTasks(tasks_ar);
  });
  add_btn.addEventListener("click", function () {
    let name_val = document.querySelector("#id_name").value;
    let time_val = document.querySelector("#id_time").value;
    let task_obj = {
      name: name_val,
      time: time_val,
    };
    tasks_ar.push(task_obj);
    createTasks(tasks_ar);
  });
};

const createTasks = function (_ar) {
  document.querySelector("#id_parent").innerHTML = "";
  _ar.forEach(function (item) {
    let task = new Task("#id_parent", item);
    task.render();
  });
};
