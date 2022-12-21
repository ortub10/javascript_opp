window.onload = function () {
  callApi();
};

function callApi() {
  let url = "http://fs1.co.il/bus/vip.php";
  axios.get(url).then(function (resp) {
    let json_ar = resp.data;
    crateVip(json_ar);
  });
}

function crateVip(_ar) {
  _ar.forEach(function (item) {
    let vip = new VipClass(".row", item);
    vip.render();
  });
}
