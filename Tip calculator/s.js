const amount = document.getElementById('bill-amount');
const guest = document.getElementById('guest');
const quality = document.getElementById('quality');
const tipAmount = document.getElementById('tip-amount');

const calculate = () => {
    const tip = ((amount.value * quality.value)/guest.value).toFixed(2);
    const total = (Number(amount.value) + amount.value * quality.value);
    console.log(typeof(quality.value));
    if(tip == 'NaN'){
        tipAmount.innerHTML = `Tip <i class="fa-solid fa-indian-rupee-sign"></i>0 each`;
        showTip()
    }
    else{
        tipAmount.innerHTML = `Tip <i class="fa-solid fa-indian-rupee-sign"></i>${tip} each <br> & Total amount is <i class="fa-solid fa-indian-rupee-sign"></i>${total}`;
        showTip()
    }
    amount.value = '';
    guest.value = '';
}
const showTip = () => {
    tipAmount.className = 'show';
    setTimeout(function(){
        tipAmount.className = tipAmount.className.replace('show', '')
    },8000)
}