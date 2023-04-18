const getCounter = document.querySelector('#counter');
let counter = 0;
setInterval(() => {
    counter += 1;
    getCounter.textContent = counter
}, 1000);