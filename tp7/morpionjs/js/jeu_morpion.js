"use strict";
exports.__esModule = true;
var morpionSimple_js_1 = require("./morpionSimple.js");
var morpion_js_1 = require("./morpion.js");
var morpion;
var nbCoups;
var joueur;
var symbole;
var scores = [0, 0];
var modeJeu;
var zone_message;
// nécessaire pour pouvoir désactiver les listeners, car je leur passe des paramètres lors du addEventListener
var ecouteurs = [];
function recommence() {
    zone_message = document.getElementById("messages");
    var taille = document.getElementById("taille").value;
    modeJeu = document.getElementById("simple").checked ? "simple" : "complet";
    var table = document.getElementById("table_morpion");
    for (var l = table.rows.length - 1; l >= 0; l--) {
        table.deleteRow(l);
    }
    try {
        if (modeJeu === "simple") {
            morpion = new morpionSimple_js_1.MorpionSimple(Number.parseInt(taille));
        }
        else {
            morpion = new morpion_js_1.Morpion(Number.parseInt(taille));
        }
    }
    catch (error) {
        zone_message.innerHTML = error;
        return;
    }
    var _loop_1 = function (i) {
        var ligne = table.insertRow(i);
        var _loop_2 = function (j) {
            var id = '' + ((i + 1) * 10 + (j + 1));
            var cell = ligne.insertCell(j);
            cell.innerHTML = "<input type='button' id='" + id + "' class='case' />";
            var monEcouteur = function () { return clicBouton(cell.firstChild, i, j); };
            ecouteurs.push(monEcouteur);
            cell.firstChild.addEventListener("click", monEcouteur);
        };
        for (var j = 0; j < taille; j++) {
            _loop_2(j);
        }
    };
    for (var i = 0; i < taille; i++) {
        _loop_1(i);
    }
    nbCoups = 0;
    joueur = 1;
    symbole = 'x';
    zone_message.innerHTML = "Joueur 1, à toi !";
    document.getElementById("btn_reset").disabled = true;
}
function clicBouton(uneCase, y, x) {
    try {
        var victoire = morpion.setCase(symbole, y, x);
        uneCase.value = symbole;
        uneCase.classList.add("joueur" + joueur);
        nbCoups++;
        if (victoire) {
            zone_message.innerHTML = "Le joueur " + joueur + " a gagné !";
            desactiveEcouteurs();
            symbole === "x" ? scores[0]++ : scores[1]++;
            document.getElementById("score").innerHTML = "X : " + scores[0] + " - O  : " + scores[1];
        }
        else if (nbCoups === morpion.taille * morpion.taille) {
            zone_message.innerHTML = "Match nul !";
            desactiveEcouteurs();
        }
        else {
            if (symbole === 'x') {
                symbole = 'o';
                joueur = 2;
            }
            else {
                symbole = 'x';
                joueur = 1;
            }
            zone_message.innerHTML = "Joueur " + joueur + ", à toi de jouer !";
        }
    }
    catch (error) {
        zone_message.innerHTML = error;
    }
}
function desactiveEcouteurs() {
    var l = 0;
    for (var i = 0; i < morpion.taille; i++) {
        for (var j = 0; j < morpion.taille; j++) {
            document.getElementById("" + ((i + 1) * 10 + (j + 1))).removeEventListener("click", ecouteurs[l]);
            l++;
        }
    }
    ecouteurs = [];
    document.getElementById("btn_reset").disabled = false;
}
document.getElementById("score").innerHTML = "X : " + scores[0] + " - O  : " + scores[1];
document.getElementById("btn_reset").addEventListener("click", recommence);
recommence();
