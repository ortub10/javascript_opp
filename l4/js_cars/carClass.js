class Car {
  constructor(_parent, _name, _color, _price) {
    this.parent = _parent;
    this.name = _name;
    this.color = _color;
    this.price = _price;
  }

  redner() {
    let div = document.createElement("div");
    div.className = "col-lg-4 border p-2";
    document.querySelector(this.parent).append(div);

    div.innerHTML += `
      <button class="float-end btn btn-dark">Show price</button>
      <h2>${this.name}</h2>
      <div>Color:${this.color}</div>
      <p></p>
    `;

    let paraPrice = div.querySelector("p");
    let btnPrice = div.querySelector("button");
    btnPrice.addEventListener(
      "click",
      function () {
        // alert(`${this.price} NIS`);
        paraPrice.innerHTML = `${this.price} ILS - ${(
          this.price / 3.25
        ).toFixed(2)} USD`;
      }.bind(this)
    );
  }
}
