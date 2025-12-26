// BMR = (10 × weight kg) + (6.25 × height cm) − (5 × age) − 161

const btn = document.querySelector(".btn");
const resultBMR = document.querySelector(".result-BMR");
const resultBMR2 = document.querySelector(".result-BMR2");
const resultBMR3 = document.querySelector(".result-BMR3");
const resultTDEE = document.querySelector(".result-TDEE");
const result = document.querySelector(".result");
const all = document.querySelector(".all");
let TDEE = document.querySelector("#TDEE");
let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let age = document.querySelector("#age");
let gender = document.querySelector("#sex");
let BMR = 0;
const swc = document.querySelector("#switch");
const label = document.querySelector(".ss");
const label2 = document.querySelector("label");
const body = document.querySelector("body");
let resultH = document.querySelector(".result-h");
let resultW = document.querySelector(".result-w");
let btn2 = document.querySelector(".btn2");
let lbs = document.querySelector("#lbs");
let feet = document.querySelector("#feet");
let inches = document.querySelector("#inches");
const btn_C = document.querySelector(".clear");
const btn_C2 = document.querySelector(".clear2");
let w = 0;
let h = 0;
let a = 0;
let t = 0;
let g = 0;
let l = 0;
let f = 0;
let i = 0;
btn.addEventListener("click", function () {
  try {
    w = Number(weight.value);
    h = Number(height.value);
    a = Number(age.value);
    t = parseFloat(TDEE.value);
    g = Number(gender.value);
    if (!w || !h || !a || !t || gender.value === "") {
      throw new Error("Error: သတ်မှတ်ထားသော ဂဏန်းအမျိုးအစားသာထည့်ရန်");
    }

    if (w <= 0 || h <= 0 || a <= 0 || t <= 0) {
      throw new Error("Error: အပေါင်းကိန်းပြည့်သာထည့်လို့ရမည်");
    }

    BMR = (10 * w + 6.25 * h - 5 * a) * t - g + 5;

    if (isNaN(BMR) || !isFinite(BMR)) {
      throw new Error(
        "Error: တွက်ချက်မှုမအောင်မြင် ဖြည့်စွက်ထားသည်များကိုစစ်ဆေးရန်"
      );
    }

    resultBMR.innerHTML = `လက်ရှိကိုယ်အလေးချိန်ကိုထိန်းရန် ${BMR} ကယ်လိုရီ စားလို့ရမည်<br>`;
    let NBMR = BMR - 200;
    resultBMR2.innerHTML = `Weight ကျရန် ${NBMR} ကယ်လိုရီ ထက်ပိုမစားသင့် <br>`;

    let NBMR2 = BMR + 200;
    resultBMR3.innerHTML = `Weight တင်ရန် ${NBMR2} ကယ်လိုရီ ထက်လျှော့မစားသင့်`;

    result.classList.add("result_Container");
  } catch (error) {
    resultBMR.innerHTML = error.message;
    resultBMR2.innerHTML = "";
    resultBMR3.innerHTML = "";
  }
});

swc.addEventListener("click", function () {
  body.classList.toggle("BG");
  label.classList.toggle("active");
  body.classList.toggle("dark");
});

btn2.addEventListener("click", function () {
  try {
    l = Number(lbs.value);
    f = Number(feet.value);
    i = Number(inches.value);
    let kg = 0;
    let rcm = 0;
    let fcm = 0;
    let icm = 0;
    if (!l || !f || !i) {
      throw new Error("Error: သတ်မှတ်ထားသော ဂဏန်းအမျိုးအစားသာထည့်ရန်");
    }

    if (l <= 0 || f <= 0 || i <= 0) {
      throw new Error("Error: အပေါင်းကိန်းပြည့်သာထည့်လို့ရမည်");
    }

    kg = l * 0.453592;
    fcm = f * 30.48;
    icm = i * 2.54;
    rcm = fcm + icm;

    if (isNaN(kg, rcm) || !isFinite(kg, rcm)) {
      throw new Error(
        "Error: တွက်ချက်မှုမအောင်မြင် ဖြည့်စွက်ထားသည်များကိုစစ်ဆေးရန်"
      );
    }

    resultH.innerHTML = `သင့်ကိုယ်အလေးချိန်မှာ ${kg} kg ဖြစ်သည်`;
    resultW.innerHTML = `သင့်အရပ်အမြင့်မှာ ${rcm} cm ဖြစ်သည်`;
  } catch (error) {
    resultH.innerHTML = error.message;
    resultW.innerHTML = "";
  }
});

btn_C.addEventListener("click", function () {
  weight.value = "";
  height.value = "";
  age.value = "";
  TDEE.value = "";
  gender.value = "";

  lbs.value = "";
  feet.value = "";
  inches.value = "";

  // clear results
  resultBMR.innerHTML = "";
  resultBMR2.innerHTML = "";
  resultBMR3.innerHTML = "";
  resultH.innerHTML = "";
  resultW.innerHTML = "";
});

btn_C2.addEventListener("click", function () {
  lbs.value = "";
  feet.value = "";
  inches.value = "";

  // clear results
  resultBMR.innerHTML = "";
  resultBMR2.innerHTML = "";
  resultBMR3.innerHTML = "";
  resultH.innerHTML = "";
  resultW.innerHTML = "";
});
