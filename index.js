function ChangeTime() {
  let togglecurrency = document.getElementById("billing");
  let month = document.querySelectorAll(".monthly-billing");
  let year = document.querySelectorAll(".yearly-billing");

  if (togglecurrency.checked) {
    for (var i = 0; i < month.length; i++) {
      month[i].style.display = "none";
    }
    for (var i = 0; i < year.length; i++) {
      year[i].style.display = "block";
    }
  } else {
    for (var i = 0; i < year.length; i++) {
      year[i].style.display = "none";
    }
    for (var i = 0; i < month.length; i++) {
      month[i].style.display = "block";
    }
  }
}

// (function () {
//   let togglecurrency = document.querySelector("#billing");
//   let month = document.querySelectorAll(".montly-billing");

//   function ChangeTime() {
//     if (!togglecurrency.checked) return;
//     month.forEach((item) => {
//       let Yearly = item * 10;
//       month.innerHtml = yearly;
//     });
//   }
// })();
