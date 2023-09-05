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
  const tipCalc = Number(bill * tip);
  const billTotal = Number(bill + tipCalc);
  // const tipSplit = Math.round((tipCalc / people) * 100) / 100;

  // split billTotal between no of people
  const totalSplit = Math.round((billTotal / people) * 100) / 100;

  // print results to DOM
  // netBill.innerHTML = bill;
  // totalTip.innerHTML = tipCalc;

  billTotal > 0
    ? (grossBill.innerHTML = billTotal)
    : (grossBill.innerHTML = bill);

  // tipEach.innerHTML = tipSplit;

  if (people >= 1) {
    totalEach.innerHTML = totalSplit;
  } else if (billTotal > 0) {
    totalEach.innerHTML = billTotal;
  } else {
    totalEach.innerHTML = bill;
  }
};
