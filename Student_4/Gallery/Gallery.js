function color(value){
    document.body.style.backgroundColor=value;
    var fontColor;
    if (isDarkColor(value)) {
        fontColor = '#FFFFFF';
    } else {
        fontColor = '#000000'; 
    }
    document.body.style.color = fontColor;
}

function isDarkColor(color) {
    if (color.startsWith('#')) {
        color = color.substring(1);
    }

    const r = parseInt(color.substring(0, 2), 16);
    const g = parseInt(color.substring(2, 4), 16);
    const b = parseInt(color.substring(4, 6), 16);
    const brightness = (r + g + b) / 3;

    return brightness < 128;
}

function getNewColor(){
    var symbols,color;
    symbols = "0123456789ABCDEF";

    color = "#";
    for(var i = 0;i<6;i++){
        color = color + symbols[Math.floor(Math.random() * 16)];
    }
    document.body.style.background = color;
}

//document.querySelector('contain').addEventListener('click',function(e){
    document.querySelector('.boxs').classList.toggle('boxs-active');
    document.querySelector('.contain').classList.toggle('contain-active');
//})

function scrolll(){
    var left = document.querySelector(".scroll-images");
    left.scrollBy(-300,0)
    
}
function scrollr(){
    var right = document.querySelector(".scroll-images");
    right.scrollBy(300,0)
}

function scroll1(){
    var left = document.querySelector(".scroll-img");
    left.scrollBy(-300,0)
    
}
function scroll2(){
    var right = document.querySelector(".scroll-img");
    right.scrollBy(300,0)
}

function toggleButtons() {
    var buttonContainer = document.getElementById("buttonContainer");
    buttonContainer.classList.toggle("show");
  }


 
