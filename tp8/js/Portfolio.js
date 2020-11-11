"use strict";
exports.__esModule = true;
exports.Portfolio = void 0;
var Currency_1 = require("./Currency");
var Portfolio = /** @class */ (function () {
    function Portfolio() {
        this._tabportefeuille = [];
    }
    Object.defineProperty(Portfolio.prototype, "tabportefeuille", {
        get: function () {
            return this._tabportefeuille;
        },
        set: function (newtabportefeuille) {
            this._tabportefeuille = newtabportefeuille;
        },
        enumerable: false,
        configurable: true
    });
    Portfolio.prototype.addCurrencyPortfolio = function (valuemonnaie, curencyType, tauxconversion) {
        if (isNaN(valuemonnaie)) {
            throw "Add a quantity";
        }
        var validator = this.monnaieRecherche(curencyType);
        // console.log("validador: "+validator);
        if (validator) {
            var elementaajouter = this.tabportefeuille.map(function (element) {
                // console.log("map: "+element.typemonnaie);
                return element.curencyTypes;
            }).indexOf(curencyType);
            // console.log("element a ajouter: "+elementaajouter);
            if (elementaajouter || elementaajouter !== -1) {
                this.tabportefeuille[elementaajouter].amounts = this.tabportefeuille[elementaajouter].addMoney(valuemonnaie);
            }
        }
        else {
            var devise = new Currency_1.Currency(valuemonnaie, curencyType, tauxconversion);
            this.tabportefeuille.push(devise);
        }
    };
    Portfolio.prototype.retirerDeviseHorsPortefeuille = function (valuemonnaie, curencyType) {
        var validator = this.monnaieRecherche(curencyType);
        if (validator) {
            var elementaretirer = this.tabportefeuille.map(function (element) {
                return element.curencyTypes;
            }).indexOf(curencyType);
            if (elementaretirer || elementaretirer !== -1) {
                if (valuemonnaie <= this.tabportefeuille[elementaretirer].amounts) {
                    this.tabportefeuille[elementaretirer].amounts = this.tabportefeuille[elementaretirer].retireMoney(valuemonnaie);
                    if (this.tabportefeuille[elementaretirer].amounts <= 0) {
                        this.tabportefeuille.splice(elementaretirer, 1);
                        // console.log(this.tabportefeuille);
                    }
                }
                else {
                    throw "desole, tu peux pas retirer que se trouve dans le portefeuille";
                }
            }
        }
        else {
            throw "Type de monnaie pas trouvé, essaie de nouveau";
        }
    };
    Portfolio.prototype.monnaieRecherche = function (typemonnaie) {
        var tablecherche = this.tabportefeuille;
        var longueur = tablecherche.length;
        for (var i = 0; i < longueur; i++) {
            if (tablecherche[i].curencyTypes === typemonnaie) {
                return true;
            }
        }
        return false;
    };
    return Portfolio;
}());
exports.Portfolio = Portfolio;
