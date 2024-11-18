const days = document.getElementById('day');
const hrs = document.getElementById('hrs');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

const currentYear = new Date().getFullYear();

const newYear = new Date(`1 Jan ${currentYear + 1} 00:00:00`);

function counter(){
    const todayDate = Date.now();
    const gap = newYear - todayDate;
    const d = Math.floor(gap / 1000 / 60 / 60 / 24);
    const h = Math.floor((gap / 1000 / 60) % 24);
    const m = Math.floor((gap / 1000 / 60) % 60);
    const s = Math.floor((gap / 1000) % 60);

days.innerHTML = d;
hrs.innerHTML = h;
min.innerHTML = m;
sec.innerHTML = s;

} setInterval(counter, 1000);