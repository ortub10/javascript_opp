function CarClass(_compamy, _color, _year, _km) {
  let obj = {
    compamy: _compamy,
    color: _color,
    year: _year,
    km: _km,
    addToHtml: function () {
      let div = document.createElement("div");
      div.className = "col-lg-6 border p-2";
      document.querySelector("#id_cars_parent").append(div);

      div.innerHTML = `
      <h2>${this.compamy}</h2>
      <div>${this.color}</div>
      <div>${this.year}</div>
      <div>${this.km}</div>`;
    },
  };

  return obj;
}
