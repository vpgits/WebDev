// Student Role: student 1
// Student Name: Heshan Wanigasinghe

// Create a warning element for displaying validation messages
const warning = document.createElement("p");
warning.classList.add("warning");

// Event listener to run code after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Retrieve cart data from local storage and display it on the page
  let cart = window.localStorage.getItem("cart");
  // Remove the "Proceed To Checkout" button from the cart data
  cart = cart.replace(
    '<button class="btn btn-primary btn-ProceedToCheckout" type="button">Proceed To Checkout</button>',
    ""
  );
  // Display the cart data on the page
  let cartCard = document.querySelector(".cartCard");
  cartCard.innerHTML = cart;

  // Make all input elements in the cart read-only
  var inputElements = cartCard.querySelectorAll("input");
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].readOnly = true;
  }
});

// Function to validate the name input
function validateName(inputelement, parentelement) {
  // Get the input element and its value
  let element = document.getElementById(inputelement);
  const text = element.value;
  const warningText = document.querySelector(".warning." + inputelement);
  const parentElement = document.getElementById(parentelement);

  // Remove the existing warning element if it exists
  if (warningText !== null) {
    parentElement.removeChild(warningText);
  }

  // Check if the name is valid using isNameValid function
  const isValid = isNameValid(text);

  // If the name is invalid, display a warning message
  if (!isValid) {
    const warning = document.createElement("p");
    warning.classList.add("warning", inputelement);
    warning.textContent = "Should exclude symbols and numbers";
    warning.style.fontSize = "14px";
    parentElement.appendChild(warning);
  }

  // Return the validity status of the name
  return isValid;
}

// Function to check if the name is valid (n input without symbols and/or numbers)
function isNameValid(name) {
  // loops through each letter in the entered name to check if an invalid character is entered
  for (let i = 0; i < name.length; i++) {
    const charCode = name.charCodeAt(i);
    // Check if the character is a letter (A-Z or a-z) or a space
    if (
      !(charCode >= 65 && charCode <= 90) && // A-Z
      !(charCode >= 97 && charCode <= 122) && // a-z
      charCode !== 32 // Space
    ) {
      // returns false if name is invalid and true if valid
      return false;
    }
  }
  return true;
}

// Function to validate numeric input
function validateNumber(inputelement, length, warningmsg) {
  let element = document.getElementById(inputelement);
  const warningText = document.querySelector(`.warning.${inputelement}`);
  const parentElement = element.parentNode;
  warning.classList.add(`${inputelement}`);

  // Check if the warning element already exists in the parent element
  if (warningText === null) {
    parentElement.appendChild(warning);
  } else {
    warning.textContent = null;
    // checks if the number of digits in the number is not equal to zero or the expected length
    if (element.value.length != 0) {
      if (element.value.length != length) {
        warningText.textContent = warningmsg;
        return false;
        // if the number of digis=ts in the name is equal to the expected length, return true
      } else if (element.value.length == length) {
        parentElement.removeChild(warning);
        return true;
      }
    }
  }
}

// Function to validate email input
function validateEmail() {
  let email = document.getElementById("email");
  const warningText = document.querySelector(".warning.email");
  const parentElement = email.parentNode;
  warning.classList.add("email");

  if (warningText === null) {
    parentElement.appendChild(warning);
  } else {
    // If the email is not valid, display a warning message
    if (!isEmailValid(email.value)) {
      warningText.textContent = "Enter a valid email";
      return false;
    } else {
      // If the email is valid, remove the warning message
      parentElement.removeChild(warning);
      return true;
    }
  }
}

// Function to check if the email is valid
function isEmailValid(email) {
  // Check if email contains both "@" and "."
  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");
  return (
    atIndex >= 1 && dotIndex > atIndex + 1 && dotIndex !== email.length - 1
  );
}

// Function to validate the expiry date input
function validateExpiryDate() {
  const date = document.getElementById("expiry-date");
  const warningText = document.querySelector(".warning.expiry-date");
  const parentElement = date.parentElement;
  warning.classList.add("expiry-date");

  if (warningText === null) {
    parentElement.appendChild(warning);
  }

  // Clear the existing warning message
  warningText.textContent = null;

  // Split the date input into month and year parts
  const [month, year] = date.value.split("/");
  // get the current year(at the time of writing this code currentYear = 23)
  const currentYear = new Date().getFullYear() % 100;

  // Validate the format and the month/year values
  if (
    date.value.length !== 5 ||
    isNaN(parseInt(month)) ||
    isNaN(parseInt(year)) ||
    month < 1 ||
    month > 12 ||
    // ensures the year being input is either the current year or greater, not any year before
    year < currentYear
  ) {
    // If the input is not valid, display a warning message
    warningText.textContent = "Enter in the given format MM/YY";
    return false;
  }
  // If the input is valid, remove the warning message
  parentElement.removeChild(warning);
  return true;
}

// Event listeners for form submission buttons
const submitOne = document.getElementById("submitOne");
const submitTwo = document.getElementById("submitTwo");
submitOne.addEventListener("click", validateAndSubmitOne);
submitTwo.addEventListener("click", validateAndSubmitTwo);

// Function to validate and submit form one (shipping details)
async function validateAndSubmitOne(e) {
  // Validate all input fields in form one
  const validFname = await validateName("fname", "fname-container");
  const validStreetName = await validateName("street", "street-container");
  const validCityName = await validateName("city", "city-container");
  const validZip = await validateNumber("zip", 5, "Invalid Zip Code");
  const validTele = await validateNumber(
    "telephone",
    10,
    "Invalid Telephone Number"
  );
  // If any field is invalid, prevent form submission and show an alert
  if (
    !(validFname && validStreetName && validCityName && validZip && validTele)
  ) {
    e.preventDefault();
    alert("Please fill all fields.");
  }
}

// Function to validate and submit form two (payment details)
async function validateAndSubmitTwo(e) {
  // Validate all input fields in form two
  const validCname = await validateName("cname", "cardname-container");
  const validEmail = await validateEmail();
  const validCardNum = await validateNumber(
    "cardNumber",
    16,
    "Invalid credit card number"
  );
  const validExpDate = await validateExpiryDate();
  const validCSV = await validateNumber("csv", 3, "Invalid CSV");

  if (!(validCname && validEmail && validCardNum && validExpDate && validCSV)) {
    e.preventDefault();
    alert("Please fill all fields. Hover to guide");
  }
}

// Function to switch to form two (payment details) and disable form one (shipping details)
function switchFormsOne() {
  document.querySelectorAll(".formOne").forEach((element) => {
    element.style.display = "none";
  });
  document.getElementById("payment-details").style.display = "block";
  const formElements = document
    .getElementById("user-details")
    .getElementsByTagName("input");
  for (let i = 0; i < formElements.length; i++) {
    formElements[i].disabled = true;
  }
}

// Function to redirect user to the comments page after successful submission
function switchFormsTwo() {
  window.location.href = "/student_2/feedback_form/comments.html";
}
