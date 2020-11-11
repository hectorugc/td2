export class Currency{

private amount:number;
private curencyType:string;
private rateEuros:number | undefined;


constructor(amount: number, curencyType: string, rateEuros: number ) {
    this.amount = amount
    this.curencyType = curencyType
    this.rateEuros = rateEuros
}
get amounts():number{
    return this.amount;
}
set amounts(newAmount:number){
    this.amount=newAmount;
}

addMoney(moreAmunt:number):number{
    return this.amount+=moreAmunt;
}
retireMoney(lessAmount:number):number{
    return this.amount-=lessAmount;
}

get curencyTypes():string{
    return this.curencyType;
}
set curencyTypes(newCurrencyType:string){
    this.curencyType=newCurrencyType;
}
get rateEuro():number{
    return <number>this.rateEuros;
}
set rateEuro(newEuroRate:number){
    this.rateEuros=newEuroRate;
}



}