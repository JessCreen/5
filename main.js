let str = 'Примеры'
let a = 7
let b = 8
let c = a + b

function Main (a, b){
console.log(a + b);
}

// Проверка больше - меньше

if (a > 5){
    console.log('Nice')
}

else {
    console.log('Noo')
}

// Чётное - Нечётное

function ChetNechet(a){
    if (a % 2 == 0){
        console.log('Чётное')
        return true;
    } else {
        console.log('Нечётное')
        return false;
    }
}   

console.log (Main(44, 88))
console.log (5 / 2)
console.log(ChetNechet(a))

let input = document.querySelectorAll('input')
let inputexitw = document.querySelectorAll('.main-input-textw')
let inputexith = document.querySelectorAll('.main-input-texth')
let inputexits = document.querySelectorAll('.main-input-texts')

function lock(){
    let obj = {
        name: input[0].value,
        age: input[1].value,
        telephone: input[2].value,
    }
    console.log(obj)
    inputexitw[0].innerHTML = 'Name: ' + input[0].value
    inputexith[0].innerHTML = 'Age: ' + input[1].value
    inputexits[0].innerHTML = 'Telephone: ' + input[2].value
    input[0].value = ''
    input[1].value = ''
    input[2].value = ''
}


