/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilo = 2.204 pound
*/

const feet = 3.281;
const gallon = 0.264;
const pound = 2.204;

let inputValue;

function getInputValue() {
  const input = document.getElementById("input");
  inputValue = Number(input.value);
  console.log(inputValue);
  meters(inputValue);
  litres(inputValue);
  kilos(inputValue);
}

let convertBtn = document.getElementById("convertBtn");
convertBtn.addEventListener("click", function () {
  console.log("buttonClicked");
  getInputValue();
});

function meters(value) {
  let display = "";
  let content = document.getElementById("meters");
  display += `
   <p>${value} meters = ${(value * feet).toFixed(
    2
  )} feet | <span class="mobile">${inputValue} feet = ${(
    inputValue / feet
  ).toFixed(2)} meters</span> </p>
  `;
  content.innerHTML = display;
}

function litres(value) {
  let display = "";
  let content = document.getElementById("litres");
  display += `
   <p>${value} litres = ${(value * gallon).toFixed(
    2
  )} gallons | <span class="mobile">${inputValue} gallons = ${(
    inputValue / gallon
  ).toFixed(2)} litres</span> </p>
  `;
  content.innerHTML = display;
}

function kilos(value) {
  let display = "";
  let content = document.getElementById("kilos");
  display += `
   <p>${value} kilos = ${(value * pound).toFixed(
    2
  )} pounds |<span class="mobile">${inputValue} pounds = ${(
    inputValue / pound
  ).toFixed(2)} kilos</span> </p>
  `;
  content.innerHTML = display;
}
