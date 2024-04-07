const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");
const numberInput = document.getElementById("number-input");

const referenceArr = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

// A variable to store the result string
let resStr = "";

// Function to convert integer to roman
const convertToRoman = (num) => {
  referenceArr.forEach((arr) => {
    while (num >= arr[1]) {
      num -= arr[1];
      resStr += arr[0];
    }
  });
};

// Validation check for input
const isValid = (numStr, numVal) => {
  let errorText = "";
  // If the input is empty or containing exponential or decimals
  if (!numStr || numStr.match(/[e.]/g)) {
    errorText = "Please enter a valid number";
  } else if (numVal <= 0) {
    errorText = "Please enter a number greater than or equal to 1";
  } else if (numVal > 3999) {
    errorText = "Please enter a number less than or equal to 3999";
  } else {
    return true;
  }
  outputDiv.classList.add("output-red");
  outputDiv.innerText = errorText;
  return false;
};

const reset = () => {
  resStr = "";
  outputDiv.innerText = "";
  outputDiv.classList.remove("output-red");
};

const Func = (numStr, numVal) => {
  // Making the output visible
  outputDiv.classList.remove("hidden");

  // Checking if the input is valid
  if (isValid(numStr, numVal)) {
    // If valid, calling the conversion function and printing the result
    convertToRoman(numVal);
    outputDiv.innerText = resStr;
  }
};

convertBtn.addEventListener("click", () => {
  // Clearing out the previous results
  reset();

  const numStr = document.getElementById("number-input").value;
  const numVal = parseInt(numStr, 10);
  Func(numStr, numVal);
});

numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    // Clearing out the previous results
    reset();

    const numStr = document.getElementById("number-input").value;
    const numVal = parseInt(numStr, 10);
    Func(numStr, numVal);
  }
});
