window.onload = function () {
  doApi();
};

const doApi = function () {
  let url = "http://fs1.co.il/bus/tv.php";
  axios.get(url).then(function (resp) {
    let json_ar = resp.data;
    crateAllMovies(json_ar);
  });
};

const crateAllMovies = function (_ar) {
  _ar.forEach(function (item) {
    let movie = new TvClass(
      item.name,
      item.image,
      item.kind,
      item.views,
      item.descrption
    );
    movie.render();
  });
  // json_ar.forEach(function (item) {
  //   // Creating movies from file json(but not real json, It just comes to simulate the same behavior)
  //   let movie = new TvClass(
  //     item.name,
  //     item.image,
  //     item.kind,
  //     item.views,
  //     item.descrption
  //   );
  //   movie.render();
  // });
  //---------------------------------------------
  // let movie1 = new TvClass(
  //   "The simpsons",
  //   "simpsons.jpg",
  //   "Series",
  //   10000,
  //   "simpsons info....."
  // );
  // movie1.render();
  // let movie2 = new TvClass(
  //   "Narcos",
  //   "narcos.jpg",
  //   "Series",
  //   20000,
  //   "narcos info....."
  // );
  // movie2.render();
};
