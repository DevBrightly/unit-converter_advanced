const userInput = document.getElementById("user-input");
const convertBtn = document.getElementById("convert-btn");

const length = document.querySelectorAll("p")[0];
const volume = document.querySelectorAll("p")[1];
const mass = document.querySelectorAll("p")[2];

function renderConversion(value) {
  const userInputNum = Number(value) || 0;

  const metersToFeet = (userInputNum * 3.281).toFixed(2);
  const feetToMeters = (userInputNum / 3.281).toFixed(2);
  
  const litersToGallons = (userInputNum * 0.264).toFixed(2);
  const gallonsToLiters = (userInputNum / 0.264).toFixed(2);
  
  const kilosToPounds = (userInputNum * 2.204).toFixed(2);
  const poundsToKilos = (userInputNum / 2.204).toFixed(2);
  
  length.textContent = `${userInputNum} meters = ${metersToFeet} feet | ${userInputNum} feet = ${feetToMeters} meters`;
  volume.textContent = `${userInputNum} liters = ${litersToGallons} gallons | ${userInputNum} gallons = ${gallonsToLiters} liters`;
  mass.textContent = `${userInputNum} kilos = ${kilosToPounds} pounds | ${userInputNum} pounds = ${poundsToKilos} kilos`;
}

// Initial render
renderConversion(userInput.value);

// OnClick
convertBtn.addEventListener("click", () => {
  renderConversion(userInput.value)
});