let elapseTime;
let startTime;
let interval ;
let isRunning = false;
let resetTime = true;
let difference ;
let time= document.getElementById('time')



function start(){
if(!isRunning){
    startTime = new Date().getTime();
    interval=setInterval(updateTime,1);
    isRunning=true;
    resetTime=false;

}




}
function stop(){
    if(isRunning){
        clearInterval(interval)
        isRunning=false
    }
   
}
function reset(){
    clearInterval(interval);
        isRunning=false;
        resetTime=true;
        time.innerHTML='00 : 00 : 00'

    
}

function updateTime(){
       elapseTime = new Date().getTime()
       if(resetTime){
        difference=0
       }
       else{
       difference = elapseTime-startTime;

       }
       let hours = Math.floor(difference / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    time.innerHTML = hours + ':' + minutes + ':' + seconds;


}