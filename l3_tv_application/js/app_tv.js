window.onload = function () {
  crateAllMovies();
};

const crateAllMovies = function () {
  let movie1 = new TvClass(
    "The simpsons",
    "simpsons.jpg",
    "Series",
    10000,
    "simpsons info....."
  );
  movie1.render();

  let movie2 = new TvClass(
    "Narcos",
    "narcos.jpg",
    "Series",
    20000,
    "narcos info....."
  );
  movie2.render();
};
