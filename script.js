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
       index = images.length-1;
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





