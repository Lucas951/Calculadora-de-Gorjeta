const inputAmount = document.getElementById("input-amount")
const inputTip = document.getElementById("input-tip")
const calculate = document.getElementById("calculate")
const result = document.getElementById("result")

function calcTip(){

    let calculateTip = (inputTip.value / 100) * inputAmount.value;

    result.innerHTML = calculateTip.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

calculate.addEventListener("click", calcTip)