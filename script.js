// write your JS code here

let price = 0;
let count = 0;
function decrease() {
    count++;
    price += 5.99;
    document.querySelector('#dec').innerHTML = count;
    document.querySelector('#price').innerHTML = price;
    console.log(count);
}

function increase() {
    count--;
    price -= 5.99;
    document.querySelector('#dec').innerHTML = count;
    document.querySelector('#price').innerHTML = price;
}


// second book

function secDecrease() {
    count++;
    price += 11.97;
    document.querySelector('#sec-dec').innerHTML = count;
    document.querySelector('#sec-price').innerHTML = price;

}

function secIncrease() {
    count--;
    price -= 5.99;
    document.querySelector('#sec-dec').innerHTML = count;
    document.querySelector('#sec-price').innerHTML = price;
}

// third book


function thirdDecrease() {
    count++;
    price += 11.97;
    document.querySelector('#third-dec').innerHTML = count;
    document.querySelector('#third-price').innerHTML = price;

}

function thirdIncrease() {
    count--;
    price -= 5.99;
    document.querySelector('#third-dec').innerHTML = count;
    document.querySelector('#thirs-price').innerHTML = price;
}