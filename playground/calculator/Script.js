const display = document.getElementById("display");

function appendValue(value){

    display.value += value;

}

function clearDisplay(){

    display.value = "";

}

function deleteLast(){

    display.value = display.value.slice(0,-1);

}

function calculate(){

    try{

        display.value = eval(display.value);

    }

    catch{

        display.value = "Error";

        setTimeout(()=>{

            display.value="";

        },1000);

    }

}

document.addEventListener("keydown",(e)=>{

    const allowed="0123456789+-*/.";

    if(allowed.includes(e.key)){

        appendValue(e.key);

    }

    else if(e.key==="Enter"){

        e.preventDefault();

        calculate();

    }

    else if(e.key==="Backspace"){

        deleteLast();

    }

    else if(e.key==="Escape"){

        clearDisplay();

    }

});