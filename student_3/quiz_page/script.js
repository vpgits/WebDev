// Student Name: Ayyoob Ajward
// Student Number: 03

const startBtn = document.getElementById("start");
const nxtBtn = document.getElementById("next");
const welcomeCard = document.getElementById("welcomeCard");
const questionCard = document.getElementById("questionCard");
const questions = [
    "Which fruit is known for its creamy texture and high healthy fat content?",
    "Which cuisine is famous for its use of a variety of spices and herbs?",
    "What is the main ingredient in traditional hummus?",
    "Which type of pasta is shaped like small rice grains?",
    "What is the primary ingredient in a classic Greek moussaka dish?",
    "Which dairy product is used to make traditional Swiss cheese?",
    "What is the key ingredient in the popular Indian dish, Chicken Tikka Masala?",
    "Which spice is used to add a warm, sweet flavor in dishes like cinnamon rolls?",
    "What is the main component of traditional Japanese miso soup?",
    "What type of seafood is often used in a classic New England clam chowder?"
];

const answers=[
    ["Orange","Banana","Avocado","Watermelon"],
    ["Italian","Chinese","Mexican","Japanese"],
    ["Chickpeas","Lentils","Black beans","Kidney beans"],
    ["Penne","Fusilli","Orzo","Linguine"],
    ["Eggplant","Potatoes","Zucchini","Cauliflower"],
    ["Cow's milk","Goat's milk"," Sheep's milk","Buffalo's milk"],
    ["Lamb","Chicken","Beef","Pork"],
    ["Turmeric","Cumin","Cinnamon","Paprika"],
    ["Tofu","Seaweed","Rice","Miso paste"],
    ["Shrimp","Lobster","Crab","Clams"],
];

const correct = [
    "3",
    "3",
    "1",
    "3",
    "1",
    "1",
    "2",
    "3",
    "4",
    "4"
];
 
const counterLim = questions.length;
const parent = document.getElementById("container");

startBtn.addEventListener('click', ()=>{
    welcomeCard.style.display="none";
    questionCard.style.display="flex";
    flipCards()
    timer();
})

function timer(){
    const timer = document.getElementById("timer");
    timer.innerText = "2:00";
    if (timer.innerText != "0:00"){
        timer.style.color="green";
    } else {
        timer.style.color="red";
    }
    let tick = setInterval(()=>{
        if (timer.innerText.slice(2,5) == "00"||timer.innerText.slice(2,5) == "0"){
            if(timer.innerText.slice(0,1)=="2"){
                timer.innerText="1:59";
            }else if (timer.innerText.slice(0,1)=="1"){
                timer.innerText="0:59";
            }else{
                timer.style.color="red";
                scorecard()
                clearInterval(tick);
            }
        } else {
            let temp = timer.innerText.toString();
            timer.innerText = temp.slice(0,2)+String(Number(temp.slice(2,4))-1);
        }
        },1000);
}

function handleTime(time){
    time="hi"
    if (time.slice(3,6) == "00"){
        if(time.slice(0,2)=="02"){
            time="01:59";
        }else{
            time="00:59";
        }
    } else {
        time = time.slice(0,3)+String(Number(time.slice(3,5))-1);
    }
}

let counter=0;
let mark=0;
let isCounterOver=false;
function flipCards(){
    if(counter<counterLim){
        console.log("hi");
        const question = document.getElementById("question");
        const answersList = document.querySelectorAll(".answer");
        console.log(answersList)
        question.innerText = questions[counter];
        for (let answerCount=0; answerCount<4;answerCount++){
            const element = answersList[answerCount];
            element.querySelector("label").innerText = answers[counter][answerCount];
        }
        counter++;
    } else{
        isCounterOver=true;
    }
}

let choosenAnswer;
function checkAnswer(){
    const answersList = document.querySelectorAll(".answer");
    for (let i=0; i<4;i++){
        const element = answersList[i];
        if(element.querySelector("input").checked){
            console.log(element.querySelector("input"))
             choosenAnswer = element.querySelector("input").value;
            console.log(choosenAnswer)
            console.log(correct[counter])
            if(choosenAnswer == correct[counter-1]){
                mark++;
            }
            flipCards()
        }
    }
    if (choosenAnswer == null){
        alert("Please enter an answer")
    }
}

function scorecard(){
    const scorecard = document.getElementById("scoreCard");
    questionCard.style.display="none";
    scorecard.style.display="block";
    scorecard.innerHTML+=`<h2>You got ${mark*10} Marks</h2><br>You got ${mark} questions right <p style="font-size:25px">🎖️<p>`
}


nxtBtn.addEventListener('click',()=>{
    if(isCounterOver){
        scorecard()
    }
})