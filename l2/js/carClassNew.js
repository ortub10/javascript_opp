// class constructor es 6+ 2022

class CarClassNew {
  constructor(_compamy, _color, _year, _km) {
    this.compamy = _compamy;
    this.color = _color;
    this.year = _year;
    this.km = _km;
  }

  render() {
    let div = document.createElement("div");
    div.className = "col-lg-6 border p-2";
    document.querySelector("#id_cars_parent").append(div);

    div.innerHTML = `
      <h2>${this.compamy}</h2>
      <div>${this.color}</div>
      <div>${this.year}</div>
      <div>${this.km}</div>`;
  }
}
