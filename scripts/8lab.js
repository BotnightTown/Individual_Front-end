const userName = document.getElementById('userName')
const inputName = document.getElementById("inputName");
const userNum = document.getElementById("userNum");
const computerNum = document.getElementById('computerNum');
const generateBtn = document.getElementById("generateBtn");
const userScoreOutput = document.getElementById("userScore");
const computerScoreOutput = document.getElementById('computerScore');
const resultDiv = document.getElementById("result");
const modal = document.getElementById('modal');
const modalContent = document.getElementById("modal-content");

let userScore = 0;
let computerScore = 0;

generateBtn.addEventListener("click", function(){
  generateBtn.disabled = true;
  setTimeout(function() {
    generateBtn.disabled = false;
  }, 1000);

  let randUserNum = Math.ceil(Math.random() * 6);
  let randComputerNum = Math.ceil(Math.random() * 6);

  setTimeout(function(){
    userNum.innerHTML = randUserNum;
    computerNum.innerHTML = randComputerNum;
    
    if (randUserNum > randComputerNum){
      userScoreOutput.value = ++userScore;
    } 
    if (randUserNum < randComputerNum){
      computerScoreOutput.value = ++computerScore;
    }
    if(userScore === 3){
      resultDiv.innerHTML = "Ви перемогли!"
      generateBtn.disabled = true;
    }
    if(computerScore === 3) {
      resultDiv.innerHTML = "Комп'ютер переміг!"
      generateBtn.disabled = true;
    } 
    },1000)
});

document.addEventListener('DOMContentLoaded', function() {
  modal.style.display = 'block';
});

const closeModal = () => {
  modal.classList.add('hidden'); 
  modalContent.classList.add('hidden'); 
  setTimeout(()=>{modal.remove()}, 1000);
  userName.textContent = inputName.value;
  if(!inputName.value || text.trim() === ""){
    userName.textContent = "Федько"
  }
}

document.getElementById('closeButton').addEventListener('click', function() {
  closeModal();
});

modal.addEventListener('click', function(event){
  if(!modalContent.contains(event.target)){
    closeModal();
  }
})