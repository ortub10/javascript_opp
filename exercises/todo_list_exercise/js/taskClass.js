class Task {
  constructor(_parent, _item) {
    this.parent = _parent;
    this.name = _item.name;
    this.time = _item.time;
    this.id = _item.id;
  }

  render() {
    let div = document.createElement("div");
    div.className = "shadow-sm my-2 p-2";
    document.querySelector(this.parent).append(div);
    div.innerHTML = `
    <button class = "btn btn-danger float-end">X</button>
    <h4>${this.name} - ${this.time}</h4>
    `;

    let btnX = div.querySelector("button");
    btnX.addEventListener(
      "click",
      function () {
        delSinsleTask(this.id);
      }.bind(this)
    );
  }
}
