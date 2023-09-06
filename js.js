let billInput = document.getElementById("bill-input");
let peopleInput = document.getElementById("people-input");
let buttons = document.querySelector(".grid");
let btnList = document.querySelectorAll(".btn");
let grossBill = document.getElementById("gross-bill");
let totalEach = document.getElementById("total-each");
let resetBtn = document.getElementById("reset");
let custom = document.getElementById("custom");

// get values of input boxes
var tip;

const getCustomValue = () => {
  tip = custom.value / 100;
};

const calculateBill = () => {
  var bill = Number(billInput.value);
  var people = Number(peopleInput.value);

  // calculate tip and add to bill
  var tipCalc = Number(bill * tip);
  var billTotal = Number(bill + tipCalc);

  // split billTotal between no of people
  if (tip === undefined) {
    var totalSplit = bill / people;
  } else {
    var totalSplit = billTotal / people;
  }

  // print results to DOM
  // gross bill
  billTotal > 0
    ? (grossBill.innerHTML = `£${billTotal.toFixed(2)}`)
    : (grossBill.innerHTML = `£${bill.toFixed(2)}`);

  // total pp
  if (people >= 1) {
    totalEach.innerHTML = `£${totalSplit.toFixed(2)}`;
  } else if (billTotal > 0) {
    totalEach.innerHTML = `£${billTotal.toFixed(2)}`;
  } else if (billTotal <= 0) {
    totalEach.innerHTML = `£${billTotal.toFixed(2)}`;
  }
};

// reset button
const clearResult = () => {
  console.log("cleared");
  totalEach.innerHTML = "£0.00";
  grossBill.innerHTML = "£0.00";
  billInput.value = "";
  peopleInput.value = "";
  tip = "";
  document.querySelector(".selected")?.classList.remove("selected");
  custom.value = "";
};

// highlight for tip% selected
btnList.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".selected")?.classList.remove("selected");
    btn.classList.add("selected");
  });
});
