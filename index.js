let listOneEl = document.getElementById("list-one-el");
let listTwoEl = document.getElementById("list-two-el");
let listThreeEl = document.getElementById("list-three-el");
let valueLengthEl = document.getElementById("value-length");

const includeUppercaseEl = document.getElementById("includeUppercase");
const includeNumbersEl = document.getElementById("includeNumbers");
const includeSymbolsEl = document.getElementById("includeSymbols");

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64).concat(
    arrayFromLowToHigh(91, 96).concat(arrayFromLowToHigh(123, 126))
  )
);

function generatePassword() {
  const characterAmount = document.querySelector("#password-length").value;
  const includeUppercase = includeUppercaseEl.checked;
  const includeNumbers = includeNumbersEl.checked;
  const includeSymbols = includeSymbolsEl.checked;
  const password1 = generatePasswords(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  const password2 = generatePasswords(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  const password3 = generatePasswords(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
  listOneEl.textContent = password1;
  listTwoEl.textContent = password2;
  listThreeEl.textContent = password3;
}

function generatePasswords(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  const passwordCharacters = [];
  for (let i = 0; i <= characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharacters.push(String.fromCharCode(characterCode));
  }
  return passwordCharacters.join("");
}

function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}

// Copy on click

function copyOne(that) {
  var inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = listOneEl.textContent;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
  alert("Password Copied to Clipboard");
}

function copyTwo(that) {
  var inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = listTwoEl.textContent;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
  alert("Password Copied to Clipboard");
}

function copyThree(that) {
  var inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = listThreeEl.textContent;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
  alert("Password Copied to Clipboard");
}
// =======
// Filters
// =======

// Password Length
function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value;
}

// Symbols Checkbox
function symbolsCheck() {
  // Get the checkbox
  var checkBox = document.getElementById("includeSymbols");
  // Get the output text
  var text = document.getElementById("symbolsValue");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    text.textContent = "Yes";
  } else if (checkBox.checked == false) {
    text.style.display = "block";
    text.textContent = "No";
  }
}

// Numbers Checkbox
function numbersCheck() {
  // Get the checkbox
  var checkBox = document.getElementById("includeNumbers");
  // Get the output text
  var text = document.getElementById("numbersValue");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    text.textContent = "Yes";
  } else if (checkBox.checked == false) {
    text.style.display = "block";
    text.textContent = "No";
  }
}

// Uppercase Checkbox
function uppercaseCheck() {
  // Get the checkbox
  var checkBox = document.getElementById("includeUppercase");
  // Get the output text
  var text = document.getElementById("uppercaseValue");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    text.textContent = "Yes";
  } else if (checkBox.checked == false) {
    text.style.display = "block";
    text.textContent = "No";
  }
}

// Lowercase Checkbox
function disableLowercase() {
  document.getElementById("includeLowercase").disabled = true;
}
disableLowercase();
function lowercaseCheck() {
  // Get the checkbox
  var checkBox = document.getElementById("includeLowercase");
  // Get the output text
  var text = document.getElementById("lowercaseValue");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    text.textContent = "Yes";
  } else if (checkBox.checked == false) {
    text.style.display = "block";
    text.textContent = "No";
  }
}
