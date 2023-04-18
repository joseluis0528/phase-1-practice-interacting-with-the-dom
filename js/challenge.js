const getCounter = document.querySelector('#counter');
let counter = 0;
let setIntervalID = setInterval(() => {
    counter += 1;
    getCounter.textContent = counter;
}, 1000);

const pauseBtn = document.querySelector('#pause');
pauseBtn.addEventListener('click', () => {
    clearInterval(setIntervalID);
    document.querySelector('#minus').disabled = true;
    document.querySelector('#plus').disabled = true;
    document.querySelector('#heart').disabled = true;
    pauseBtn.id = 'resume';
    pauseBtn.textContent = 'resume';

    // document.querySelector('#resume').addEventListener('click', () => {
    //     setIntervalID
    //     document.querySelector('#minus').disabled = false;
    //     document.querySelector('#plus').disabled = false;
    //     document.querySelector('#heart').disabled = false;
    //     pauseBtn.id = ('#pause');
    //     pauseBtn.textContent = 'pause'
    // })
})