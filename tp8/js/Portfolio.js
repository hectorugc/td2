"use strict";
exports.__esModule = true;
exports.Portfolio = void 0;
var Currency_1 = require("./Currency");
var Portfolio = /** @class */ (function () {
    function Portfolio() {
        this.portfoliotab = [];
    }
    Object.defineProperty(Portfolio.prototype, "portfoliotabs", {
        get: function () {
            return this.portfoliotab;
        },
        set: function (newportfolio) {
            this.portfoliotab = newportfolio;
        },
        enumerable: false,
        configurable: true
    });
    Portfolio.prototype.addCurrencyPortfolio = function (moneyValue, curencyType, convertionRate) {
        if (isNaN(moneyValue)) {
            throw "Add a quantity";
        }
        var validator = this.searchMoney(curencyType);
        if (validator) {
            var elementaajouter = this.portfoliotabs.map(function (element) {
                return element.curencyTypes;
            }).indexOf(curencyType);
            if (elementaajouter || elementaajouter !== -1) {
                this.portfoliotabs[elementaajouter].amounts = this.portfoliotabs[elementaajouter].addMoney(moneyValue);
            }
        }
        else {
            var devise = new Currency_1.Currency(moneyValue, curencyType, convertionRate);
            this.portfoliotabs.push(devise);
        }
    };
    Portfolio.prototype.retirerDeviseHorsPortefeuille = function (moneyValue, curencyType) {
        var validator = this.searchMoney(curencyType);
        if (validator) {
            var element2Pull = this.portfoliotabs.map(function (element) {
                return element.curencyTypes;
            }).indexOf(curencyType);
            if (element2Pull || element2Pull !== -1) {
                if (moneyValue <= this.portfoliotabs[element2Pull].amounts) {
                    this.portfoliotabs[element2Pull].amounts = this.portfoliotabs[element2Pull].retireMoney(moneyValue);
                    if (this.portfoliotabs[element2Pull].amounts <= 0) {
                        this.portfoliotabs.splice(element2Pull, 1);
                    }
                }
                else {
                    throw "Im sorry you just can withdrawl what it is on the portfolio";
                }
            }
        }
        else {
            throw "Exchange type not recognized";
        }
    };
    Portfolio.prototype.searchMoney = function (moneyType) {
        var searchTable = this.portfoliotabs;
        var longueur = searchTable.length;
        for (var i = 0; i < longueur; i++) {
            if (searchTable[i].curencyTypes === moneyType) {
                return true;
            }
        }
        return false;
    };
    return Portfolio;
}());
exports.Portfolio = Portfolio;
