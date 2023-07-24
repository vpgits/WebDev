// // Student Role: student 1
// // Student Name: Heshan Wanigasinghe

// //creates a warning element to be appended to the DOM
// const warning = document.createElement("p");
// warning.classList.add("warning");

// //loads data via the localstorage API and disables input on elements of the retrived element
// document.addEventListener("DOMContentLoaded", () => {
//   let cart = window.localStorage.getItem("cart");

//   cart = cart.replace(
//     '<button class="btn btn-primary btn-ProceedToCheckout" type="button">Proceed To Checkout</button>',
//     ""
//   );

//   let cartCard = document.querySelector(".cartCard");
//   cartCard.innerHTML = cart;
//   var inputElements = cartCard.querySelectorAll("input");
//   for (var i = 0; i < inputElements.length; i++) {
//     inputElements[i].readOnly = true;
//   }
// });

// //checks if the name is valid in form one and two

// function validateName(inputelement, parentelement) {
//   let element = document.getElementById(inputelement);
//   const text = element.value;
//   const warningText = document.querySelector(".warning." + inputelement);
//   const parentElement = document.getElementById(parentelement);
//   warning.classList.add(inputelement);
//   var regex = /^[A-Za-z\s]+$/;
//   if (warningText === null) {
//     parentElement.appendChild(warning);
//   } else {
//     warning.textContent = null;
//     if (!regex.test(text)) {
//       warningText.textContent = "Should exclude symbols and numbers";
//       return false;
//     } else {
//       parentElement.removeChild(warning);
//       return true;
//     }
//   }
// }

// //validates the  numbers

// function validateNumber(inputelement, length, warningmsg) {
//   let element = document.getElementById(inputelement);
//   const warningText = document.querySelector(`.warning.${inputelement}`);
//   const parentElement = element.parentNode;
//   warning.classList.add(`${inputelement}`);
//   if (warningText === null) {
//     parentElement.appendChild(warning);
//   } else {
//     warning.textContent = null;
//     if (element.value.length != 0) {
//       if (element.value.length != length) {
//         warningText.textContent = warningmsg;
//         return false;
//       } else if (element.value.length === length) {
//         parentElement.removeChild(warning);
//         return true;
//       }
//     }
//   }
// }

// //validates the email

// function validateEmail() {
//   let email = document.getElementById("email");
//   var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const warningText = document.querySelector(".warning.email");
//   const parentElement = email.parentNode;
//   warning.classList.add("email");
//   if (warningText === null) {
//     parentElement.appendChild(warning);
//   } else {
//     if (!regex.test(email.value)) {
//       warningText.textContent = "Enter a valid email";
//       return false;
//     } else {
//       parentElement.removeChild(warning);
//       return false;
//     }
//   }
// }

// //validates the credit card number

// function validateCreditCardNum() {
//   const num = document.getElementById("cardNumber");
//   const warningText = document.querySelector(".warning.number");
//   const parentElement = num.parentNode;
//   warning.classList.add("number");
//   var regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
//   if (warningText === null) {
//     parentElement.appendChild(warning);
//   } else {
//     if (
//       num.value.length < 19 &&
//       (num.value.length === 4 ||
//         num.value.length == 9 ||
//         num.value.length === 14)
//     ) {
//       num.value += "-";
//     }
//     if (regex.test(num.value)) {
//       if (num.value.length != 19) {
//         warningText.textContent = "A valid card number must have 16 digits";
//       } else if (num.value.length === 19) {
//         parentElement.removeChild(warning);
//         return true;
//       }
//     } else {
//       warningText.textContent = "Enter digits";
//       return false;
//     }
//   }
// }

// function validateExpiryDate() {
//   const date = document.getElementById("expiry-date");
//   const warningText = document.querySelector(".warning.expiry-date");
//   const parentElement = date.parentElement;
//   warning.classList.add("expiry-date");
//   var regex = /^\d+\/\d+$/; 
//   if (warningText === null) {
//     parentElement.appendChild(warning);
//   } else {
//     if (!regex.test(date.value)) {
//       warningText.textContent = "Enter in the given format MM/YY";
//     } else {
//       if (date.value.slice(0, 2) > 12) {
//         warningText.textContent = "Month is invalid";
//         return false;
//       } else if (date.value.length != 5) {
//         warningText.textContent = "Invalid Year";
//         return false;
//       } else {
//         parentElement.removeChild(warning);
//         return true;
//       }
//     }
//   }
// }

// const submitOne = document.getElementById("submitOne");
// const submitTwo = document.getElementById("submitTwo");

// async function validateAndSubmitOne(e) {
//   const validFname = await validateName("fname", "fname-container");
//   const validStreetName = await validateName("street", "street-container");
//   const validCityName = await validateName("city", "city-container");
//   const validZip = await validateNumber("zip", 5, "Invalid Zip Code");
//   const validTele = await validateNumber(
//     "telephone",
//     10,
//     "Invalid Telephone Number"
//   );

//   if (
//     !(validFname && validStreetName && validCityName && validZip && validTele)
//   ) {
//     e.preventDefault();
//     alert("Please fill all fields. Hover to guide");
//   }
// }

// async function validateAndSubmitTwo(e) {
//   const validCname = await validateName("cname", "cardname-container");
//   const validEmail = await validateEmail();
//   const validCardNum = await validateCreditCardNum();
//   const validExpDate = await validateExpiryDate();
//   const validCSV = await validateNumber("csv", 3, "Invalid CSV");
//   if (!(validCname && validEmail && validCardNum && validExpDate && validCSV)) {
//     e.preventDefault();
//     alert("Please fill all fields. Hover to guide");
//   }
// }

