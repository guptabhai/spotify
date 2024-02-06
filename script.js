console.log("Welcome to Spotify");


// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "On & On-Cartoon, Daniel Levi", filePath: "1.mp3", coverPath: "1.jpg"},
    {songName: "Invincible-DEAF KEV", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: "Mortals-Warriyo, Laura Brehm", filePath: "3.mp3", coverPath: "3.jpg"},
    {songName: "Shine-Spektrem", filePath: "4.mp3", coverPath: "4.jpg"},
    {songName: "Why We Lose-Cartoon, Coleman Trapp", filePath: "5.mp3", coverPath: "5.jpg"},
    {songName: "Sky High-Elektronomia", filePath: "6.mp3", coverPath: "6.jpg"},
    {songName: "Symbolism-Electro-Light", filePath: "7.mp3", coverPath: "7.jpg"},
    {songName: "Heroes Tonight-Janji, Johnning", filePath: "8.mp3", coverPath: "8.jpg"},
    {songName: "My Heart-Different Heaven, EH!DE", filePath: "9.mp3", coverPath: "9.jpg"},
    {songName: "Feel Good-Syn Cole", filePath: "10.mp3", coverPath: "10.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

//myProgressBar.addEventListener('change', ()=>{
  //  audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
//})

