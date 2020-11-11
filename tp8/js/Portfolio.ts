import {Currency} from "./Currency";

export class Portfolio{
    private portfoliotab:Array<Currency>=[];

    get portfoliotabs():Array<Currency>{
        return this.portfoliotab;
    }
    set portfoliotabs(newportfolio:Currency[]) {
        this.portfoliotab = newportfolio;
    }
    addCurrencyPortfolio(moneyValue:number,curencyType:string,convertionRate?:number):void{
        if(isNaN(moneyValue)){
            throw "Add a quantity";
        }
        const validator:boolean=this.searchMoney(curencyType);
        if(validator){
            const elementaajouter:number=this.portfoliotabs.map(function (element:Currency):string{
                return element.curencyTypes;
            }).indexOf(curencyType);
            if(elementaajouter || elementaajouter!==-1){
                this.portfoliotabs[elementaajouter].amounts=this.portfoliotabs[elementaajouter].addMoney(moneyValue);
            }
        }
        else{
            let devise:Currency=new Currency(moneyValue,curencyType,convertionRate);
            this.portfoliotabs.push(devise);
        }
    }
    retirerDeviseHorsPortefeuille(moneyValue:number,curencyType:string):void{
        const validator:boolean=this.searchMoney(curencyType);
        if(validator){
            const element2Pull=this.portfoliotabs.map(function (element:Currency):string{
                return element.curencyTypes;
            }).indexOf(curencyType);
            if(element2Pull || element2Pull!==-1){
                if(moneyValue<=this.portfoliotabs[element2Pull].amounts){
                    this.portfoliotabs[element2Pull].amounts=this.portfoliotabs[element2Pull].retireMoney(moneyValue);
                    if(this.portfoliotabs[element2Pull].amounts<=0){
                        this.portfoliotabs.splice(element2Pull,1);
                    }
                }
                else{
                    throw "Im sorry you just can withdrawl what it is on the portfolio";
                }
            }
        }
        else{
            throw "Exchange type not recognized";
        }
    }
    searchMoney(moneyType:string):boolean{
        let searchTable:Array<Currency> = this.portfoliotabs;
        let longueur:number=searchTable.length;
        for (let i:number=0; i < longueur; i++){
            if(searchTable[i].curencyTypes===moneyType){
                return true;
            }
        }
        return false;
    }
}