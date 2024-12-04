const form = document.getElementById('form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // フォーム送信を阻止

  const sex = document.querySelector('#sex').value;
  const pclass = parseInt(document.querySelector('#pclass').value); 
  
  const prediction = Survival(pclass, sex); 
  displayResult(prediction);
});

function Survival(pclass, sex) {
  if (sex <= 0.5) {  
    if (pclass <= 2.5) { 
      return 1; 
    } else {
      return 0;
    }
  } else {
      return 0;
  }
}

function displayResult(prediction) {
  resultDiv.textContent = prediction ? '生存' : '死亡'; 
}
