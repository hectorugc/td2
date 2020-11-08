const exo1InsertArticle = (body:HTMLBodyElement):void => {

    let titre:string = "Article 0 - Interdiction absolue";
    let texte:string = "<span style='color:#000000;'>Il est absolument interdit de doubler la vedette de l'épreuve : Stéphane Joyeux, sous peine de disqualification immédiate.</span>";

    let newH2:HTMLHeadElement = document.createElement("h2");
    newH2.innerHTML = titre;
    let newP:HTMLParagraphElement = document.createElement("p");
    newP.innerHTML = texte;

    let firstH2:HTMLHeadElement= body.getElementsByTagName("H2")[0];
    body.insertBefore(newP, firstH2);
    body.insertBefore(newH2, newP);
}

const exo2TitresMajuscule = (body:HTMLBodyElement):void => {
    let lesH2:HTMLCollectionOf<HTMLHeadElement> = body.getElementsByTagName("h2");
    for (const unH2 of lesH2) {
        const ch = unH2.firstChild.nodeValue;
        unH2.firstChild.nodeValue = ch.toUpperCase();
    }
}

const exo3DecalerNumeros = (body:HTMLBodyElement):void => {
    let lesH2 = body.getElementsByTagName("h2");
    for (const unH2 of lesH2) {
        const ch = unH2.firstChild.nodeValue;
        const idx = ch.indexOf(" ");
        const idx2 = ch.indexOf(" ", idx + 1);
        const numero = Number.parseInt(ch.substring(idx, idx2)) + 1;
        const ch2 = ch.substring(0, idx + 1) + numero + ch.substring(idx2);
        unH2.firstChild.nodeValue = ch2;
    }
}

const exo4Styles = (body:HTMLBodyElement):void => {
    let lesH2:HTMLCollectionOf<HTMLHeadElement>= body.getElementsByTagName("h2");
    let i:number = 0;
    for (const unH2 of lesH2) {
        if (i % 2 === 0) {
            unH2.classList.add("unsurdeux");
            let precedent = unH2;
            let unP:any;
            do {
                unP = precedent.nextSibling;
                precedent = unP;
                if (unP.nodeName !== "H2") {
                    if (unP.classList !== undefined) {
                        unP.classList.add("unsurdeux");
                    }
                }
            } while (unP.nodeName !== "H2")
        }
        i++;
    }
}

const exo5ChangeDates = (body:HTMLBodyElement):void => {

    let lesH2:HTMLCollectionOf<HTMLHeadElement> = body.getElementsByTagName("h2");
    let art4:HTMLHeadElement = lesH2[3];
    // Recherche du premier UL
    let noeud:HTMLHeadElement = art4;
    while (noeud.nodeName !== "UL") {
        noeud = noeud.nextElementSibling;
    }

    // Boucle sur les UL
    let lesUL = any[]=[];
    let unUL:HTMLElement;
    do {
        unUL = noeud;
        if (unUL.nodeName === "UL") {
            lesUL.push(unUL);
        }
        noeud = noeud.nextElementSibling;
    } while (unUL.nodeName === "UL");

    let pointInsertion:HTMLElement = lesUL[0];
    for (let i:number = lesUL.length - 1; i >= 1; i--) {
        document.body.insertBefore(lesUL[i], pointInsertion);
    }
}

exo1InsertArticle(document.body as HTMLBodyElement );
exo2TitresMajuscule(document.body as HTMLBodyElement);
exo3DecalerNumeros(document.body as HTMLBodyElement);
exo4Styles(document.body as HTMLBodyElement);
exo5ChangeDates(document.body as HTMLBodyElement);

