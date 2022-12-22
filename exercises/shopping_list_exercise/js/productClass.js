class ProductClass {
  constructor(_parent, _item) {
    this.parent = _parent;
    this.name = _item.name;
    this.price = _item.price;
    this.cat = _item.cat;
  }

  render() {
    let div = document.createElement("div");
    document.querySelector(this.parent).append(div);
    div.className = "col-lg-6 border p-2";
    div.innerHTML = ` <div class="badge bg-info float-end">${this.cat}</div>
    <h2>${this.name}</h2>
    <div>Price: ${this.price} nis</div>
    <button class="btn btn-info mt-2">USD price</button>`;
    let btn = div.querySelector("button");
    btn.addEventListener(
      "click",
      function () {
        alert((Number(this.price) / 3.2).toFixed(2));
      }.bind(this)
    );
  }
}
