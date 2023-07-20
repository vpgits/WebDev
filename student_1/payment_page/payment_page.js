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
let validStreet;
let validCity;
let cardName;

function validateName(inputelement, parentelement, tracker) {
  tracker = false;
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
        if (!regex.test(text)) {
          warningText.textContent = "Should exclude symbols and numbers";
        } else {
          tracker = true;
          parentElement.removeChild(warning);
        }
    }
  });
  return tracker;
}

//validates the  numbers
let validTele;
let validZip;
let validCSV;

function validateNumber(inputelement,length,warningmsg,tracker) {
  tracker=false;
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

}

let validExpDate;
function validateExpiryDate() {
  const date = document.getElementById("expiry-date");
  const warningText = document.querySelector(".warning.expiry-date");
  const parentElement = date.parentElement;
  warning.classList.add("expiry-date");
  var regex = /^\d+\/\d+$/; //chatgpt formatted like so checks for 12/24 format
  if (warningText === null) {
    parentElement.appendChild(warning);
  } else {
    if (!regex.test(date.value)) {
      warningText.textContent = "Enter in the given format MM/YY";
    } else {
      if (date.value.slice(0, 2) > 12) {
        warningText.textContent = "Month is invalid";
      } else if (date.value.length != 5) {
        warningText.textContent = "Invalid Year";
      } else {
        parentElement.removeChild(warning);
        validExpDate=true;
      }
    }
  }
}



//validates form One
function validateFormOne() {
  let output = validName && validTele && validZip && validStreet && validCity;
  if(output==false){
    console.log(output);
    alert("Please fill all fields. Hover to guide");
  }
  return output;

}

//validates form Two
function validateFormTwo() {
  let output = validCard && cardName && validEmail &&validExpDate && validCSV;
    if(output==false){
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

  document.querySelectorAll(".formOne").forEach((element) => {
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
  // let output;
  // output = validCard && cardName && validEmail && validExpDate;


    window.location.href = "/student_2/feedback_form/comments.html";

}
