// Name Function
function validateName() {
  const nameInput = document.getElementById('title'); // Connects function to name input on HTML.
  const nameRegex = /^[a-zA-Z!#$%&'*+\-\/=?^_`{|}~]{2,} [a-zA-Z!#$%&'*+\-\/=?^_`{|}~]{2,}$/; // Checks name input meets requirements outlined by CTO.

  if (nameInput.value.trim() === '') {
    nameInput.style.backgroundColor = '';
    return false; // Removes any background (error) colour when name input box is empty and returns false.
  } else if (nameRegex.test(nameInput.value)) {
    nameInput.style.backgroundColor = '';
    return true; // Checks if name meets CTO requirements, returns true.
  } else {
    nameInput.style.backgroundColor = 'rgb(231,0,100)';
    return false; // If name does not meet CTO requirements, turns pink to show an error and returns false.
  }
}

// Email Function
function validateEmail() {
  const emailInput = document.getElementById('email'); // Connects function to email input on HTML.
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Checks the structure of email input follows standard email format.

  if (emailInput.value.trim() === '') {
    emailInput.style.backgroundColor = '';
    return false; // Removes any background (error) colour when the email input box is empty and returns false.
  } else if (emailRegex.test(emailInput.value)) {
    emailInput.style.backgroundColor = '';
    return true; // Checks if email entered by user meets the correct format of an email address and returns true.
  } else {
    emailInput.style.backgroundColor = 'rgb(231,0,100)';
    return false; // If email does not align to the email structure, returns false and turns pink to show an error.
  }
}

// Card Number Function
function validateCardNumber() {
  const cardInput = document.getElementById('creditCard-number'); // Connects function to credit card input on HTML.
  const cardNumberReversed = cardInput.value.replace(/\D/g, '').split('').reverse(); // Removes non-digits, reverses string and stores data as an array.

  if (cardInput.value.trim() === '') {
    cardInput.style.backgroundColor = ''; 
    return false; // Removes any background (error) colour when the card input box is empty and returns false.
  }

  if (cardNumberReversed.every(digit => digit === '0')) {
    cardInput.style.backgroundColor = 'rgb(231,0,100)';
    return false; // If the digits entered are equal to exactly 0, highlights pink to show an error and returns false.
  }

  let sum = 0;

  if (cardNumberReversed.length !== 16) {
    cardInput.style.backgroundColor = 'rgb(231,0,100)';
    return false; // Checks the number entered in the card input box meets exactly 16 digits. If the number entered is not equal to 16, box highlights pink to show an error and returns false.
  }

  for (let i = 0; i < cardNumberReversed.length; i++) {
    let digit = parseInt(cardNumberReversed[i]); // Converts digits entered into an interger.
    if (i % 2 === 1) { // Checks the digits position is an odd number starting with [0] as it is coded as an array.
      digit *= 2; // Doubles the digit based on the aray.
      if (digit > 9) {
        digit -= 9; // If doubling the digit is 9 or higher, subtracts 9.
      }
    }
    sum += digit; // Adds the digit to the remaining sum.
  }

  if (sum % 10 === 0) {
    cardInput.style.backgroundColor = '';
    return true; // Checks if the number entered conforms to the LUHN algorithm and is divisible to 10. Returns true is the number entered is valid.
  } else {
    cardInput.style.backgroundColor = 'rgb(231,0,100)';
    return false; // If the number is not divisible by 10 and does not confirm to LUHN algorithm, highlights pink to show an error and returns false.
  }
}

// Checks if information entered in all fields are valid.
function validateAllFields() {
  const nameInput = document.getElementById('title'); // References name element by ID.
  const emailInput = document.getElementById('email'); // References email element by ID.
  const cardInput = document.getElementById('creditCard-number'); // References card element by ID.
  const submitButton = document.getElementById('submit-button'); // References submit button by ID.

  let isNameValid = validateName(); // Calls function.
  let isEmailValid = validateEmail(); // Calls function.
  let isCardValid = validateCardNumber(); // Calls function.

  if (isNameValid && isEmailValid && isCardValid) {
    submitButton.disabled = false;
    return true; // If name input, email input, and card input are all valid, meet the requirements outlined in the User Stories, and return true values, submit button is enabled.
  } else {
    submitButton.disabled = true;
    return false; // If name input, email input, and/or card input are invalid, do NOT meet the requirements outlined in the User Stories, and return false values, submit button is disabled.
  }
}

document.getElementById('title').addEventListener('blur', validateName); // Adds event listener for the onblur and calls the name function.

document.getElementById('email').addEventListener('input', validateEmail); // Adds event listener for the input and calls the email function.

document.getElementById('creditCard-number').addEventListener('blur', validateCardNumber); // Adds event listener for the onblur and calls the card function.

document.getElementById('booking-form').addEventListener('input', validateAllFields); // Calls the validate all fields function and allows user to proceed onto submitting form if data entered is correct and valid.

