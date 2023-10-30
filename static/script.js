// class BMICalculator {
//     constructor() {
//         this.calculateBtn = document.getElementById("calculateBtn");
//         this.calculateBtn.addEventListener("click", this.calculateBMI.bind(this));
//     }

//     calculateBMI() {
//         const weightInput = document.getElementById("weight");
//         const heightInput = document.getElementById("height");
//         const resultDiv = document.getElementById("result");

//         const weight = weightInput.value;
//         const height = heightInput.value / 100; // convert cm to meters

//         if (weight > 0 && height > 0) {
//             const bmi = weight / (height * height);
//             const roundedBMI = bmi.toFixed(2);
//             resultDiv.innerText = `Your BMI is: ${roundedBMI}`;
//         } else {
//             resultDiv.innerText = "Please enter valid values for weight and height.";
//         }
//     }
// }

// const bmiCalculator = new BMICalculator();




document.getElementById("worryForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the selected values from the answers
    const q1 = document.querySelector('input[name="q1"]:checked').value;
    const q2 = document.querySelector('input[name="q2"]:checked').value;
    const q3 = document.querySelector('input[name="q3"]:checked').value;
    const q4 = document.querySelector('input[name="q4"]:checked').value;
    const q5 = document.querySelector('input[name="q5"]:checked').value;

    // Calculatethe result
    const totalScore = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5);

    // Hide the form and show the result
    const form = document.getElementById("worryForm");
    const result = document.getElementById("result");
    const totalScoreElement = document.getElementById("totalScore");

    form.classList.add("hidden");
    result.classList.remove("hidden");
    totalScoreElement.textContent = totalScore;

    // Provide advice based on the total score
    let advice = "";
    if (totalScore >= 8) {
        advice = "Your worry level is high. It's important to seek support from a mental health professional.";
    } else if (totalScore >= 4) {
        advice = "Your worry level is moderate. Try to implement relaxation techniques and stress management strategies.";
    } else {
        advice = "Your worry level is low. Keep up the good work!";
    }
    const adviceElement = document.createElement("p");
    adviceElement.textContent = advice;
    result.appendChild(adviceElement);
});