const password=document.getElementById("password");

const length=document.getElementById("length");

const lengthValue=document.getElementById("lengthValue");

const uppercase=document.getElementById("uppercase");

const lowercase=document.getElementById("lowercase");

const numbers=document.getElementById("numbers");

const symbols=document.getElementById("symbols");

const copyBtn=document.getElementById("copyBtn");

const generateBtn=document.getElementById("generateBtn");

const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const lower="abcdefghijklmnopqrstuvwxyz";

const number="0123456789";

const symbol="!@#$%^&*()_+?><{}[]";

length.oninput=()=>{

    lengthValue.innerText=length.value;

};

function generatePassword(){

    let chars="";

    if(uppercase.checked) chars+=upper;

    if(lowercase.checked) chars+=lower;

    if(numbers.checked) chars+=number;

    if(symbols.checked) chars+=symbol;

    if(chars===""){

        alert("Select at least one option.");

        return;

    }

    let pass="";

    for(let i=0;i<length.value;i++){

        pass+=chars.charAt(Math.floor(Math.random()*chars.length));

    }

    password.value=pass;

}

generateBtn.addEventListener("click",generatePassword);

copyBtn.addEventListener("click",()=>{

    if(password.value==="") return;

    navigator.clipboard.writeText(password.value);

    copyBtn.innerHTML='<i class="fas fa-check"></i>';

    setTimeout(()=>{

        copyBtn.innerHTML='<i class="fas fa-copy"></i>';

    },1500);

});

generatePassword();