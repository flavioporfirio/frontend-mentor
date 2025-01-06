const inputDay = document.querySelector("#input-day");
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");

const hiddenText = document.querySelectorAll(".hidden");
const inputEl = document.querySelectorAll("input");
const title = document.querySelectorAll(".title");

const calcBtn = document.querySelector(".btn-calcula");

const spanDay = document.querySelector(".span-days");
const spanMonth = document.querySelector(".span-months");
const spanYear = document.querySelector(".span-years");

const date = new Date();
let preDay = date.getDate();
let preMonth = 1 + date.getMonth();
let preYear = date.getFullYear();

const monthDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
console.log(date);
console.log(preDay, preMonth, preYear);

const calcAge = function () {
  let year = inputYear.value;
  let month = inputMonth.value;
  let day = inputDay.value;

  inputEl.forEach((input, i) => {
    // Error - empty input
    if (input.value === "") {
      title[i].classList.add("empty-field");
      input.style.border = "1px solid red";
      hiddenText[i].classList.remove("hidden");
    } else if (i === 0) {
      console.log(Number(input.value), monthDay[Number(month - 1)]);
      if (input.value > monthDay[Number(month - 1)]) {
        title[i].classList.add("empty-field");
        input.style.border = "1px solid red";
        input.value > 31
          ? (hiddenText[i].innerHTML = "Must be a valid day")
          : (hiddenText[i].innerHTML = "Must be a valid date");
        hiddenText[i].classList.remove("hidden");
      }
    } else if (i === 1) {
      if (input.value <= 0 || input.value > 12) {
        title[i].classList.add("empty-field");
        input.style.border = "1px solid red";
        hiddenText[i].innerHTML = "Must be a valid month";
        hiddenText[i].classList.remove("hidden");
      }
    } else if (i === 2) {
      if (input.value > date.getFullYear()) {
        title[i].classList.add("empty-field");
        input.style.border = "1px solid red";
        hiddenText[i].innerHTML = "Must be in the past";
        hiddenText[i].classList.remove("hidden");
      }
      return;
    } else {
      title[i].classList.remove("empty-field");
      input.style.border = "1px solid var(--light-grey)";
      hiddenText[i].classList.add("hidden");
    }
  });

  if (day > preDay) {
    preDay += monthDay[preMonth - 1];
    preMonth -= 1;
  }
  if (month > preMonth) {
    preMonth += monthDay.length;
    preYear -= 1;
  }

  if (
    day !== "" &&
    month !== "" &&
    year !== "" &&
    day <= monthDay[Number(month - 1)] &&
    month <= 12 &&
    year <= preYear
  ) {
    spanDay.innerHTML = Math.abs(preDay - day);
    spanMonth.innerHTML = Math.abs(preMonth - month);
    spanYear.innerHTML = preYear - year;

    inputDay.value = "";
    inputMonth.value = "";
    inputYear.value = "";

    inputEl.forEach((input, i) => {
      title[i].classList.remove("empty-field");
      input.style.border = "1px solid var(--light-grey)";
      hiddenText[i].classList.add("hidden");
    });
  }
};

const cleanErrorField = function () {
  setInterval(() => {
    inputEl.forEach((input, i) => {
      title[i].classList.remove("empty-field");
      input.style.border = "1px solid var(--light-grey)";
      hiddenText[i].classList.add("hidden");
    });
  }, 10000);
};

calcBtn.addEventListener("click", function () {
  calcAge();
  cleanErrorField();
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    calcAge();
    cleanErrorField();
  }
});
