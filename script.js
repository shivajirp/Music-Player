console.log("Welcome!")

// initializing variables
let index = 0;
let audioElement = new Audio('songs/4.mp3');
let Play = document.getElementById('Play');
let myProgressBar = document.getElementById('myProgressBar');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Without Me", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    {songName: "Mockingbird", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    {songName: "Lose Yourself", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    {songName: "Superman", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    {songName: "Not Afraid", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    {songName: "Till I Collapse", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

// Handle play/pause click
Play.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        Play.classList.remove('fa-circle-play');
        Play.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        Play.classList.remove('fa-circle-pause');
        Play.classList.add('fa-circle-play');
    }
})

// listen to events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('Timeupdate')
    // Update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
} )


const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        index = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${index+1}.mp3`;
        songName.innerText = songs[index].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        Play.classList.remove('fa-circle-play');
        Play.classList.add('fa-circle-pause');
    })
})

// next button function
document .getElementById('next').addEventListener('click',()=>{
    if(index>=5){
        index=0;
    }
    else{
        index += 1;
    }

    audioElement.src = `songs/${index+1}.mp3`;
    songName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    Play.classList.remove('fa-circle-play');
    Play.classList.add('fa-circle-pause');    

})

// previous button function
document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0){
        index=5;
    }
    else{
        index -= 1;
    }

    audioElement.src = `songs/${index+1}.mp3`;
    songName.innerText = songs[index].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    Play.classList.remove('fa-circle-play');
    Play.classList.add('fa-circle-pause');    

})