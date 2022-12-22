window.onload = function () {
  callApi();
};

function callApi() {
  let url = "http://fs1.co.il/bus/shop.php";
  axios.get(url).then(function (resp) {
    let products_ar = resp.data;
    createALlProducts(products_ar);
  });
}

function createALlProducts(_ar) {
  _ar.forEach((item) => {
    let product = new ProductClass("#id_row", item);
    product.render();
  });
}
