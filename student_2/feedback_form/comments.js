// Student Role: student_2
// Student Name: M.B.V.Pesanjith 

let slider = document.getElementById("rating-slider");
let textArea  = document.getElementById("reason");
let submit = document.getElementById("submit");
let form = document.getElementById("form");


//function to valdate whether an input has been made to the slider and the textbox
function validateForms(){

    // submit.addEventListener('click', ()=> {
    //     if (!validateForms()&&(!slider.classList.contains("invalid"))){
    //         slider.classList.add("invalid");
    //         slider.append("Please enter a rating");
    //     }
    //     if (!validateForms()&&(!textArea.classList.contains("invalid"))){
    //         textArea.classList.add("invalid");
    //         textArea.append("Please enter a reason");
    //     }
    // })

    if (slider.classList.contains('valid') && textArea.classList.contains('valid')) {
        window.location.href = "/index.html";
    } else 
 
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
        alert("Please fill the form");
    })
}

informUser();


//sends an email when the input is valid and redirects the user abck to the home page
submit.addEventListener('click', (e)=>{
    if (slider.classList.contains('valid') && textArea.classList.contains('valid')) {
      const link = document.createElement('a')  ;
      let body;
      const rating = document.getElementById("rating");
      const text = document.getElementById("reason");
      const device = document.getElementById("completion");
      const future  =  document.getElementById("future");
      body = `Hi, I really enjoyed the service.\n\nRating: ${rating.value}\nReason for rating : ${text.value}\nDevice of choice : ${device.value} \nFuture device of choice : ${future.value} \n\nA happy Customer. `;
      
      link.href = `mailto:venura.20221890@iit.ac.lk?subject=${encodeURIComponent("The CookBook Survey")}&body=${encodeURIComponent(body)}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
        e.preventDefault();
    }
})