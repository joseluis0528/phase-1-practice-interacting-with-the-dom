document.addEventListener('DOMContentLoaded', () => {
    startCounter();
    handleMinusBtn();
    handlePlusBtn();
    handleHeartBtn();
    handlePauseBtn();
    handleSubmit();
})

let setIntervalID;
let counter = 0;
const getCounter = document.querySelector('#counter');
const getPauseBtn = document.querySelector('#pause');
const getMinusBtn = document.querySelector('#minus');
const getPlusBtn = document.querySelector('#plus');
const getHeartBtn = document.querySelector('#heart');
const getForm = document.querySelector('#comment-form');

function startCounter() {
    setIntervalID = setInterval(() => {
        counter += 1;
        getCounter.textContent = counter;
    }, 1000);
}

function handlePauseBtn() {
    getPauseBtn.addEventListener('click', () => {
        if(getPauseBtn.textContent === ' pause ') {
            clearInterval(setIntervalID);
            getMinusBtn.disabled = true;
            getPlusBtn.disabled = true;
            getHeartBtn.disabled = true;
            getPauseBtn.textContent = ' resume ';
        } else if (getPauseBtn.textContent === ' resume ') {
            counter = parseInt(getCounter.textContent);
            startCounter();
            getMinusBtn.disabled = false;
            getPlusBtn.disabled = false;
            getHeartBtn.disabled = false;
            getPauseBtn.textContent = ' pause ';
        }
    })
}

function handleMinusBtn() {
    getMinusBtn.addEventListener('click', () => {
        counter = parseInt(getCounter.textContent -= 1);
    })
}

function handlePlusBtn() {
    getPlusBtn.addEventListener('click', () => {
        counter = parseInt(getCounter.textContent ++);
    })
}

function handleHeartBtn() {
    getHeartBtn.addEventListener('click', () => {
        const likes = document.querySelector('.likes');
        const li = document.createElement('li');
        li.textContent = `${getCounter.textContent} has been liked.`;
        likes.append(li);
    })
}

function handleSubmit() {
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