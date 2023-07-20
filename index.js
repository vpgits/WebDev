//  Student Role: student_2
// Student Name: M.B.V.Pesanjith 

//switches slides on the slideshow
document.addEventListener("DOMContentLoaded", function() {
    switchSlides(1,".slides");
    setInterval(()=>{switchSlides(1,".slides")},4000);
  });



const prevBtn = document.querySelector(".arrow-back");
const nxtBtn = document.querySelector(".arrow-front");


//custom function to switch slides
function switchSlides(n, classname) {
  const slides = document.querySelectorAll(classname);

    if (n === 1) {
      let temp = slides[slides.length - 1];
      let parentElement = slides[0].parentNode;
      
      for (let i = slides.length - 1; i > 0; i--) {
        let referenceNode = slides[i];
        let newNode = slides[i - 1];
        parentElement.insertBefore(newNode, referenceNode);
      }
      parentElement.insertBefore(temp, slides[0]);
    }

    if (n === -1) {
        let temp = slides[0];
        let parentElement = slides[0].parentNode;
    
        for (let i = 0; i < slides.length - 1; i++) {
          let referenceNode = slides[slides.length - 1];
          let newNode = slides[i];
          parentElement.insertBefore(newNode, referenceNode);
        }
    
        parentElement.insertBefore(temp, slides[slides.length]);
      }

      dynamicSlides();
    // if (n === 10){
    //   let element  = document.getElementById(".stage-active");

    // }

}

//custom function to change visible number of slides
function dynamicSlides(){
  const slides = document.querySelectorAll(".slides");

  function addVisibility(n, index, slide){
    if (index < n) {
      slide.classList.add("visible");
    } else {
      slide.classList.remove("visible");
    }
  }

  slides.forEach((slide, index) => {
  if (window.innerWidth<850){
    addVisibility(1, index, slide);
  } else if (window.innerWidth<1215){
    addVisibility(2, index, slide);
  } else{
    console.log("Im here")
    addVisibility(3,index, slide);

  }
  });
}

//event listeners for manual slide change
nxtBtn.addEventListener('click', () => switchSlides(1,".slides"));
prevBtn.addEventListener('click', ()=> switchSlides(-1,".slides"));


