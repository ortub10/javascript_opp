class VipClass {
  constructor(_parent, _item) {
    this.parent = _parent;
    this.img = _item.image;
    this.name = _item.name;
    this.source = _item.source;
    this.birth_year = _item.birth_year;
  }

  render() {
    let div = document.createElement("div");
    div.className = "col-lg-6 border p-2";
    document.querySelector(this.parent).append(div);
    div.innerHTML = `<img src="${this.img}" alt="vip" class="w-25 float-start me-2"/>
     <h2>${this.name}</h2>
     <div>Company: ${this.source}</div>
     <button class="btn btn-info mt-2">Show age</button>`;

    let btn = div.querySelector("button");
    btn.addEventListener(
      "click",
      function () {
        let date = new Date();
        alert(`Age: ${date.getFullYear() - Number(this.birth_year)}`);
      }.bind(this)
    );
  }
}
