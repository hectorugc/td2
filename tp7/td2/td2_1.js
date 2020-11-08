var exo1InsertArticle = function (body) {
    var titre = "Article 0 - Interdiction absolue";
    var texte = "<span style='color:#000000;'>Il est absolument interdit de doubler la vedette de l'épreuve : Stéphane Joyeux, sous peine de disqualification immédiate.</span>";
    var newH2 = document.createElement("h2");
    newH2.innerHTML = titre;
    var newP = document.createElement("p");
    newP.innerHTML = texte;
    var firstH2 = body.getElementsByTagName("H2")[0];
    body.insertBefore(newP, firstH2);
    body.insertBefore(newH2, newP);
};
var exo2TitresMajuscule = function (body) {
    var lesH2 = body.getElementsByTagName("h2");
    for (var _i = 0, lesH2_1 = lesH2; _i < lesH2_1.length; _i++) {
        var unH2 = lesH2_1[_i];
        var ch = unH2.firstChild.nodeValue;
        unH2.firstChild.nodeValue = ch.toUpperCase();
    }
};
var exo3DecalerNumeros = function (body) {
    var lesH2 = body.getElementsByTagName("h2");
    for (var _i = 0, lesH2_2 = lesH2; _i < lesH2_2.length; _i++) {
        var unH2 = lesH2_2[_i];
        var ch = unH2.firstChild.nodeValue;
        var idx = ch.indexOf(" ");
        var idx2 = ch.indexOf(" ", idx + 1);
        var numero = Number.parseInt(ch.substring(idx, idx2)) + 1;
        var ch2 = ch.substring(0, idx + 1) + numero + ch.substring(idx2);
        unH2.firstChild.nodeValue = ch2;
    }
};
var exo4Styles = function (body) {
    var lesH2 = body.getElementsByTagName("h2");
    var i = 0;
    for (var _i = 0, lesH2_3 = lesH2; _i < lesH2_3.length; _i++) {
        var unH2 = lesH2_3[_i];
        if (i % 2 === 0) {
            unH2.classList.add("unsurdeux");
            var precedent = unH2;
            var unP = void 0;
            do {
                unP = precedent.nextSibling;
                precedent = unP;
                if (unP.nodeName !== "H2") {
                    if (unP.classList !== undefined) {
                        unP.classList.add("unsurdeux");
                    }
                }
            } while (unP.nodeName !== "H2");
        }
        i++;
    }
};
var exo5ChangeDates = function (body) {
    var lesH2 = body.getElementsByTagName("h2");
    var art4 = lesH2[3];
    // Recherche du premier UL
    var noeud = art4;
    while (noeud.nodeName !== "UL") {
        noeud = noeud.nextElementSibling;
    }
    // Boucle sur les UL
    var lesUL = any[] = [];
    var unUL;
    do {
        unUL = noeud;
        if (unUL.nodeName === "UL") {
            lesUL.push(unUL);
        }
        noeud = noeud.nextElementSibling;
    } while (unUL.nodeName === "UL");
    var pointInsertion = lesUL[0];
    for (var i = lesUL.length - 1; i >= 1; i--) {
        document.body.insertBefore(lesUL[i], pointInsertion);
    }
};
exo1InsertArticle(document.body);
exo2TitresMajuscule(document.body);
exo3DecalerNumeros(document.body);
exo4Styles(document.body);
exo5ChangeDates(document.body);
