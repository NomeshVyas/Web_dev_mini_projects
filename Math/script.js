const opction1 = document.getElementById('opction1');
const opction2 = document.getElementById('opction2');
const opction3 = document.getElementById('opction3');
const qusBox = document.getElementsByClassName('qus')[0];
const qus = document.getElementById('qus');
const nav = document.getElementsByTagName('ul')[0];
const navToggler = document.getElementsByClassName('fa-bars')[0];
const wronge = document.getElementById('wronge');
const wrongeBox = document.getElementById('wronge-box');
const tryAgain = document.getElementById('tryAgain');
let answer = 0;

function generateEq() {
    let num1 = Math.floor(Math.random()*20);
    let num2 = Math.floor(Math.random()*20);
    let dummyAns1 = Math.floor(Math.random()*30);
    let dummyAns2 = Math.floor(Math.random()*30);
    let switchAnswers = [];
    var sign = document.getElementById('sign');
    if(sign.innerHTML == `<i class="fa-solid fa-plus" aria-hidden="true"></i>`){
        answer = num1+num2; 
    }
    if(sign.innerHTML == `<i class="fa-solid fa-minus" aria-hidden="true"></i>`){
        answer = num1-num2; 
    }
    if(sign.innerHTML == `<i class="fa-solid fa-xmark" aria-hidden="true"></i>`){
        num1 = Math.floor(Math.random()*10);
        num2 = Math.floor(Math.random()*15);
        answer = num1*num2; 
        dummyAns1 = Math.floor(Math.random()*80);
    }
    if(sign.innerHTML == `<i class="fa-solid fa-divide" aria-hidden="true"></i>`){
        answer = num1/num2;
        if(!Number.isInteger(answer)){answer = answer.toFixed(2);}
        dummyAns1 = (Math.random()*7).toFixed(2); 
    }
    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;
    
    let allAnswers = [answer, dummyAns1, dummyAns2];
    for(i = allAnswers.length; i--;){
        switchAnswers.push(allAnswers.splice(Math.floor(Math.random()*(i+1)), 1)[0])
    }   
    opction1.innerHTML = switchAnswers[0];
    opction2.innerHTML = switchAnswers[1];
    opction3.innerHTML = switchAnswers[2];
}

navToggler.addEventListener('click', ()=>{
    nav.classList.toggle('active');
})

tryAgain.addEventListener('click', ()=>{
    wrongeBox.style.display = 'none';
        qus.style.display = 'flex';
    generateEq()
})

opction1.addEventListener('click', ()=>{
    if(opction1.innerHTML == answer){
        generateEq();
    }else{
        qus.style.display = 'none';
        wrongeBox.style.display = 'block';
    }
})
opction2.addEventListener('click', ()=>{
    if(opction2.innerHTML == answer){
        generateEq();
    }else{
        qus.style.display = 'none';
        wrongeBox.style.display = 'block';
    }
})
opction3.addEventListener('click', ()=>{
    if(opction3.innerHTML == answer){
        generateEq();
    }else{
        qusBox.style.display = 'none';
        wrongeBox.style.display = 'block';
    }
})

generateEq()