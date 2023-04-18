document.addEventListener('DOMContentLoaded', () => {
    startCounter();
    handleMinusBtn();
    handlePlusBtn();
    handlePauseBtn();
    handleSubmit();
})

let setIntervalID;
let counter = 0;
const getCounter = document.querySelector('#counter');

function startCounter() {
    setIntervalID = setInterval(() => {
        counter ++;
        getCounter.textContent = counter;
    }, 1000);
}

function handlePauseBtn() {
    const pauseBtn = document.querySelector('#pause');
    pauseBtn.addEventListener('click', () => {
        if(pauseBtn.textContent === ' pause ') {
            clearInterval(setIntervalID);
            document.querySelector('#minus').disabled = true;
            document.querySelector('#plus').disabled = true;
            document.querySelector('#heart').disabled = true;
            pauseBtn.textContent = ' resume ';
        } else if (pauseBtn.textContent === ' resume ') {
            counter = parseInt(getCounter.textContent);
            startCounter();
            document.querySelector('#minus').disabled = false;
            document.querySelector('#plus').disabled = false;
            document.querySelector('#heart').disabled = false;
            pauseBtn.textContent = ' pause ';
        }
    })
}

function handleMinusBtn() {
    const minusBtn = document.querySelector('#minus');
    minusBtn.addEventListener('click', () => {
        counter = parseInt(getCounter.textContent -= 1);
    })
}

function handlePlusBtn() {
    const plusBtn = document.querySelector('#plus');
    plusBtn.addEventListener('click', () => {
        counter = parseInt(getCounter.textContent ++);
    })
}

function handleSubmit() {
    let getForm = document.querySelector('#comment-form');
    getForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const commentInput = document.querySelector('input').value;
        const list = document.querySelector('.comments');
        const p = document.createElement('p');
        p.textContent = commentInput;
        list.append(p);
        e.target.reset();
    })
}