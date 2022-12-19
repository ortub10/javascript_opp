class TvClass {
  constructor(_title, _img, _type, _view, _info) {
    this.title = _title;
    this.img = _img;
    this.type = _type;
    this.view = _view;
    this.info = _info;
  }

  render() {
    let div = document.createElement("div");
    div.className = "col-lg-6 border p-3";
    document.querySelector("main").append(div);
    div.innerHTML = ` <img src="_images/${this.img}" class="w-25 float-start me-2" />
    <h4>${this.title}</h4>
    <div>Type: ${this.type}</div>
    <div>Views: ${this.view}</div>`;
    let btn = document.createElement("button");
    btn.innerHTML = "More info";
    btn.className = "btn btn-danger w-25";
    div.append(btn);

    btn.addEventListener(
      "click",
      function () {
        alert(this.info);
      }.bind(this)
    );
  }
}
