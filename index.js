const slider = document.getElementById("slider");
const indicator = document.getElementById("indicator");
const freeSpace = document.getElementById("free-space");
const earningsPerDay = document.getElementById("earningsPerDay");
const earningsPerMonth = document.getElementById("earningsPerMonth");
const earningsPerYear = document.getElementById("earningsPerYear");
slider.addEventListener("input", function () {
  const sliderValue = slider.value;
  const earningsDay = sliderValue;
  const earningsMonth = sliderValue * 30;
  const earningsYear = sliderValue * 365;

  earningsPerDay.textContent = earningsDay;
  earningsPerMonth.textContent = earningsMonth;
  earningsPerYear.textContent = earningsYear;
  const calculatedValue = Math.round(sliderValue * 100);
  indicator.textContent = calculatedValue;
});
