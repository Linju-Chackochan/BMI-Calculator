var calculate = document.getElementById("Calc");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var resultDiv = document.getElementById("resultDiv");
calculate.addEventListener("click", () => {
    // var bmi = (parseFloat(weight.value) / (parseFloat(height.value / 100) ** 2)).toFixed(2);
    var bmi = ((weight.value) / ((height.value / 100) ** 2)).toFixed(1);
    if (bmi < 18.5)
        resultDiv.textContent = `BMI is ${bmi} and person is Underweight`;
    else if (bmi >= 18.5 && bmi <= 24.9)
        resultDiv.textContent = `BMI is ${bmi} and person is Normal`;
    else if (bmi >= 25 && bmi <= 29.9)
        resultDiv.textContent = `BMI is ${bmi} and person is Overweight`;
    else
        resultDiv.textContent = `BMI is ${bmi} and person has Obesity`;

});

