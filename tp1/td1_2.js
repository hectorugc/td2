function quelType(x) {

    console.log(`${x } de type : ${ typeof x}`);
}

function quelsTypes() {

    console.log("====\n quels types / déclaration ? \n====");

    let x;
    let nb1 = 12;
    let nb2 = 5;
    let div1 = nb1 / nb2;
    console.log(div1);
    console.log(Number.isInteger(div1));
    quelType(x);
    let titre = "Monsieur";
    let entete = `bonjour ${titre}`;
    quelType(entete);
    x = 9;
    quelType(x);
    x = 2.5;
    quelType(x);
    x = true;
    quelType(x);
    x = null;
    quelType(x);
    x = [ 1, 2, 3 ];
    quelType(x);
    x = new Array();
    quelType(x);
    x = {};
    quelType(x);
    let unObjet = {
        "promo": "lpwmce",
        "nb": 25
    };
    quelType(unObjet);
    x = new Date();
    quelType(x);
    x = function() {
        alert("toto");
    };
    quelType(x);
    //x = 42n;
    quelType(x);
}

function conversionsStringNumber() {

    console.log("====\n conversions\n====");

    let n1 = 18;
    let s1 = n1.toString();
    console.log(s1);

    let n1s1 = parseInt(s1);
    console.log(n1s1);

    let n2s1 = Number.parseInt(s1);
    console.log(n2s1);

    let n3s1 = Number(s1);
    console.log(n3s1);

    let n2 = 3.14159;
    let s2 = n2.toString();
    console.log(s2);

    let n1s2 = parseFloat(s2);
    console.log(n1s2);

    let n2s2 = Number.parseFloat(s2);
    console.log(n2s2);

    let n3s2 = Number(s2);
    console.log(n3s2);
}

function conversionsFloatNumber() {

    console.log("====\n maths\n====");

    console.log("f", 5.3, Math.floor(5.3));
    console.log("f", 5.7, Math.floor(5.7));
    console.log("c", 5.3, Math.ceil(5.3));
    console.log("c", 5.7, Math.ceil(5.7));
    console.log("r", 5.3, Math.round(5.3));
    console.log("r", 5.7, Math.round(5.7));
    console.log("t", 5.3, Math.trunc(5.3));
    console.log("t", 5.7, Math.trunc(5.7));
}

function egalites() {

    console.log("====\n égalités ? \n====");

    let n = 0;
    let b = false;
    let s = "0";
    let tab = [];
    let obj = {};
    console.log("== entier/objet vide", n == obj);
    console.log("== entier/tableau vide", n == tab);
    console.log("== entier/booléen", n == b);
    console.log("== entier/chaine", n == s);

    console.log("== chaine 0/booléen", s == b);
    console.log("== chaine false/booléen", "false" == b);

    console.log("=== entier/objet vide", n === obj);
    console.log("=== entier/tableau vide", n === tab);
    console.log("=== entier/booléen", n === b);
    console.log("=== entier/chaine", n === s);

    console.log("=== chaine 0/booléen", s === b);
    console.log("=== chaine false/booléen", "false" === b);
}

quelsTypes();
conversionsStringNumber();
conversionsFloatNumber();
egalites();
