let min = 00;
let sec = 00;
let miliSec = 00;

var getMin = document.getElementById('min');
var getSec = document.getElementById('sec');
var getMilisec = document.getElementById('milisec');
var startBtn = document.getElementById('start-btn');
var stopBtn = document.getElementById('stop-btn');
var resetBtn = document.getElementById('reset-btn');
var lapBtn = document.getElementById('lap-btn')
var ul = document.getElementById('list')
let interval;
startBtn.addEventListener('click', ()=>{
    interval = setInterval(startTimer, 10);
    startBtn.style.display = 'none';
    lapBtn.style.display = 'inline-block';
    lapBtn.style.opacity = '1';
    resetBtn.style.opacity = '1';
    stopBtn.style.display = 'inline-block';
    
})

stopBtn.addEventListener('click', ()=>{
    clearInterval(interval);
    stopBtn.style.display = 'none';
    startBtn.style.display = 'inline-block';
})

resetBtn.addEventListener('click', ()=>{
    clearInterval(interval);
    miliSec = 0;
    sec = 0;
    min = 0;
    getMilisec.innerHTML = '0' + miliSec;
    getSec.innerHTML = '0' + sec;
    getMin.innerHTML = '0' + min;
    
    startBtn.style.display = 'inline-block';
    stopBtn.style.display = 'none';
    lapBtn.style.opacity = '0';
    resetBtn.style.opacity = '0';
    
    ul.innerHTML = '';
})

function startTimer() {
    miliSec++;
    if(miliSec < 10){
        getMilisec.innerHTML = '0' + miliSec;
    }else{
        getMilisec.innerHTML = miliSec;
    }
    
    if(miliSec > 99){
        sec++;
        miliSec = 0;
        getSec.innerHTML = '0' + sec;
        getMilisec.innerHTML = '0' + miliSec;
    }
    if(sec > 9){
        getSec.innerHTML = sec;
    }
    if(sec > 59){
        min++;
        sec = 0;
        getMin.innerHTML = '0' + min;
        getSec.innerHTML = '0' + sec;
    }
    if(min > 9){
        getMin.innerHTML = min;
    }
   
}

lapBtn.addEventListener('click', ()=>{
    let li = document.createElement('li')
    li.innerHTML = `${min} : ${sec}.${miliSec}`;
    if(miliSec !=0 && sec !=0){ul.appendChild(li)}
})   