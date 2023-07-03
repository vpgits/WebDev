function color(value){
    document.body.style.backgroundColor=value;
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

document.querySelector('contain').addEventListener('click',function(e){
    document.querySelector('.boxs').classList.toggle('boxs-active');
    document.querySelector('.contain').classList.toggle('contain-active');
})
