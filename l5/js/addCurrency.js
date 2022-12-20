(function () {
  let ils_symbol = " ₪";
  let bit_symbol = " ₿";

  const addCurrency = function () {
    let priceIlsList = document.querySelectorAll(`span[data-coin="ils"]`);
    priceIlsList.forEach(function (itemElem) {
      itemElem.innerHTML += ils_symbol;
    });

    let priceBitList = document.querySelectorAll(`span[data-coin="bit"]`);
    priceBitList.forEach(function (itemElem) {
      itemElem.innerHTML += bit_symbol;
    });
  };

  addCurrency();
})();
