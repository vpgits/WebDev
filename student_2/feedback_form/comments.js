// Student Role: student_2
// Student Name: M.B.V.Pesanjith 

let slider = document.getElementById("rating-slider");
let textArea  = document.getElementById("reason");
let submit = document.getElementById("submit");
let form = document.getElementById("form");


//function to valdate whether an input has been made to the slider and the textbox
function validateForms(){

    submit.addEventListener('click', ()=> {
        if (!validateForms()&&(!slider.classList.contains("invalid"))){
            slider.classList.add("invalid");
            slider.append("Please enter a rating");
        }
        if (!validateForms()&&(!textArea.classList.contains("invalid"))){
            textArea.classList.add("invalid");
            textArea.append("Please enter a reason");
        }
    })

    if (slider.classList.contains('valid') && textArea.classList.contains('valid')) {
      setTimeout(() => {
        const message = document.createElement('p');
        message.textContent = 'Thank you. Redirecting to the home page.';
        form.appendChild(message);
      }, 2000);
    }
    return slider.classList.contains("valid") && textArea.classList.contains("valid");
}

//mic4o function
function validate(elementId){

    let element = document.getElementById(elementId);
    element.addEventListener('input' ,()=>{
        element.classList.add("valid")
    })
}

//generates a text based error message on the DOM
function informUser(){
    document.getElementById("submit").addEventListener('click', ()=> {
        if (!validateForms()&&(!slider.classList.contains("invalid"))){
            slider.classList.add("invalid");
            slider.append("Please enter a rating");
        }
        if (!validateForms()&&(!textArea.classList.contains("invalid"))){
            textArea.classList.add("invalid");
            textArea.append("Please enter a reason");
        }
    })

}

informUser();