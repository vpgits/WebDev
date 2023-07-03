let validName ;
const warning = document.createElement('p') ;
warning.classList.add("warning");

function validateName(inputelement, parentelement){
    validName = false;
    let element = document.getElementById(inputelement);
    element.addEventListener('input' ,()=>{
        // element.classList.add("valid")
        const text = element.value;
        const warningText = document.querySelector(".warning."+inputelement);
        const parentElement = document.getElementById(parentelement);
        warning.classList.add(inputelement);
        var regex =  /^[A-Za-z\s]+$/;
        if (warningText === null) {
            parentElement.appendChild(warning);
        } else{
            warning.textContent = null;
            if (text.length <7){
                warningText.textContent  =  "Should enter first and second name";
            }
            else if (text.length >= 7){
                if (!regex.test(text)){
                    warningText.textContent  =  "Should exclude symbols and numbers";
                   
                }else {
                    validName = true;
                    parentElement.removeChild(warning);
            } 
        }
        }
    })
    console.log(validName);
    return validName;
}

let validTele;

function validateNumber(){
    validTele = false;
    let element = document.getElementById("telephone");
    const warningText = document.querySelector(".warning.telephone");
    const parentElement = element.parentNode;
    warning.classList.add("telephone");
    if (warningText === null) {
        parentElement.appendChild(warning);
    } else {
        warning.textContent = null;
        if ( element.value.length !=0){
            if (element.value.length != 10){
                warningText.textContent = "Enter a valid phone number";
               
            } else if (element.value.length === 10) {
                parentElement.removeChild(warning);
                validTele = true;
          
            }
        }
    }
    return validTele;
}

let validEmail ;
function validateEmail(){
    validEmail = false;
    let email = document.getElementById("email");
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //chatgpt
    const warningText = document.querySelector(".warning.email");
    const parentElement  = email.parentNode;
    warning.classList.add("email");
    if (warningText === null){
        parentElement.appendChild(warning);
    } else {
        if(!regex.test(email.value)){
            warningText.textContent  = "Enter a valid email";
        } else{
            parentElement.removeChild(warning);
        }
    }
}

function validateCreditCardNum(){
    const num = document.getElementById("cardNumber");
    const warningText  =document.querySelector(".warning.number");
    const parentElement = num.parentNode;
    warning.classList.add("number");
    var regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (warningText === null){
        parentElement.appendChild(warning);
    } else{
        if (num.value.length<19 && (num.value.length===4 || num.value.length==9|| num.value.length ===14)){
            num.value += "-";
        }
        if (regex.test(num.value)){
            if (num.value.length!=19){
                warningText.textContent = "A valid card number must have 16 digits";
            }else {
                parentElement.removeChild(warning);
            }
        } else {
            warningText.textContent = "Enter digits";
            // parentElement.appendChild(warningText);
        }
    }
}

function validateExpiryDate(){
    const date = document.getElementById("expiry-date");
    const warningText = document.querySelector(".warning.expiry-date");
    const parentElement  = date.parentElement;
    warning.classList.add("expiry-date");
    var regex = /^\d+\/\d+$/; //chatgpt formatted like so checks for 12/24 format
    if (warningText === null){
        parentElement.appendChild(warning);
    } else{
        if (!regex.test(date.value)){
            warningText.textContent = "Enter in the given format MM/YY";
        } else{
            if (date.value.slice(0,2)>12){
                warningText.textContent = "Month is invalid";
            } else if (date.value.length != 5){
                warningText.textContent = "Invalid Year";
            } else {
                parentElement.removeChild(warning);
            }
        }
    }
}

function validateHouseNumber(){
    let regex =/^(\d+)(\/\d*)?$/;
    const number = document.getElementById("houseNo");
    const warningText = document.querySelector(".warning.houseNo");
    const parentElement = number.parentElement;
    warning.classList.add("houseNo");
    if (warningText === null){
        parentElement.appendChild(warning);
    } else {
        if (!regex.test(number.value)){
            console.log('Im here');
            warning.textContent = "Enter a valid House number"
        } else {
            parentElement.removeChild(warning);
        }
    }

}



function validateFormOne(){
    return validateName() && validateNumber();
    // return false;
}

function validateFormTwo(){
    return validateName() 
}

function switchFormsOne(){
    //toggle visibility of the form
    // document.getElementById("user-details").classList.remove("active");
    // document.getElementById("user-details").classList.add("inactive");
    document.getElementById("payment-details").classList.remove("inactive");
    document.getElementById("payment-details").classList.add("active");
    document.querySelector("footer").style.position = "relative";
    document.getElementById("user-details").style.marginTop = 0;
    document.querySelectorAll(".btns.formOne").forEach((element) =>{
        element.style.display = "none";
    })
      
}
