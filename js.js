let billTotal = document.querySelector("#bill");
let billInput = document.querySelector("#bill-input");
let peopleTotal = document.querySelector("#people");
let peopleInput = document.querySelector("#people-input");
let buttons = document.querySelector(".grid");
let tipResult = document.querySelector("#tip-result");
let totalResult = document.querySelector("#total-result");

// print value of bill total to console
billInput.addEventListener("input", (e) => {
  e.preventDefault();
  console.log("bill: ", billTotal.value);
});

peopleInput.addEventListener("input", (e) => {
  e.preventDefault();
  console.log("people: ", peopleTotal.value);
  calc();
});

buttons.addEventListener("click", handleClick);

function handleClick(e) {
  let buttonValue = e.target.value;
  console.log("tip: ", buttonValue);
}

function calc() {
  let total = billTotal.value / peopleTotal.value;
  let totalSplit = Math.round(total * 100) / 100;
  console.log("total split: ", totalSplit);
  // let tip = billTotal.value * buttonValue;
  // console.log(tip);
}
