<<<<<<< HEAD
const bill = document.querySelector("#bill");
const numPeople = document.querySelector("#num-people");
const customTip = document.querySelector("#custom-tip");

const percentageBlocks = document.querySelector(".percentage-blocks");
const percentBlock = document.querySelectorAll(".percen--block");
const customPercentage = document.querySelector("#custom-tip");

const totalAmountNum = document.querySelector(".total-amount-num");
const totalPersonNum = document.querySelector(".total-person-num");

const btnReset = document.querySelector(".btn-reset");

const numPeopleEmpty = document.querySelector(".people-empty-field");

let percentage;
let billPerPerson;

const emptyFieldConfig = function (custom = false) {
  if (bill.value === "") {
    bill.style.border = "2px solid red";
  } else {
    bill.style.border = "2px solid var(--strong-cyan)";
  }

  if (numPeople.value === "") {
    numPeopleEmpty.style.display = "block";
    numPeople.style.border = "1px solid red";
  } else {
    numPeople.style.border = "none";
    numPeopleEmpty.style.display = "none";
  }
  if (custom) {
    if (customTip.value === "") {
      customTip.style.border = "1px solid red";
    } else {
      customTip.style.border = "1px solid var(--strong-cyan)";
    }
  }
};

const calcTip = function (e, percentage, custom = false) {
  billPerPerson = (bill.value * (percentage / 100)) / numPeople.value;

  if (!custom) {
    percentBlock.forEach(block => {
      if (e.target.innerHTML === block.innerHTML) {
        e.target.style.backgroundColor = "var(--strong-cyan)";
      } else {
        block.style.backgroundColor = "var(--very-dark-cyan)";
      }
    });
  }

  totalAmountNum.innerHTML = `$${billPerPerson.toFixed(2)}`;

  totalPersonNum.innerHTML = `$${(
    bill.value / numPeople.value +
    billPerPerson
  ).toFixed(2)}`;
};

percentageBlocks.addEventListener("click", function (e) {
  if (e.target.classList.contains("percen--block")) {
    percentage = e.target.innerHTML.replace("%", " ");
    if (e.target.id) return;
    emptyFieldConfig();
    customTip.style.border = "none";
    calcTip(e, percentage);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    percentage = customTip.value;
    emptyFieldConfig(true);
    calcTip(e, percentage, true);
  }
});

btnReset.addEventListener("click", function () {
  totalAmountNum.innerHTML = "$0.00";
  totalPersonNum.innerHTML = "$0.00";
  bill.value = "";
  numPeople.value = "";
  customTip.value = "";
  percentage = 0;
  numPeopleEmpty.style.display = "none";
  bill.style.border = "none";
  customTip.style.border = "none";
});
=======
const bill = document.querySelector("#bill");
const numPeople = document.querySelector("#num-people");
const customTip = document.querySelector("#custom-tip");

const percentageBlocks = document.querySelector(".percentage-blocks");
const percentBlock = document.querySelectorAll(".percen--block");
const customPercentage = document.querySelector("#custom-tip");

const totalAmountNum = document.querySelector(".total-amount-num");
const totalPersonNum = document.querySelector(".total-person-num");

const btnReset = document.querySelector(".btn-reset");

const numPeopleEmpty = document.querySelector(".people-empty-field");

let percentage;
let billPerPerson;

const emptyFieldConfig = function (custom = false) {
  if (bill.value === "") {
    bill.style.border = "2px solid red";
  } else {
    bill.style.border = "2px solid var(--strong-cyan)";
  }

  if (numPeople.value === "") {
    numPeopleEmpty.style.display = "block";
    numPeople.style.border = "1px solid red";
  } else {
    numPeople.style.border = "none";
    numPeopleEmpty.style.display = "none";
  }
  if (custom) {
    if (customTip.value === "") {
      customTip.style.border = "1px solid red";
    } else {
      customTip.style.border = "1px solid var(--strong-cyan)";
    }
  }
};

const calcTip = function (e, percentage, custom = false) {
  billPerPerson = (bill.value * (percentage / 100)) / numPeople.value;

  if (!custom) {
    percentBlock.forEach(block => {
      if (e.target.innerHTML === block.innerHTML) {
        e.target.style.backgroundColor = "var(--strong-cyan)";
      } else {
        block.style.backgroundColor = "var(--very-dark-cyan)";
      }
    });
  }

  totalAmountNum.innerHTML = `$${billPerPerson.toFixed(2)}`;

  totalPersonNum.innerHTML = `$${(
    bill.value / numPeople.value +
    billPerPerson
  ).toFixed(2)}`;
};

percentageBlocks.addEventListener("click", function (e) {
  if (e.target.classList.contains("percen--block")) {
    percentage = e.target.innerHTML.replace("%", " ");
    if (e.target.id) return;
    emptyFieldConfig();
    customTip.style.border = "none";
    calcTip(e, percentage);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    percentage = customTip.value;
    emptyFieldConfig(true);
    calcTip(e, percentage, true);
  }
});

btnReset.addEventListener("click", function () {
  totalAmountNum.innerHTML = "$0.00";
  totalPersonNum.innerHTML = "$0.00";
  bill.value = "";
  numPeople.value = "";
  customTip.value = "";
  percentage = 0;
  numPeopleEmpty.style.display = "none";
  bill.style.border = "none";
  customTip.style.border = "none";
});
>>>>>>> main
