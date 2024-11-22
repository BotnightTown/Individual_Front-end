const message = document.getElementById('message')
const reel1 = document.getElementById('reel1');
const reel2 = document.getElementById('reel2');
const reel3 = document.getElementById('reel3');
const spinBtn = document.getElementById('spinBtn');
const reels = document.querySelectorAll('.reel')
const reelInside = document.getElementsByClassName('reelInside')

document.getElementById('spinBtn').addEventListener('click', ()=>{
  resetReels1();
  createSpins(); 
  spinReels();
});

// const symbols = ['🍒'];
// const symbols = ['🍒','🍋'];
const symbols = ['🍒', '🍋', '🔔', '🍉', '⭐', '7️⃣'];
//const symbols = ['1', '2', '3', '4', '5', '6']; // Тестовий масив

function spinReel(){
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinMultipleReels(count) {
  const results = [];
  for (let i = 0; i < count; i++) {
    results.push(spinReel());
  }
  return results;
}


  const symbolElement = document.createElement('div');
  reel1.appendChild(symbolElement);
  symbolElement.textContent = symbols[0];
  const symbolHeight = symbolElement.offsetHeight;
  reel1.removeChild(symbolElement);
  reels.forEach(reel => {
    reel.style.height = symbolHeight * 3 - 20 + 'px';
  });

  let spins1 = spinMultipleReels(30);
  let spins2 = spinMultipleReels(40);
  let spins3 = spinMultipleReels(50);
  spins1.forEach(symbol => {
    const symbolElement = document.createElement('div');
    symbolElement.textContent = symbol;
    reel1.appendChild(symbolElement);
  });

  spins2.forEach(symbol => {
    const symbolElement = document.createElement('div');
    symbolElement.textContent = symbol;
    reel2.appendChild(symbolElement);
  });

  spins3.forEach(symbol => {
    const symbolElement = document.createElement('div');
    symbolElement.textContent = symbol;
    reel3.appendChild(symbolElement);
  });

function createSpins(){
  spins1 = spinMultipleReels(30);
  spins2 = spinMultipleReels(40);
  spins3 = spinMultipleReels(50);
  spins1.forEach(symbol => {
    const symbolElement = document.createElement('div');
    symbolElement.textContent = symbol;
    reel1.appendChild(symbolElement);
  });

  spins2.forEach(symbol => {
    const symbolElement = document.createElement('div');
    symbolElement.textContent = symbol;
    reel2.appendChild(symbolElement);
  });

  spins3.forEach(symbol => {
    const symbolElement = document.createElement('div');
    symbolElement.textContent = symbol;
    reel3.appendChild(symbolElement);
  });
}

function resetReels1() {

  reel1.style.transform = "translateY(0px)"
  reel2.style.transform = "translateY(0px)"
  reel3.style.transform = "translateY(0px)"
  reel1.style.transition = 'none';
  reel2.style.transition = 'none';
  reel3.style.transition = 'none';
  reel1.innerHTML = '';
  reel2.innerHTML = '';
  reel3.innerHTML = '';

  message.innerHTML = "";
}


function spinReels() {
  spinBtn.disabled = true;
  message.innerHTML = ""

  let result1, result2, result3;

  reel1.style.transform = `translateY(${parseInt(symbolHeight*spins1.length - (symbolHeight*2.6))}px)`
  reel2.style.transform = `translateY(${parseInt(symbolHeight*spins2.length - (symbolHeight*2.6))}px)`
  reel3.style.transform = `translateY(${parseInt(symbolHeight*spins3.length - (symbolHeight*2.6))}px)`

  result1 = spins1[1];
  result2 = spins2[1];
  result3 = spins3[1];
  
  setTimeout(() => {
    checkWin(result1, result2, result3); 
    spinBtn.disabled = false;
    console.log(spins1[1], spins2[1], spins3[1]);
  }, 4000);

    reel1.style.transition = 'transform 4s ease-in-out';
    reel2.style.transition = 'transform 4s ease-in-out';
    reel3.style.transition = 'transform 4s ease-in-out';
}

function checkWin(result1, result2, result3) {
  if (result1 === result2 && result2 === result3) {
    message.innerHTML = "Ви виграли!"
  } else {
    message.innerHTML = "Ви програли"
  }
}
