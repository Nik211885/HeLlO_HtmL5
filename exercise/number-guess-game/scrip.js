const btnGuess = document.querySelector('.send');
const yourPick =  document.querySelector('#your-pick');
const countPick = document.querySelector('.count-pick');
const btnRestart = document.querySelector('.restart');
const predictInAdvance = document.querySelector('.predict-in-advance');
const notifyGuess = document.querySelector('.notify-guess');
const contanerGuess = document.querySelector('.contaner-guess')
const notify = document.querySelector('.notify');
const count = document.querySelector('.count');
const form = document.querySelector('#form');

let numberRandom = Math.round(Math.random() * 100);
let counT = 10;
let text = '';

btnGuess.addEventListener('click',()=>{
    const numberYourPick = (Number)(yourPick.value);
    if(numberYourPick === numberRandom){
        yourPick.setAttribute('disabled','true');
        countPick.classList.add('hidden');
        notifyGuess.classList.add('hidden');
        predictInAdvance.classList.add('hidden');
        predictInAdvance.classList.remove('flex');
        notify.style.backgroundColor = 'green';
        btnGuess.setAttribute('disabled','true');
        btnRestart.classList.remove('hidden');
        notify.innerHTML='Congratulations! You got it right!';
        notify.classList.remove('hidden');
    }
    else if(numberYourPick > numberRandom){
        
        counT -=1;
        text += ` <span>${numberYourPick}</span>`
        notifyGuess.innerHTML = 'Last guess was too high!';
        contanerGuess.innerHTML = text;
        count.innerHTML = counT;
        notify.innerHTML='Wrong!';
        notify.style.backgroundColor = 'red';


        btnRestart.classList.add('hidden');
        predictInAdvance.classList.add('flex');

        notify.classList.remove('hidden');
        notifyGuess.classList.remove('hidden');
        contanerGuess.classList.remove('hidden');
        predictInAdvance.classList.remove('hidden');
        countPick.classList.remove('hidden');
    }
    else{
        counT -=1;
        text += ` <span>${numberYourPick}</span>`
        notifyGuess.innerHTML = 'Last guess was too low!';
        contanerGuess.innerHTML = text;
        count.innerHTML = counT;
        notify.innerHTML='Wrong!';
        notify.style.backgroundColor = 'red';


        btnRestart.classList.add('hidden');
        predictInAdvance.classList.add('flex');

        notify.classList.remove('hidden');
        notifyGuess.classList.remove('hidden');
        contanerGuess.classList.remove('hidden');
        predictInAdvance.classList.remove('hidden');
        countPick.classList.remove('hidden');
    }
    if(counT == 0){
        notify.innerHTML='!!!GAME OVER!!!';
        btnGuess.setAttribute('disabled','true');
        yourPick.setAttribute('disabled','true');
        notifyGuess.classList.add('hidden');

        btnRestart.classList.remove('hidden');
    }
    form.reset();

});

btnRestart.addEventListener('click',()=>{
    counT = 10;
    text = '';
    numberRandom = Math.round(Math.random() * 100);
    btnRestart.classList.add('hidden');
    btnGuess.removeAttribute('disabled');
    yourPick.removeAttribute('disabled');
    notify.classList.add('hidden');
    predictInAdvance.classList.add('hidden')
    countPick.classList.add('hidden');
    contanerGuess.classList.add('hidden');
    predictInAdvance.classList.remove('flex');
})