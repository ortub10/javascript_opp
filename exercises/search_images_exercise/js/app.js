window.onload = function () {
  callApi("jets");
  declareEvents();
};

function declareEvents() {
  let search_btn = document.querySelector("#search_btn");
  search_btn.addEventListener("click", search);
  document.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      search();
    }
  });
}

function search() {
  let input_val = document.querySelector("#input_search").value;
  callApi(input_val);
}

function callApi(_searchQ) {
  document.querySelector(".row").innerHTML = `
    <div class = "text-center mt-3 w-100">
        <img src = "images/loading.gif" width = "100" >
    </div>`;

  let url = `https://pixabay.com/api/?key=32277654-0a92bc7a5119d6435baed9b55&q=${_searchQ}&image_type=photo`;
  axios.get(url).then(function (resp) {
    createPics(resp.data.hits);
  });
}

function createPics(_ar) {
  document.querySelector(".row").innerHTML = "";
  _ar.forEach(function (item) {
    let pic = new Pixa(".row", item);
    pic.render();
  });
}
