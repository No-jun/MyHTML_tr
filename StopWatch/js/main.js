'use strict';

{
    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let startTime;
    let timeoutID;
    let elapsedtime = 0;

    function countUp(){
        const d = new Date(Date.now() - startTime + elapsedtime );
        const m = String(d.getMinutes()).padStart(2,'0');
        const s = String(d.getSeconds()).padStart(2, '0');
        const ms = String(d.getMilliseconds()).padStart(3, '0');
        timer.textContent = `${m}:${s}.${ms}`;

       timeoutID = setTimeout(() =>{
            countUp();
        }, 10);//10msごとに更新
    }

    function setButtunStateInitial(){
        start.classList.remove('inactive');
        stop.classList.add('inactive');
        reset.classList.add('inactive');
    }
    function setButtunStateRunning(){
        start.classList.add('inactive');
        stop.classList.remove('inactive');
        reset.classList.add('inactive');
    }
    function setButtunStateStoped(){
        start.classList.remove('inactive');
        stop.classList.add('inactive');
        reset.classList.remove('inactive');
    }

    setButtunStateInitial();

    start.addEventListener('click',() => {
        if(start.classList.contains('inactive')===true){
            return;
        }
        setButtunStateRunning();
        startTime = Date.now();
        countUp();
    });
    stop.addEventListener('click',() => {
        if(stop.classList.contains('inactive')===true){
            return;
        }
        setButtunStateStoped();
        clearTimeout(timeoutID);
        elapsedtime += Date.now() - startTime;
    });
    reset.addEventListener('click',() => {
        if(reset.classList.contains('inactive')===true){
            return;
        }
        setButtunStateInitial();
        timer.textContent = '00:00.000';
        elapsedtime = 0;
    });

}