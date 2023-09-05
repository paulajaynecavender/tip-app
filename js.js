let billInput = document.getElementById("bill-input");
let peopleInput = document.getElementById("people-input");
let buttons = document.querySelector(".grid");
// let netBill = document.getElementById("net-bill");
// let totalTip = document.getElementById("total-tip");
let grossBill = document.getElementById("gross-bill");
// let tipEach = document.getElementById("tip-each");
let totalEach = document.getElementById("total-each");

// get value of tip selected
var tip;

const calculateBill = () => {
  // get values of input boxes
  const bill = Number(billInput.value);
  const people = Number(peopleInput.value);

  // calculate tip and add to bill
  const tipCalc = bill * tip;
  const billTotal = bill + tipCalc;
  // const tipSplit = Math.round((tipCalc / people) * 100) / 100;

  // split billTotal between no of people
  const totalSplit = Math.round((billTotal / people) * 100) / 100;

  // print results to DOM
  // netBill.innerHTML = bill;
  // totalTip.innerHTML = tipCalc;
  grossBill.innerHTML = billTotal;
  // tipEach.innerHTML = tipSplit;
  totalEach.innerHTML = totalSplit;
};
