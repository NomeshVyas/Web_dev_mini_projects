const buttons = document.getElementsByClassName('buttons')
const inputField = document.getElementById('input')

for(let i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', (event)=> {
        let inputText = '';
        switch (event.target.innerHTML) {
            case 'C' :
            break;
            case '=' :
              try { inputText = eval(inputField.value); }
              catch(e) { inputText = 'invalid operation🙄';
                         inputField.style.color = 'red';
            }
            break;
            case '←' :
                inputText = inputField.value.slice(0, inputField.value.length-1);
            break;
            case '+/-' : if (inputField.value>0){
                inputText = -inputField.value;
            }  else {
                inputText = -inputField.value;
            }
            break;
            default: 
                inputText = `${inputField.value}${event.target.innerHTML}`;
                inputField.style.color = 'rgb(160, 31, 31)';

        }if (inputField.value.length > 18) {
            inputField.style.fontSize = '0.75em';
        } 
        else {
            inputField.style.fontSize = '1.5em'
        }

        inputField.value = inputText 
    } );
}