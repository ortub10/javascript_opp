function salesManClass(_name, _city, _address, _phone) {
  let obj = {
    name: _name,
    city: _city,
    address: _address,
    phone: _phone,
    addToHtml: function () {
      let div = document.createElement("div");
      div.className = "col-lg-4 border p-2";
      document.querySelector("#id_sales_parent").append(div);

      div.innerHTML += `
      <h2>${this.name}</h2>
      <div>City:${this.city}</div>
      <div>Address:${this.address}</div>
      <div>Phone: ${this.phone}</div>`;
    },
  };

  return obj;
}
