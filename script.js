let form = document.getElementById('form');
let play = document.createElement('button');
let play_text = document.createElement('span');
let user = prompt();
let winner = document.getElementById('title');
let result = document.getElementById('game_result');
let userScore = document.getElementById('user');
let computerScore = document.getElementById('computer');

let US = 0;
let CS = 0;
let W = ' ';

document.getElementById('username').innerHTML = user;

play.classList.add('play');
play_text.classList.add('title');
form.appendChild(play);
play.appendChild(play_text);
play_text.innerHTML = 'НУМО ПОГНАЛИ';

play.onclick = () => answer();

function answer() {
    let U = Math.floor(Math.random() * 10);
    let C = Math.floor(Math.random() * 10);
    if (U > C) {
        US++;
        userScore.innerHTML = US;
        W = user;
    }
    else if (C > U) {
        CS++;
        computerScore.innerHTML = CS;
        W = "Комп'ютер";
    }
    else { W = "Нічия)" }
    result.innerHTML = user + " випало: " + U + "<br>Комп'ютеру випало: " + C + "<br>Переміг: " + W;
    if (US == 3 || CS == 3) { result.innerHTML = "Переміг: " + W + "<br>Гру завершено)"; play.disabled = true; play_text.innerHTML = 'а все)'; }
};