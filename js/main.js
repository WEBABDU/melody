$(document).ready(function () {
  let currentFloor = 2;
  let counterUp = $(".counter-up");
  let counterDown = $(".counter-down");
  let currentPath = $(".home-image path");
  let modal = $(".modal");
  let lookFlat = $(".button-primary");
  let modalClose = $(".modal-close-button");
  let flatPath = $(".flats path");
  let currentFlat = 0;
  let flatLink = $(".flat-link");

  currentPath.on("click", toogleClass);
  lookFlat.on("click", toogleClass);
  modalClose.on("click", toogleClass);

  currentPath.on("mouseover", function () {
    currentPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
    // console.log(currentFloor);
  });

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentPath.removeClass("current-floor");
      currentFloor++;
      currentFloor = currentFloor.toLocaleString("en-Us", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(currentFloor);
      $(`[data-floor=${currentFloor}]`).toggleClass("current-floor");
    }
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentPath.removeClass("current-floor");
      currentFloor--;
      currentFloor = currentFloor.toLocaleString("en-Us", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter").text(currentFloor);
      $(`[data-floor=${currentFloor}]`).toggleClass("current-floor");
    }
  });

  flatPath.on("mouseover", function () {
    flatLink.removeClass("current-flat");
    flatPath.removeClass("current-link");
    currentFlat = $(this).attr("data-flat");
    $(`[data-house=${currentFlat}]`).toggleClass("current-flat");
  });

  flatLink.on("mouseover", function () {
    flatPath.removeClass("current-link");
    flatLink.removeClass("current-flat");
    currentFlat = $(this).attr("data-house");
    $(`[data-flat=${currentFlat}]`).toggleClass("current-link");
  });

  function toogleClass() {
    modal.toggleClass("is-open");
  }
});
