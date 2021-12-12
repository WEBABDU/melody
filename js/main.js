$(document).ready(function () {
  let currentFloor = 2;
  let counterUp = $(".counter-up");
  let counterDown = $(".counter-down");
  let currentPath = $(".home-image path");
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
});
