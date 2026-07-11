    const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");
const rgbCode = document.getElementById("rgbCode");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

function generateColor(){

    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    const rgb = `rgb(${r}, ${g}, ${b})`;

    const hex = "#" +
        [r,g,b]
        .map(x=>x.toString(16).padStart(2,"0"))
        .join("")
        .toUpperCase();

    colorBox.style.background = rgb;

    hexCode.innerText = hex;

    rgbCode.innerText = rgb;

}

generateBtn.addEventListener("click",generateColor);

copyBtn.addEventListener("click",()=>{

    navigator.clipboard.writeText(hexCode.innerText);

    copyBtn.innerHTML='<i class="fas fa-check"></i> Copied';

    setTimeout(()=>{

        copyBtn.innerHTML='<i class="fas fa-copy"></i> Copy HEX';

    },1500);

});

generateColor();