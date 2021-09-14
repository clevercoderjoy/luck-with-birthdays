const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const btn = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

function checkLuckyBirthday(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum && dob){
        checkLuck(sum, luckyNumber.value);
    }
    else{
        outputBox.innerText = "Please enter some values in both the fields"
    }
}

function calculateSum(dob){
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i = 0; i <= dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

function checkLuck(sum, luckyNumber){
    if (sum % luckyNumber === 0){
        outputBox.innerText = "Your birthday is lucky";
    }
    else{
        outputBox.innerText = "You are not that good with luck so you will create your own luck";
    }
}

btn.addEventListener("click", checkLuckyBirthday);