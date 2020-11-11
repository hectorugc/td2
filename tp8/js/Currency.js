"use strict";
exports.__esModule = true;
exports.Currency = void 0;
var Currency = /** @class */ (function () {
    function Currency(amount, curencyType, rateEuros) {
        this.amount = amount;
        this.curencyType = curencyType;
        this.rateEuros = rateEuros;
    }
    Object.defineProperty(Currency.prototype, "amounts", {
        get: function () {
            return this.amount;
        },
        set: function (newAmount) {
            this.amount = newAmount;
        },
        enumerable: false,
        configurable: true
    });
    Currency.prototype.addMoney = function (moreAmunt) {
        return this.amount += moreAmunt;
    };
    Currency.prototype.retireMoney = function (lessAmount) {
        return this.amount -= lessAmount;
    };
    Object.defineProperty(Currency.prototype, "curencyTypes", {
        get: function () {
            return this.curencyType;
        },
        set: function (newCurrencyType) {
            this.curencyType = newCurrencyType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Currency.prototype, "rateEuro", {
        get: function () {
            return this.rateEuros;
        },
        set: function (newEuroRate) {
            this.rateEuros = newEuroRate;
        },
        enumerable: false,
        configurable: true
    });
    return Currency;
}());
exports.Currency = Currency;
