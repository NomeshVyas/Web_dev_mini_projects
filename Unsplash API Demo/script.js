const dayMode = document.getElementById('daymode');
const nightMode = document.getElementById('nightmode');
var input = document.getElementById('input');
const grid = document.getElementById('grid');
const search = document.getElementById('fa-magnifying-glass');

function changeDayNightMode() {
    if(nightMode.style.display == 'none'){
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black'; 
        nightMode.style.display = 'block';
        dayMode.style.display = 'none';
    }else{
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        nightMode.style.display = 'none';
        dayMode.style.display = 'block';
    }
}
search.addEventListener('click', function(){
    loadImg();
})
input.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        loadImg();
    }
})
function loadImg() {
    removeImg();
    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=10&client_id=DFvGBa5-5UJGBTuPQKP5eLmgqpqI2KJgARzct-u7Oq8';
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }
    })
    .then(data => {
        var imgs = [];
        for(let i=0; i < data.results.length; i++){
            imgs[i] = document.createElement('div');
            imgs[i].className = 'img';
            imgs[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')'
            
            grid.appendChild(imgs[i])
        }
        input.value = '';
    })
}
function removeImg(){
    grid.innerHTML = '';
}