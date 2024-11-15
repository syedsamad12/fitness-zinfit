function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
    
    if (isNaN(weight) || isNaN(height)) {
      document.getElementById('bmiResult').innerHTML = "Please enter valid numbers.";
      return;
    }
  
    const bmi = (weight / (height * height)).toFixed(2);
    let bmiCategory = '';
  
    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      bmiCategory = 'Overweight';
    } else {
      bmiCategory = 'Obesity';
    }
  
    document.getElementById('bmiResult').innerHTML = `Your BMI is ${bmi} (${bmiCategory}).`;
  }
  //<!- for login --!>//
  // Get modal elements
const modal = document.getElementById("loginPopup");
const btn = document.getElementById("loginBtn");
const span = document.getElementsByClassName("close")[0];

// Open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Handle form submission
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault(); // Prevent page refresh
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
}

    