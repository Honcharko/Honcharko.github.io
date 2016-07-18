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
            if(min < 10){min ='0' + min;}
            var hours = Math.floor(count / 360000) % 24;
            if(hours < 10){hours ='0' + hours;}
            var str = hours + ':' + min + ':' + sec + ':' + msec;
            countDisp.innerHTML = str;
        },10);
        lap = true;
    }
    start.innerHTML = 'Pause';
    if(start.innerHTML = 'Pause'){
        start.removeEventListener('click', startClick);
        var pause = document.getElementById('start');
        pause.addEventListener('click', pauseClick);
        pause.style.backgroundColor = '#3b83bc';
    }
}

function pauseClick(){
    clearInterval(timerId);
    lap = false;
    start.innerHTML = 'Cont...';
    if(start.innerHTML = 'Cont...'){
      var cont = document.getElementById('start');
        cont.style.backgroundColor = 'rgb(28, 184, 65)';
        cont.addEventListener('click', startClick);
    }
}

function clearClick(){
    clearInterval(timerId);
    lap = false;
    count = 0;
    countDisp.innerHTML = '<span class="time">00:00:00</span><span class="clock">0</span>';
    start.innerHTML = 'Start';
    start.addEventListener('click', startClick);

}
