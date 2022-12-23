window.onload = function () {
  callApi();
};

function callApi() {
  let url =
    "https://pixabay.com/api/?key=32277654-0a92bc7a5119d6435baed9b55&q=dog&image_type=photo";
  axios.get(url).then(function (resp) {
    console.log(resp.data.hits);
    createPics(resp.data.hits);
  });
}

function createPics(_ar) {
  _ar.forEach(function (item) {
    let pic = new Pixa(".row", item);
    pic.render();
  });
}
