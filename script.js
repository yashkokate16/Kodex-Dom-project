let next = document.getElementById("next")
let prev = document.getElementById("prev")
let slide = document.getElementById("slide")
let btn = document.querySelector(".btn")
let downloadBtn = document.querySelector(".dwnl")



let images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpeg",
    "image9.jpeg",
    "image10.jpeg",
    "image11.jpeg",
    "image12.jpeg",
    "image13.jpeg",
    "image14.jpeg",
    "image16.jpeg",
    "image17.jpeg",
    "image18.jpeg",
    "image19.jpeg",
    "image20.jpeg",
    "image21.jpeg",
    "image22.jpeg",
    "image23.jpeg",
    "image24.jpeg",
    "image25.jpg",
    "image26.jpg",
    "image27.jpg",
    "image28.jpg",
    "image29.jpg",
    "image30.jpg",
    "image10.jpeg",
    "image11.jpeg",
    "image12.jpeg",
    "image13.jpeg",
    "image14.jpeg",
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image16.jpeg",
    "image23.jpeg",
    "image24.jpeg",
    "image25.jpg",
    "image26.jpg",
    "image27.jpg",
    "image28.jpg",
    "image17.jpeg",
    "image18.jpeg",
    
]

let index = 0;

function right() {
    next.addEventListener("click", () =>{
    index++;

    if(index >= images.length) {
        index =0;
    }
    
    slide.src = images[index]
    
})
}
right();

function left() {
    prev.addEventListener("click", () =>{
    index--;
    
    if(index < 0) {
       index = images.length-1;j
    }
     
    slide.src = images[index]
})

}
left();


let click = false;
let int ;
function scroll() {
    btn.addEventListener("click",() => {
       console.log("start");
       
      if(click === false) {
        btn.innerText = "stop "
       
        int = setInterval(() => {
          index++
 
      if(index >= images.length) {
        index = 0
      }

      slide.src = images[index];
    }, 2000)
    click = true;

      } else{
        clearInterval(int)
        btn.innerText = "slide-show";
        click = false
        console.log("stop")
      }
})
}
scroll();

function download() {
    downloadBtn.addEventListener("click",() =>{

    let link = document.createElement("a")
    link.href = slide.src;
    link.download = "image.jpeg"
    link.click();

    
    clearInterval(int)
    btn.innerText = "slide-show";
        click = false
        console.log("stop")


})
}
download()

let songs = [
"songs/1.mp3",
"songs/3.mp3",
"songs/4.mp3",
"songs/5.mp3",
"songs/6.mp3",
"songs/7.mp3",
"songs/8.mp3",
"songs/9.mp3",
"songs/10.mp3",
"songs/11.mp3",
"songs/12.mp3",
"songs/13.mp3",
"songs/14.mp3",
"songs/15.mp3",
"songs/16.mp3",
"songs/17.mp3",
"songs/18.mp3",
]


let audio = new Audio();
let currentIndex = 0

audio.src = songs[currentIndex];


let nextBtn = document.querySelector(".next")
let prevBtn = document.querySelector(".prev")
let playSongBtn = document.querySelector(".play")
let progressBar = document.getElementById("progress-bar");

// play pause code //

playSongBtn.addEventListener("click",() => {
    if(audio.paused){
      audio.play();
       playSongBtn.classList.remove("ri-play-large-line")
       playSongBtn.classList.add("ri-pause-large-line")
      
    } else{
      audio.pause();
      playSongBtn.classList.remove("ri-pause-large-line")
      playSongBtn.classList.add("ri-play-large-line")
    }
})

// progress bar code //

audio.addEventListener("timeupdate" ,() => {
    let progress = (audio.currentTime/audio.duration) * 100
    progressBar.value = progress;
     
})
progressBar.addEventListener("input", function() {
    let value = this.value;
    audio.currentTime = (progressBar.value * audio.duration) / 100;
})


function playSong(index) {
    audio.src = songs[index];
    audio.currentTime = 0;
    audio.play();
}

// next btn //

nextBtn.addEventListener("click",() =>{
  currentIndex ++

  if(currentIndex >=songs.length){
    currentIndex = 0;
  }

  playSong(currentIndex)
})
//  prev btn //

prevBtn.addEventListener("click", () => {
    currentIndex--;

    if(currentIndex < 0){
        currentIndex = songs.length - 1;
    }
    
    playSong(currentIndex);
});

//  auto next //

audio.addEventListener("ended", () => {
    currentIndex++;
    if(currentIndex >= songs.length){
        currentIndex = 0;
    }
    playSong(currentIndex);
});




