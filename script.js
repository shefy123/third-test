// write your JS code here

let inputEl
const price = 5.99

function initialize() {
    inputEl = document.querySelector('input')
    updateTotalAmount(0)
    for (let i = 0; i < bookDetails.length; i++) {

        document.querySelector('.card-title').innerHTML = bookDetails[i].bookName;
        document.querySelector('#author >strong').innerHTML = bookDetails[i].author;
        document.querySelector('.text-info').innerHTML = bookDetails[i].detail;
        document.querySelector('#image').style["background-image"] = `url(images/${bookDetails[i].image})`;
    }
}

// increase the valua

function increase() {
    inputEl.value = parseInt(inputEl.value) + 1;
    updateTotalAmount(inputEl.value)
}

// decrease the valua

function decrease() {
    if (+inputEl.value <= 0) return
    inputEl.value = parseInt(inputEl.value) - 1;
    updateTotalAmount(inputEl.value)
}
// addition of price
function updateTotalAmount(newQuantity) {
    document.querySelector('.alert #price').innerHTML = (
        newQuantity * price
    ).toFixed(2)
}
