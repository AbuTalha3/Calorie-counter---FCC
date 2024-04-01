const calorieCounter = document.getElementById('calorie-counter');
const budgetNumberInput = document.getElementById('budget');
const entryDropdown = document.getElementById('entry-dropdown');
const addEntryButton = document.getElementById('add-entry');
const clearButton = document.getElementById('clear');
const output = document.getElementById('output');
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, '');
}

function isInvalidInput(str) {
  // const regex = /e/;
  // const regex = /[0-9]e[0-9]/i; //There is a shorthand character class to match any digit: \d. Replace your [0-9] character classes with this shorthand.
  const regex = /\d+e\d+/i;
}