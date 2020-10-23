function getStringMaj31() {

    let s;
    do {
        s = prompt("saisir une chaîne en majuscules");
    } while (s.toUpperCase() !== s);

    return s;
}

function getStringMaj32() {

    let s;
    let nb = 0;
    do {
        s = "";
        for (let i = 0; i < 5; i++) {
            s += String.fromCharCode(65 + Math.random() * (123 - 65));
        }
        console.log(s);
        nb++;
    } while (s.toUpperCase() !== s);
    console.log(nb);
    return s;
}

function getStringMaj32Alt() {

    let s;
    let nb = 0;
    do {
        s = "";
        for (let i = 0; i < 5; i++) {
            s += String.fromCharCode(65 + parseInt(Math.random() * (123 - 65)));
        }
        console.log(s);
        nb++;
    } while (s.toUpperCase() !== s || !isAlphabetic32Alt(s));
    console.log(nb);
    return s;
}

function isAlphabetic32Alt(s) {
    // c'est plus propre qu'utiliser 90 et 97...
    let codeZ = "Z".charCodeAt(0);
    let codeA = "a".charCodeAt(0);
    let ok = true;
    let i = 0;
    while (i < s.length && ok) {
        ok = !(s.charCodeAt(i) > codeZ && s.charCodeAt(i) < codeA);
        i++;
    }
    return ok;
}

function getStringVowels33(size) {

    let arr = ['a', 'e', 'i', 'o', 'u', 'y'];
    // Ajout des majuscules
    let arr2 = [];
    arr.forEach(value => arr2.push(value.toUpperCase()));
    arr.push(...arr2);

    // Génération de la chaîne
    let s = '';
    for (let i = 0; i < size; i++) {
        s += arr[parseInt(Math.random() * arr.length)];
    }
    return s;
}

function readName34() {

    let lastName = prompt("Saisir votre nom");
    let firstName = prompt("Saisir votre prénom")
    lastName = lastName.toUpperCase();
    firstName = firstName.toLowerCase();
    firstName = changeFirstName34(firstName, ' ');
    firstName = changeFirstName34(firstName, '-');

    console.log(firstName + " " + lastName);
}

function changeFirstName34(firstName, separator) {

    let arr = firstName.split(separator);
    let arr2 = [];
    arr.forEach(value => arr2.push(value.substring(0, 1).toUpperCase() + value.substring(1)));
    return arr2.join(separator);
}

function encrypt35() {
    let str = prompt("Saisir une chaîne");
    console.log(str, encryptString35(str));
}

function encryptString35(str) {

    // Intérêt des tableaux : si le code de cryptage change,
    // on mpdifie juste les tables, pas le code ci-dessous
    let letters = ['A', 'E', 'G', 'I', 'O', 'S', 'Z'];
    let numbers = [4, 3, 6, 1, 0, 5, 2];

    for (let i = 0; i < letters.length; i++) {
        str = str.replaceAll(letters[i], numbers[i])
        str = str.replaceAll(letters[i].toLowerCase(), numbers[i])
    }
    return str;
}

function jazzBundle36(n) {

    for (let i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("Jazz Bundle");
        } else if (i % 3 === 0) {
            console.log("Jazz");
        }  else if (i % 5 === 0) {
            console.log("Bundle");
        } else {
            console.log(i);
        }
    }
}

function jazzBundle36Alt(n) {

    for (let i = 1; i <= n; i++) {
        let str = '';
        if (i % 3 === 0 || i % 5 === 0) {
            if (i % 3 === 0) {
                str = "Jazz ";
            }
            if (i % 5 === 0) {
                str += "Bundle";
            }
        } else {
            str = i;
        }
        console.log(str);
    }
}

console.log(getStringMaj31());
getStringMaj32();
getStringMaj32Alt();
console.log(getStringVowels33(10));
readName34();
encrypt35();
jazzBundle36(50);
jazzBundle36Alt(50);