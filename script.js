// Select elements
const billInput = document.getElementById('bill');
const peopleInput = document.getElementById('people');
const tipButtons = document.querySelectorAll('.percentage-btn');
const customTipInput = document.querySelector('.custom-tip');
const tipAmountDisplay = document.getElementById('tipAmount');
const totalAmountDisplay = document.getElementById('totalAmount');
const resetButton = document.querySelector('.reset-btn');

let bill = 0;
let tip = 0.15; // default 15%
let people = 1;

// Update calculation
function calculateTip() {
  if (bill > 0 && people > 0) {
    const tipPerPerson = (bill * tip) / people;
    const totalPerPerson = (bill + bill * tip) / people;

    tipAmountDisplay.innerText = `$${tipPerPerson.toFixed(2)}`;
    totalAmountDisplay.innerText = `$${totalPerPerson.toFixed(2)}`;
  } else {
    tipAmountDisplay.innerText = "$0.00";
    totalAmountDisplay.innerText = "$0.00";
  }
}

// Handle tip button click
tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    tip = parseFloat(btn.innerText) / 100;
    customTipInput.value = ""; // clear custom input
    calculateTip();
  });
});

// Handle custom tip input
customTipInput.addEventListener("input", () => {
  tipButtons.forEach(b => b.classList.remove("active"));

  const val = parseFloat(customTipInput.value);
  tip = isNaN(val) ? 0 : val / 100;
  calculateTip();
});

// Handle bill input
billInput.addEventListener("input", () => {
  bill = parseFloat(billInput.value);
  calculateTip();
});

// Handle people input
peopleInput.addEventListener("input", () => {
  people = parseInt(peopleInput.value);
  calculateTip();
});

// Handle reset button
resetButton.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";
  tipButtons.forEach(b => b.classList.remove("active"));

  bill = 0;
  people = 1;
  tip = 0.15;

  tipAmountDisplay.innerText = "$0.00";
  totalAmountDisplay.innerText = "$0.00";
});
