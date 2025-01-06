let data = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];

const dayBox = document.querySelectorAll(".day-box");
const pEl = document.createElement("p");
pEl.classList.add("day-amount");

for (let i = 0; i < dayBox.length; i++) {
  const day = document.querySelector(`.${data[i].day}`);
  day.style.height = `${data[i].amount}%`;
  console.log(day);
}

dayBox.forEach((day, i) =>
  day.addEventListener("mouseover", function () {
    pEl.innerHTML = `$${data[i].amount}`;
    day.prepend(pEl);
    console.log(day);
  })
);