// submitOne.addEventListener("click", validateAndSubmitOne);
// submitTwo.addEventListener("click", validateAndSubmitTwo);

// //validates form One

// //validates form Two
// function validateFormTwo() {}

// //disables form One and inserts form two
// function switchFormsOne() {
//   document.querySelectorAll(".formOne").forEach((element) => {
//     element.style.display = "none";
//   });
//   document.getElementById("payment-details").style.display = "block";
//   const formElements = document
//     .getElementById("user-details")
//     .getElementsByTagName("input");
//   for (let i = 0; i < formElements.length; i++) {
//     formElements[i].disabled = true;
//   }
// }

// //redirects user to comments page after successful submission
// function switchFormsTwo() {
//   window.location.href = "/student_2/feedback_form/comments.html";
// }





// Student Role: student 1
// Student Name: Heshan Wanigasinghe

//creates a warning element to be appended to the DOM
const warning = document.createElement("p");
warning.classList.add("warning");

document.addEventListener("DOMContentLoaded", () => {
  let cart = window.localStorage.getItem("cart");

  cart = cart.replace(
    '<button class="btn btn-primary btn-ProceedToCheckout" type="button">Proceed To Checkout</button>',
    ""
  );

  let cartCard = document.querySelector(".cartCard");
  cartCard.innerHTML = cart;
  var inputElements = cartCard.querySelectorAll("input");
  for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].readOnly = true;
  }
});

// validates the name
function validateName(inputelement, parentelement) {
  let element = document.getElementById(inputelement);
  const text = element.value;
  const warningText = document.querySelector(".warning." + inputelement);
  const parentElement = document.getElementById(parentelement);

  // Remove the existing warning element if it exists
  if (warningText !== null) {
    parentElement.removeChild(warningText);
  }
  const isValid = isNameValid(text);
  if (!isValid) {
    const warning = document.createElement("p");
    warning.classList.add("warning", inputelement);
    warning.textContent = "Should exclude symbols and numbers";
    warning.style.fontSize = "14px";
    parentElement.appendChild(warning);
  }
  return isValid;
}

function isNameValid(name) {
  for (let i = 0; i < name.length; i++) {
    const charCode = name.charCodeAt(i);
    // Check if the character is a letter (A-Z or a-z) or a space
    if (
      !(charCode >= 65 && charCode <= 90) && // A-Z
      !(charCode >= 97 && charCode <= 122) && // a-z
      charCode !== 32 // Space
    ) {
      return false;
    }
  }
  return true;
}

// validates the  numbers
function validateNumber(inputelement, length, warningmsg) {
  let element = document.getElementById(inputelement);
  const warningText = document.querySelector(`.warning.${inputelement}`);
  const parentElement = element.parentNode;
  warning.classList.add(`${inputelement}`);
  if (warningText === null) {
    parentElement.appendChild(warning);
  } else {
    warning.textContent = null;
    if (element.value.length != 0) {
      if (element.value.length != length) {
        warningText.textContent = warningmsg;
        return false;
      } else if (element.value.length == length) {
        parentElement.removeChild(warning);
        return true;
      }
    }
  }
}


// validates the email
function validateEmail() {
  let email = document.getElementById("email");
  const warningText = document.querySelector(".warning.email");
  const parentElement = email.parentNode;
  warning.classList.add("email");

  if (warningText === null) {
    parentElement.appendChild(warning);
  } else {
    if (!isEmailValid(email.value)) {
      warningText.textContent = "Enter a valid email";
      return false;
    } else {
      parentElement.removeChild(warning);
      return true;
    }
  }
}

function isEmailValid(email) {
  // Check if email contains both "@" and "."
  const atIndex = email.indexOf("@");
  const dotIndex = email.lastIndexOf(".");

  if (atIndex < 1 || dotIndex <= atIndex + 1 || dotIndex === email.length - 1) {
    return false;
  } else {
    return true;
  }
}


// validates the expiry date
function validateExpiryDate() {
  const date = document.getElementById("expiry-date");
  const warningText = document.querySelector(".warning.expiry-date");
  const parentElement = date.parentElement;
  warning.classList.add("expiry-date");

  if (warningText === null) {
    parentElement.appendChild(warning);
  }

  warningText.textContent = null;

  const [month, year] = date.value.split("/");
  const currentYear = new Date().getFullYear() % 100;

  if (
    date.value.length !== 5 ||
    isNaN(parseInt(month)) ||
    isNaN(parseInt(year)) ||
    month < 1 ||
    month > 12 ||
    year < currentYear ||
    year > currentYear + 10
  ) {
    warningText.textContent = "Enter in the given format MM/YY";
    return false;
  }

  parentElement.removeChild(warning);
  return true;
}

const submitOne = document.getElementById("submitOne");
const submitTwo = document.getElementById("submitTwo");

async function validateAndSubmitOne(e) {
  const validFname = await validateName("fname", "fname-container");
  const validStreetName = await validateName("street", "street-container");
  const validCityName = await validateName("city", "city-container");
  const validZip = await validateNumber("zip", 5, "Invalid Zip Code");
  const validTele = await validateNumber(
    "telephone",
    10,
    "Invalid Telephone Number"
  );

  if (
    !(validFname && validStreetName && validCityName && validZip && validTele)
  ) {
    e.preventDefault();
    alert("Please fill all fields. Hover to guide");
  }
}

async function validateAndSubmitTwo(e) {
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

submitOne.addEventListener("click", validateAndSubmitOne);
submitTwo.addEventListener("click", validateAndSubmitTwo);

//validates form One

//validates form Two
function validateFormTwo() {}

//disables form One and inserts form two
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

//redirects user to comments page after successful submission
function switchFormsTwo() {
  window.location.href = "/student_2/feedback_form/comments.html";
}
