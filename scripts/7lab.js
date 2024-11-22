const ballGame = document.createElement('div');
const inputRequest = document.createElement('input');
const ball = document.createElement('div');
const submitBtn = document.createElement('button');
const main = document.createElement('main');

ballGame.id = 'ballGame';
inputRequest.id = "inputRequest";
ball.id = "ball";
submitBtn.id = 'submit';
submitBtn.type = 'submit';

submitBtn.textContent = 'Підтвердити';

document.body.appendChild(main);
main.appendChild(ballGame);
ballGame.appendChild(inputRequest);
ballGame.appendChild(ball);
ballGame.appendChild(submitBtn);

submitBtn.addEventListener('click', randBall)

function randBall(){
  let randNum = Math.floor(Math.random() * 5);
  switch (randNum){
    case 0:
      ball.innerHTML = '<p>Так</p>';
      break;
    case 1:
      ball.innerHTML = '<p>Ні</p>';
      break;
    case 2:
      ball.innerHTML = '<p>Можливо</p>';
      break;
    case 3:
      ball.innerHTML = '<p>Все у твоїх руках</p>';
      break;
    case 4:
      ball.innerHTML = '<p>Не варто</p>';
      break;
    default:
      ball.innerHTML = '<p>Помилка</p>';
  }
}