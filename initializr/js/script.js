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

    $("input[type='range']").css('top',function(){return (($('#mutebtn').height()/2)-5)+'px'});
}


window.onload = initializePlayer;



function playPause(){
    if(vid.paused){
        vid.play();
        $('#playpausebtn img').attr('src','./images/pause.png');
    }else{
        vid.pause();
        $('#playpausebtn img').attr('src','./images/play.png');
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

/*    var curMins = Math.floor(vid.currentTime/60);
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
    durtimetext.innerHTML =durMins+":"+durSecs;*/
}

function vidMute(){
    if(vid.muted){
        vid.muted=false;/*
        mutebtn.style.background=" url(./images/mute.png)";*/
        $('#mutebtn img').attr('src','./images/unmute.png');
        volumeslider.value=100;
        vid.volume = volumeslider.value/100;
    }else{
        vid.muted=true;/*
        mutebtn.style.background=" url(./images/unmute.png)";*/
        $('#mutebtn img').attr('src','./images/mute.png');
        volumeslider.value=0;
        vid.volume = volumeslider.value/100;
    }
}
function setVolume(){
    vid.muted=false;
    $('#mutebtn img').attr('src','./images/unmute.png');
    vid.volume = volumeslider.value/100;
};

//vertical align bars
window.onresize = function() {
    $("input[type='range']").css('top',function(){return (($('#mutebtn').height()/2)-5)+'px'});
};

$("input[type='range']").css('top',function(){return (($('#mutebtn').height()/2)-5)+'px'});