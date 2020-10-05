import {getSum41, getSum41Alt1, getNumberOfEven42} from './modules/array_utils.js'
function hola(){
    let nombre = document.getElementById("nombre").value;
    
    getSum41(nombre);
    getSum41Alt1(nombre);
    getNumberOfEven42(nombre);
}
    
hola();



    document.getElementById("btn1").addEventListener("click", hola);




