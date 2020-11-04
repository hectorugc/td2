"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MorpionSimple = void 0;
var morpion_js_1 = require("./morpion.js");
var MorpionSimple = /** @class */ (function (_super) {
    __extends(MorpionSimple, _super);
    function MorpionSimple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MorpionSimple.prototype.aGagne = function (symbole, y, x) {
        var aTrouver = symbole.repeat(3);
        // gagné en ligne ? : concaténation de la ligne, et recherche de la sous-chaîne gagnante
        var ligne = '';
        this.grille[y].forEach(function (element) { return ligne += element; });
        if (ligne.indexOf(aTrouver) >= 0) {
            return true;
        }
        // gagné en colonne ? : concaténation de la colonne et recherche de la sous-chaîne gagnante
        var col = '';
        this.grille.forEach(function (element) { return col += element[x]; });
        if (col.indexOf(aTrouver) >= 0) {
            return true;
        }
        // gagné diagonale
        if (x === y) {
            var diagonale = '';
            for (var lc = 0; lc < this.taille; lc++) {
                diagonale += this.grille[lc][lc];
            }
            if (diagonale.indexOf(aTrouver) >= 0) {
                return true;
            }
        }
        // gagné diag inverse
        if (x === this.taille - (y + 1)) {
            var inverse = '';
            for (var lc = 0; lc < this.taille; lc++) {
                inverse += this.grille[lc][this.taille - (lc + 1)];
            }
            if (inverse.indexOf(aTrouver) >= 0) {
                return true;
            }
        }
        return false;
    };
    return MorpionSimple;
}(morpion_js_1.Morpion));
exports.MorpionSimple = MorpionSimple;
