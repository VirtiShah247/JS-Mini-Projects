// minute=document.getElementById("min").innerHTML;
// second=document.getElementById("sec").innerHTML;
timerOn=0;
counter=1;

function start()
{
    if(!timerOn)
    {
        timerOn=1;
        // counter=1;
        seconds();
    }
}
function stop() {
    clearInterval(myInterval);
    timerOn=0;
  }
function seconds()
{
    const d1 = new Date();
    myInterval=setInterval(myTimer, 100);

    function myTimer() {
    // document.getElementById("sec").innerHTML =Math.round((Date.now()-d1.getTime())/1000);
    if(counter>0 && counter<=9)
    {
        counter=0+String(counter);
        // console.log(counter);
    }
    if(counter===100)
    {
        // clearInterval(myInterval);
        minute=document.getElementById("min").innerHTML;
        minute=parseInt(minute)+1;
        if(minute>0 && minute<=9)
        {
            minute=0+String(minute);
            // console.log(counter);
        }
        document.getElementById("min").innerHTML=minute;
        counter="01";
        // start();
    }
    document.getElementById("sec").innerHTML =counter;
    counter++;

    // second=parseInt(second);
    // document.getElementById("sec").innerHTML=second+1innerHTML;
    // second=document.getElementById("sec").innerHTML;

    }
}
function reset()
{
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    counter=1;
    stop();
}