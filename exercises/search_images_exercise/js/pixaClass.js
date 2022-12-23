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

    div.innerHTML = `<img src = "${this.previewURL}" alt = "pic" class = "w-100">`;

    document.querySelector(this.parent).append(div);
  }
}
