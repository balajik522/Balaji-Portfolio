// ==============================
// Typing Speed Test
// ==============================

const paragraphs = [
    "JavaScript is one of the most popular programming languages for web development.",
    "Practice every day to improve your typing speed and coding skills.",
    "A good developer writes clean readable and maintainable code.",
    "Consistency is more important than perfection when learning programming.",
    "Spring Boot and React are widely used for building modern web applications."
];

const paragraph = document.getElementById("paragraph");
const input = document.getElementById("input");

const timeTag = document.getElementById("time");
const wpmTag = document.getElementById("wpm");
const cpmTag = document.getElementById("cpm");
const accuracyTag = document.getElementById("accuracy");

const restartBtn = document.getElementById("restartBtn");

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let started = false;

let mistakes = 0;
let typedChars = 0;

function loadParagraph(){

    const random = paragraphs[Math.floor(Math.random()*paragraphs.length)];

    paragraph.innerHTML = "";

    random.split("").forEach(char=>{

        const span=document.createElement("span");

        span.innerText=char;

        paragraph.appendChild(span);

    });

}

loadParagraph();

input.addEventListener("input",typing);

function typing(){

    const chars=paragraph.querySelectorAll("span");

    const typed=input.value.split("");

    if(!started){

        timer=setInterval(initTimer,1000);

        started=true;

    }

    mistakes=0;

    typedChars=typed.length;

    chars.forEach((span,index)=>{

        if(typed[index]==null){

            span.classList.remove("correct","incorrect");

        }

        else if(typed[index]===span.innerText){

            span.classList.add("correct");

            span.classList.remove("incorrect");

        }

        else{

            span.classList.add("incorrect");

            span.classList.remove("correct");

            mistakes++;

        }

    });

    const correct=typedChars-mistakes;

    let wpm=Math.round(((correct/5)/(maxTime-timeLeft))*60);

    if(!isFinite(wpm)||wpm<0) wpm=0;

    let cpm=correct;

    let accuracy=typedChars===0
        ?100
        :Math.round((correct/typedChars)*100);

    wpmTag.innerText=wpm;
    cpmTag.innerText=cpm;
    accuracyTag.innerText=accuracy+"%";

}

function initTimer(){

    if(timeLeft>0){

        timeLeft--;

        timeTag.innerText=timeLeft;

    }

    else{

        clearInterval(timer);

        input.disabled=true;

    }

}

restartBtn.addEventListener("click",()=>{

    clearInterval(timer);

    started=false;

    timeLeft=maxTime;

    mistakes=0;

    typedChars=0;

    input.value="";

    input.disabled=false;

    timeTag.innerText=maxTime;
    wpmTag.innerText="0";
    cpmTag.innerText="0";
    accuracyTag.innerText="100%";

    loadParagraph();

    input.focus();

});

input.focus();