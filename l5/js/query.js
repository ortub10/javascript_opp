let params = new URLSearchParams(window.location.search);

window.onload = function () {
  if (params.has("s")) {
    let s_quary = params.get("s");
    document.querySelector("#id_h3a").innerHTML = `You search: ${s_quary}`;
  }

  if (params.has("user") && params.has("phone")) {
    // for (let param of params) {
    //   console.log(param);
    // }
    let user = params.get("user");
    let phone = params.get("phone");
    document.querySelector(
      "#id_h2a"
    ).innerHTML = `Your name is: ${user} and your phone is: ${phone}`;
  }
};
