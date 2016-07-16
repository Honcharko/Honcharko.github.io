var start = document.getElementById('start');

var clear = document.getElementById('clear');



start.addEventListener('click', startClick);

clear.addEventListener('click', clearClick);

var count = 0, timerId, lap = false;

function startClick(){
    if(lap == false){
        timerId = setInterval(function(){
            count++;
            var msec = count % 100;
            var sec = Math.floor(count / 100) % 60;
            if(sec < 10){sec ='0' + sec;}
            var min = Math.floor(count / 6000) % 60;
            var hours = Math.floor(count / 360000) % 24;
            var str = hours + ':' + min + ':' + sec + ':' + msec;
            countDisp.innerHTML = str;
        },10);
        lap = true;
    }
    start.innerHTML = 'Pause';
    start.setAttribute('id', 'pause');
    start.addEventListener('click', pauseClick);
}

function pauseClick(){
    clearInterval(timerId);
    lap = false;
    start.innerHTML = 'Cont...';
    start.setAttribute('id', 'cont');
    cont.addEventListener('click', secondStart);
}
function secondStart() {
    if(lap == false){
        startClick();
        var pause = document.getElementById('Pause');
        start.addEventListener('click', secondPause);
    }
}
function secondPause(){
    clearInterval(timerId);
    lap = false;
    start.innerHTML = 'Cont...';
    start.setAttribute('id', 'cont');
    start.addEventListener('click', secondPause);
}

function clearClick(){
    clearInterval(timerId);
    lap = false;
    count = 0;
    countDisp.innerHTML = count;
}
//test