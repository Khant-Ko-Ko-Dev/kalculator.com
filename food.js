const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const display = document.querySelector(".display");
let total = 0;
const btn = document.querySelector(".btn");

checkboxes.forEach(function (cb) {
  cb.addEventListener("change", function () {
    const calories = Number(cb.value);
    if (cb.checked) {
      total += calories;
    } else {
      total -= calories;
    }
    display.textContent = total;
  });
});

btn.addEventListener("click", function () {
  total = 0;
  display.textContent = 0;
  checkboxes.forEach(function (cb) {
    cb.checked = false;
  });
});
