// Estrutura de repetição for

const divFor = document.querySelector('#div-for')

for(i = 0;i < 10; i++){
    console.log(i, 'amor');
    divFor.innerHTML += `${i} - amor <br>>`

}

const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cont-acum')