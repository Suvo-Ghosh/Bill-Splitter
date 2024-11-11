const inputBill = document.querySelector('.input-bill')
const inputCustomTip = document.querySelector('.custom-tip')
const inputNumberOfPeople = document.querySelector('.number-of-people')
const tipsContainer = document.querySelector('.tips-container')
const generatBillBtn = document.querySelector('.generatBill-btn')
const resetBtn = document.querySelector('.reset-btn')

const tipAmountOutput = document.querySelector('.tip-amount-output span')
const totalAmountOutput = document.querySelector('.Total-amount-output span')
const eachAmountOutput = document.querySelector('.Each-amount span')

let tipPercentage = 0

generatBillBtn.addEventListener('click', () => {
    let billAmount = parseInt(inputBill.value)
    let tipAmount = (tipPercentage / 100) * billAmount
    let totalAmount = billAmount + tipAmount
    let eachBill = (totalAmount / parseInt(inputNumberOfPeople.value)).toFixed(2)

    tipAmountOutput.innerText = `₹${tipAmount}`
    totalAmountOutput.innerText = `₹${totalAmount}`
    eachAmountOutput.innerText = `₹${eachBill}`

    resetBtn.disabled = false
})

tipsContainer.addEventListener('click', (e) => {
    if (tipsContainer.classList.contains('disabled')) {
        return
    }
    if (e.target !== tipsContainer) {
        [...tipsContainer.children].forEach((child) => { child.classList.remove('selected') })
        e.target.classList.add('selected')
        inputCustomTip.value = ''
        tipPercentage = parseInt(e.target.innerText) 

        if (tipPercentage && inputNumberOfPeople.value) {
            generatBillBtn.disabled = false
        }else{
            generatBillBtn.disabled = true
        }
    }
})

inputCustomTip.addEventListener('input', () => {
    [...tipsContainer.children].forEach((child) => { child.classList.remove('selected') })
    tipPercentage = parseInt(inputCustomTip.value)
    if (tipPercentage && inputNumberOfPeople.value) {
        generatBillBtn.disabled = false
    }else{
        generatBillBtn.disabled = true
    }
})

resetBtn.addEventListener('click', () => {
    [...tipsContainer.children].forEach((child) => { child.classList.remove('selected') })
    inputBill.value = ''
    inputNumberOfPeople.value = ''
    inputCustomTip.value = ''

    tipAmountOutput.innerText = ''
    totalAmountOutput.innerText = ''
    eachAmountOutput.innerText = ''

    resetBtn.disabled = true
    generatBillBtn.disabled = true
})

inputBill.addEventListener('input', () => {
    if (inputBill.value) {
        inputNumberOfPeople.disabled = false
        inputCustomTip.disabled = false
        tipsContainer.classList.remove('disabled')
    } else {
        inputNumberOfPeople.disabled = true
        inputCustomTip.disabled = true
        tipsContainer.classList.add('disabled')
    }
})

inputNumberOfPeople.addEventListener('input', () => {
    if (tipPercentage && inputNumberOfPeople.value) {
        generatBillBtn.disabled = false
    }else{
        generatBillBtn.disabled = true
    }
})

