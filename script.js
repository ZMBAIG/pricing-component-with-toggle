(function () {
  "use strict";

  // Toggle switch
  const toggleSwitch = document.querySelector("#switch");
  const priceDisplay = document.querySelectorAll(".price-display");

  toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
      priceDisplay[0].innerText = "19.99";
      priceDisplay[1].innerText = "24.99";
      priceDisplay[2].innerText = "39.99";
    } else {
      priceDisplay[0].innerText = "199.99";
      priceDisplay[1].innerText = "249.99";
      priceDisplay[2].innerText = "399.99";
    }
  });
})();
