class Pixa {
  constructor(_parent, _item) {
    this.parent = _parent;
    this.previewURL = _item.previewURL;
    this.likes = _item.likes;
    this.tags = _item.tags;
    this.pageURL = _item.pageURL;
  }

  render() {
    let div = document.createElement("div");
    div.className = "col";

    div.innerHTML = ` <div class="card h-100">
    <div
      class="box_card"
      style="
        background-image: url(${this.previewURL});
      "
    ></div>
    <div class="card-body">
      <h5 class="card-title">Tags: ${this.tags}</h5>
      <p class="card-text">Likes: ${this.likes} </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;

    document.querySelector(this.parent).append(div);
  }
}
