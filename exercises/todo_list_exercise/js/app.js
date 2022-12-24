window.onload = function () {
  declareEvents();
};

const declareEvents = function () {
  let add_btn = document.querySelector("#add_btn");
  add_btn.addEventListener("click", function () {
    let name_val = document.querySelector("#id_name").value;
    let time_val = document.querySelector("#id_time").value;
    let task_obj = {
      name: name_val,
      time: time_val,
    };
    console.log(task_obj);
  });
};
