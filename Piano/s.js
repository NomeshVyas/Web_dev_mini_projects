const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeBar = document.querySelector(".volume input");
const showKeys = document.querySelector(".show-key input");
var allKeys = [];
let audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");

    setTimeout(()=>{
        clickedKey.classList.remove("active");
    }, 200)
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key)){
        playTune(e.key)
    }
}

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const hideShowKeyToggle = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));    
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", ()=> playTune(key.dataset.key));
})

document.addEventListener("keydown", pressedKey);
volumeBar.addEventListener("input", handleVolume);
showKeys.addEventListener("click", hideShowKeyToggle);