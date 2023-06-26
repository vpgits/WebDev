document.addEventListener("DOMContentLoaded", function() {
    switchSlides(1,".slides");
    setInterval(()=>{switchSlides(1,".slides")},4000);


  });

const prevBtn = document.querySelector(".arrow-back");
const nxtBtn = document.querySelector(".arrow-front");

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
    // if (n === 10){
    //   let element  = document.getElementById(".stage-active");

    // }
    slides.forEach((slide, index) => {
      if (index < 3) {
        slide.classList.add("visible");
      } else {
        slide.classList.remove("visible");
      }
    });
}

  
nxtBtn.addEventListener('click', () => switchSlides(1,".slides"));
prevBtn.addEventListener('click', ()=> switchSlides(-1,".slides"));