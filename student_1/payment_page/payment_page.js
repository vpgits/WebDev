// Student Role: student_2
// Student Name: M.B.V.Pesanjith 




//creates a warning element to be appended to the DOM
const warning = document.createElement("p");
warning.classList.add("warning");

//loads data via the localstorage API and disables input on elements of the retrived element
document.addEventListener('DOMContentLoaded', ()=>{
  let cart = window.localStorage.getItem("cart");

  cart = cart.replace('<button class="btn btn-primary btn-ProceedToCheckout" type="button">Proceed To Checkout</button>', "");


  let cartCard = document.querySelector(".cartCard");
  cartCard.innerHTML = cart;
  var inputElements = cartCard.querySelectorAll('input');
for (var i = 0; i < inputElements.length; i++) {
    inputElements[i].readOnly = true;
}
})

//checks if the name is valid in form one and two
let validName;

function validateName(inputelement, parentelement) {
  validName = false;
  let element = document.getElementById(inputelement);
  element.addEventListener("input", () => {
    // element.classList.add("valid")
    const text = element.value;
    const warningText = document.querySelector(".warning." + inputelement);
    const parentElement = document.getElementById(parentelement);
    warning.classList.add(inputelement);
    var regex = /^[A-Za-z\s]+$/;
    if (warningText === null) {
      parentElement.appendChild(warning);
    } else {
      warning.textContent = null;
      if (text.length < 7) {
        warningText.textContent = "Should enter first and second name";
      } else if (text.length >= 7) {
        if (!regex.test(text)) {
          warningText.textContent = "Should exclude symbols and numbers";
        } else {
          validName = true;
          console.log(validName);
          parentElement.removeChild(warning);
        }
      }
    }
  });
}

//validates the  numbers
let validTele;
let validCSV;
let validZip;

function validateNumber(inputelement,length,warningmsg,tracker) {
  tracker = false;
  console.log("hi")
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
        warningText.textContent = warningmsg
      } else if (element.value.length === length) {
        parentElement.removeChild(warning);
        tracker = true;
      }
    }
  }
  return tracker;
}

//validates the email
let validEmail;
function validateEmail() {
  validEmail = false;
  let email = document.getElementById("email");
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //chatgpt
  const warningText = document.querySelector(".warning.email");
  const parentElement = email.parentNode;
  warning.classList.add("email");
  if (warningText === null) {
    parentElement.appendChild(warning);
  } else {
    if (!regex.test(email.value)) {
      warningText.textContent = "Enter a valid email";
    } else {
      validEmail = true;
      parentElement.removeChild(warning);
    }
  }
}

//validates the credit card number
let validCard;
function validateCreditCardNum() {
  const num = document.getElementById("cardNumber");
  const warningText = document.querySelector(".warning.number");
  const parentElement = num.parentNode;
  warning.classList.add("number");
  var regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  if (warningText === null) {
    parentElement.appendChild(warning);
  } else {
    if (
      num.value.length < 19 &&
      (num.value.length === 4 ||
        num.value.length == 9 ||
        num.value.length === 14)
    ) {
      num.value += "-";
    }
    if (regex.test(num.value)) {
      if (num.value.length != 19) {
        warningText.textContent = "A valid card number must have 16 digits";
      } else if (num.value.length === 19) {
        parentElement.removeChild(warning);
        validCard = true;
      }
    } else {
      warningText.textContent = "Enter digits";
      // parentElement.appendChild(warningText);
    }
  }
  console.log(validCard);
}


//validates the house number
// let validHouseNumber;
// function validateHouseNumber() {
//   let regex = /^(\d+)(\/\d*)?$/;
//   const number = document.getElementById("houseNo");
//   const warningText = document.querySelector(".warning.houseNo");
//   const parentElement = number.parentElement;
//   warning.classList.add("houseNo");
//   if (warningText === null) {
//     parentElement.appendChild(warning);
//   } else {
//     if (!regex.test(number.value)) {
//       // console.log("Im here");
//       warning.textContent = "Enter a valid House number";
//     } else {
//       validHouseNumber = true;
//       parentElement.removeChild(warning);
//     }
//   }
//   return validHouseNumber;
// }

//validates form One
function validateFormOne() {
  let output = validName && validTele && validHouseNumber;
  if(!output){
    alert("Please fill all fields. Hover to guide");
  }
  return output;

  // return false;
}

//validates form Two
function validateFormTwo() {
  let output = validCard && validName && validEmail;
    if(!output){
    alert("Please fill all fields. Hover to guide");
  }
  return output;
}

//disables form One and inserts form two
function switchFormsOne() {
  //toggle visibility of the form
  // document.getElementById("user-details").classList.remove("active");
  // document.getElementById("user-details").classList.add("inactive");
  // document.getElementById("payment-details").classList.remove("inactive");
  // document.getElementById("payment-details").classList.add("active");
  // document.querySelector("footer").style.position = "relative";
  // document.getElementById("user-details").style.marginTop = 0;
  document.querySelectorAll(".btns.formOne").forEach((element) => {
    element.style.display = "none";
  });
  document.getElementById("payment-details").style.display="block";
  const formElements = document
    .getElementById("user-details")
    .getElementsByTagName("input");
  for (let i = 0; i < formElements.length; i++) {
    console.log(formElements[i].innerHTML);
    formElements[i].disabled = true;
  }
}

//redirects user to comments page after successful submission
function switchFormsTwo() {
  if (validCard && validName && validEmail) {
    window.location.assign("/student_2/feedback_form/comments.html");
  }
}
