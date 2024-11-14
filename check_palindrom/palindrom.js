const inputBtn = document.querySelector("#check-btn");
const textCont = document.querySelector("#text-input");
const output = document.querySelector("#result");

function displayOutput(iVlaue){
    output.innerHTML = "";
    const p = document.createElement("p");
    p.className = 'user-input';
    const value = iVlaue;
    iVlaue = iVlaue.toLowerCase();
    const reverseValue = iVlaue.split('').reverse().join('');
    if(iVlaue === reverseValue){
        p.textContent = `${iVlaue} is palindrom.`;
    }
    else{
        p.textContent = `${iVlaue} is not palindrom.`
    }
    output.appendChild(p);
    output.classList.remove("hidden");
}
function checkPalindrom(){
    if(textCont.value){
        displayOutput(textCont.value);
        textCont.value = "";
    }
    else{
        alert("Please enter some value!");
    }
}
inputBtn.addEventListener("click", checkPalindrom);