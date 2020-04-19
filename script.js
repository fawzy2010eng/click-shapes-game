'use strict'
var start = document.querySelector('.first > button');
var circle = document.querySelector('.circle');
var reset = document.querySelector('.third > button');
var firstdiv = document.querySelector('.first');
var seconddiv = document.querySelector('.second');
var thirddiv = document.querySelector('.third');
var creatingCircletime = 0; 
var score = 0;

function randomNumber(min, max) {  
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}  

function generatecircle(){
    //    generrate random coordinates and color and time of apper
    var top = randomNumber(10,80);
    var left = randomNumber(10,80);
    var d = randomNumber(120,300);
    var array = ['black','green','red','yellow','blue'];
    var color = array[randomNumber(1,array.length-1)];
    var circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.height = `${d}px`;
    circle.style.width = `${d}px`;
    circle.style.left = `${left}%`;
    circle.style.top = `${top}%`;
    circle.style.backgroundColor = `${color}`;
    circle.style.display = 'block';
    circle.addEventListener('click',stopchallenge);    
    seconddiv.appendChild(circle);
}

function startchallenge(){
    seconddiv.innerHTML = '<h3>starting...</h3>'
//    getting the current time
    var d = new Date();
    creatingCircletime = d.getTime();
//    hiding two divs
    firstdiv.style.display = 'none';
    seconddiv.style.display = 'block';
//    generate the random sec to create circle
    var sec = randomNumber(500,3000);
    setTimeout(generatecircle,sec);
    creatingCircletime+=sec;
}





function stopchallenge(){
    seconddiv.style.display = 'none';
    
    var d = new Date();
    var current = d.getTime();
    var result = current-creatingCircletime ;
    
    if(result <= 1000){
        score +=15;
        var h = document.createElement('H4');
        h.textContent = `you won your score${score}`
        document.body.appendChild(h);
        setTimeout(function(){
            h.style.display = 'none';
            startchallenge();
        },2000)
    }else{
        var div = document.createElement('div');
        div.className = 'third';
        
        var btn = document.createElement('button');
        btn.textContent = 'start';
        btn.addEventListener('click',function(){
            seconddiv.style.display = 'block';
            div.style.display = 'none';
        })
        btn.addEventListener('click',startchallenge);
        div.appendChild(btn);
        
        var h = document.createElement('H4');
        h.textContent = ` It took you ${result}`;
        h.innerHTML +=`seconds to click<br>Too Slow! You Lose! Your score was ${score}.<br>Click t`;
        div.appendChild(h);
        score = 0;
        div.style.display = 'block';
        
        document.body.appendChild(div);
    }
}

start.addEventListener('click',startchallenge)

