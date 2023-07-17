function calculate(){
    let height = +(document.querySelector("#heightInput").value)
    
    let weight = +(document.querySelector("#weightInput").value)
    
    let bmi = weight / ((height / 100) ** 2)

    let result = document.querySelector("#result")
    
    if(bmi < 18.5){
        result.innerHTML = `Your BMI : ${bmi.toFixed(2)} \n You have an underweight body weight. Be careful！ `
    }
    else if (bmi < 25){
        result.innerHTML = `Your BMI : ${bmi.toFixed(2)} \n You have a normal body weight. Good job!`
    }
    else if (bmi < 30){
        result.innerHTML = `Your BMI : ${bmi.toFixed(2)} \n You are overweight. It is advisable to focus on a balanced diet and regular exercise.`
    }
    else {
        result.innerHTML = `Your BMI : ${bmi.toFixed(2)} You are obese. Consult with a healthcare professional for personalized advice and support.`
    }
    
     
}