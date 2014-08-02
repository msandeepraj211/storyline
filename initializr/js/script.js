/**
 * Created by raj on 28/7/14.
 */
var vid, playbtn, seekslider ,curtimetext ,durtimetext ,mutebtn ,volumeslider;

function initializePlayer(){
    //set object references
    vid = document.getElementById("bgVideo");
    playbtn = document.getElementById("playpausebtn");
    seekslider = document.getElementById("seekslider");
    curtimetext = document.getElementById("curtimetext");
    durtimetext = document.getElementById("durtimetext");
    mutebtn = document.getElementById("mutebtn");
    volumeslider = document.getElementById("volumeslider");
    //add event listeners
    playbtn.addEventListener("click",playPause,false);
    seekslider.addEventListener("change",vidSeek,false);
    vid.addEventListener("timeupdate",seekTimeUpdate,true);/*
    vid.addEventListener("seeking",vidSeek,false);*/
    mutebtn.addEventListener("click",vidMute,false);
    volumeslider.addEventListener("change",setVolume,false);
}


window.onload = initializePlayer;



function playPause(){
    if(vid.paused){
        vid.play();
        playbtn.innerHTML="Pause";
    }else{
        vid.pause();
        playbtn.innerHTML="Play";
    }
}

function vidSeek(){
    console.log(vid.currentTime );
    console.log(vid.duration*(seekslider.value/100));
    vid.currentTime = vid.duration*(seekslider.value/100);
    console.log(vid.currentTime );
}

function seekTimeUpdate(){

    seekslider.value= vid.currentTime*(100/vid.duration);

    var curMins = Math.floor(vid.currentTime/60);
    var curSecs = Math.floor(vid.currentTime-curMins*60);
    var durMins = Math.floor(vid.duration/60);
    var durSecs = Math.floor(vid.duration-durMins*60);
    if(curSecs<10){
        curSecs = "0"+curSecs;
    }
    if(durSecs<10){
        durSecs = "0"+durSecs;
    }
    curtimetext.innerHTML =curMins+":"+curSecs;
    durtimetext.innerHTML =durMins+":"+durSecs;
}

function vidMute(){
    if(vid.muted){
        vid.muted=false;
        mutebtn.innerHTML="Mute";
        volumeslider.value=100;
        vid.volume = volumeslider.value/100;
    }else{
        vid.muted=true;
        mutebtn.innerHTML="UnMute";
        volumeslider.value=0;
        vid.volume = volumeslider.value/100;
    }
}
function setVolume(){
    vid.muted=false;
    mutebtn.innerHTML="Mute";
    vid.volume = volumeslider.value/100;
};
