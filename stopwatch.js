let minutes=0
let seconds=0
let tens=0
const getMinutes=document.querySelector(".minutes")
const getSeconds=document.querySelector(".seconds")
const getTens=document.querySelector(".tens")
const start=document.querySelector(".btn-start")
const buttons=document.querySelector(".buttons")
// const stop=document.querySelector(".btn-pause")
const reset=document.querySelector(".btn-reset")
let interval;
let resMinutes;
let resSeconds;
let resTens;
start.addEventListener("click",function(){
   if(start.innerHTML==='Start'){
    start.innerHTML="Pause"
   interval=setInterval(intfunct,10)


   }  
   else if(start.innerHTML==="Pause"){
    start.innerHTML="Resume"
    clearInterval(interval)
    

   }
   else if(start.innerHTML==="Resume"){
    start.innerHTML="Pause"
    resMinutes=getMinutes.innerHTML
    resSeconds=getSeconds.innerHTML
    resTens=getTens.innerHTML
   interval=setInterval(funct,10)
   }


})
// pause.addEventListener("click",function(){
    // clearInterval(interval)

// })
reset.addEventListener("click",function(){
clearInterval(interval)
minutes="00"
getMinutes.innerHTML=minutes
seconds=0
getSeconds.innerHTML="0"+seconds
tens="00"
getTens.innerHTML=tens
start.innerHTML="Start"

})

function intfunct(){
    tens++
    if(tens<9){
        getTens.innerHTML="0"+tens 
    }
    if(tens>9){
        getTens.innerHTML=tens
    }
    if(tens>99){
        seconds++
        getSeconds.innerHTML="0"+seconds
        tens=0
        getTens.innerHTML="0"+tens

    }
    if(seconds>9){
        getSeconds.innerHTML=seconds
    }
    if(seconds>59){
        minutes++
        getMinutes.innerHTML="0"+minutes
        seconds=0
        getSeconds.innerHTML="0"+seconds
    }
     
}
function funct(){

        resTens++
        if(resTens<9){
            getTens.innerHTML="0"+resTens
    
        }
        if(resTens>9){
            getTens.innerHTML=resTens
        }
        if(resTens>99){
            resSeconds++
            getSeconds.innerHTML="0"+resSeconds
            resTens=0
            getTens.innerHTML="0"+resTens
    
        }
        if(resSeconds>9){
            getSeconds.innerHTML=resSeconds
        }
        if(resSeconds>59){
            resMinutes++
            getMinutes.innerHTML="0"+resMinutes
            resSeconds=0
            getSeconds.innerHTML="0"+resSeconds
        }
    

}
