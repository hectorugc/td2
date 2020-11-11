
import {Portfolio} from "./Portfolio";
let exchangeValue:Array<any>=[];
const tabledevises:HTMLTableElement=(document.getElementById("tabledevises") as HTMLTableElement);
const inputMonney:HTMLSelectElement=(document.getElementById("inputMonney") as HTMLSelectElement);
const inputamount:HTMLInputElement=(document.getElementById("amount") as HTMLInputElement);
const message:HTMLParagraphElement=(document.getElementById("message") as HTMLParagraphElement);
const addButton:HTMLButtonElement=(document.getElementById("addButton") as HTMLButtonElement);
const withdrawlButton:HTMLButtonElement=(document.getElementById("withdrawl") as HTMLButtonElement);
const ExchangePortfolio:Portfolio=new Portfolio();

APIExhange('https://api.exchangeratesapi.io/latest',inputMonney);
function APIExhange(url:string,selectCase:HTMLSelectElement):void{
    fetch(url,{
        method:'GET',
    })
        .then<Response>(response=>response.json())
        .then<void>(function (json:any):void{
            console.log(json);
            let options:string="";
            exchangeValue.push(json.rates);
            exchangeValue=exchangeValue[0];
            console.log(exchangeValue);
            for (const data in json.rates){
                options+="<option value='"+data+"'>"+data+"</option>";
            }
            selectCase.innerHTML=options;
        })
        .catch(function(err){
        console.log("Error: "+err);
    })
    }   
function decendAddAmount(){
    try{
        
        let convertionRate:number=exchangeValue[inputMonney.value];
        console.log(convertionRate);
        ExchangePortfolio.addCurrencyPortfolio(parseInt(inputamount.value),inputMonney.value,convertionRate);
        if (ExchangePortfolio.portfoliotabs.length!==0){
            tabledevises.innerHTML="";
            ExchangePortfolio.portfoliotabs.map(function(element){
                tabledevises.innerHTML+="<tr><td>"+`${element.curencyTypes}`+"</td><td>"+`${element.amounts}`+"</td><td>"+Math.round((element.amounts/element.rateEuro)*100)/100+"</td></tr>";
            });
        }
    }
    catch (error){
        message.innerText=error;
        return;
    }
}
function withdrawlAmount(){
    // tabledevises.innerHTML="";
    try{
        ExchangePortfolio.retirerDeviseHorsPortefeuille(parseInt(inputamount.value),inputMonney.value);
        tabledevises.innerHTML="";
        ExchangePortfolio.portfoliotabs.map(function(element){
            tabledevises.innerHTML+="<tr><td>"+`${element.curencyTypes}`+"</td><td>"+`${element.amounts}`+"</td><td>"+Math.round((element.amounts/element.rateEuro)*100)/100+"</td></tr>";
        });
    } catch(error){
        message.innerHTML=error;
        return;
    }
}

addButton.addEventListener("click",decendAddAmount);
withdrawlButton.addEventListener("click",withdrawlAmount);