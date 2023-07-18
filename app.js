
function calculate(){
    let height = +(document.querySelector("#heightInput").value),
        
    weight = +(document.querySelector("#weightInput").value),    
    
    bmi = weight / ((height / 100) ** 2),
    
    result = document.querySelector("#result")

    if(bmi < 18.5){
        result.innerHTML = `Your BMI : ${bmi.toFixed(2)} <br> You have an underweight body weight. Be careful！ `
    }
    else if (bmi < 25){
        result.innerHTML = `Your BMI : ${bmi.toFixed(2)} <br> You have a normal body weight. Good job!`
    }
    else if (bmi < 30){
        result.innerHTML = `Your BMI : ${bmi.toFixed(2)} <br>  You are overweight. It is advisable to focus on a balanced diet and regular exercise.`
    }
    else {
        result.innerHTML = `Your BMI : ${bmi.toFixed(2)} <br> You are obese. Consult with a healthcare professional for personalized advice and support.`
    }
}

let weight = document.querySelector("#weightInput") 
weightSpan = document.querySelector("#weightSpan"),
age = document.querySelector("#ageInput"),
ageSpan = document.querySelector("#ageSpan")

weight.addEventListener("input", () => {
    weightSpan.textContent = weight.value
})

age.addEventListener("input", () => {
    ageSpan.textContent = age.value
})