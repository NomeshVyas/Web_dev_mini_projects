const item = document.getElementById('item')
const toDoList = document.getElementById('to-do-list')
const add = document.getElementById('submit')
item.addEventListener('keyup',
 function(event) {
    if(event.key == 'Enter'){
       if(item.value != ''){ toDo(this.value)
        this.value = ''}
    }
})

add.addEventListener('click', function(){
    if(item.value != '') {toDo(item.value)
    item.value = ''
    }
})

const toDo = (note) => {
    let liItem = document.createElement('li')
    liItem.innerHTML = `${note} <span><i class="fa-solid fa-xmark"></i></span>`;
    toDoList.appendChild(liItem);

    liItem.addEventListener('click', ()=>{
        liItem.classList.toggle('done')
    })

    liItem.querySelector('.fa-xmark').addEventListener('click', ()=>{
        liItem.remove()
    })
}