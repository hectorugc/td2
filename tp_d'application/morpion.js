// On demande les nom de jeurs
let jeur1 = prompt("Quelle est votre prenom?");
let jeur2 = prompt("Et toi quelle est ton prenom?");
//Puis chosir la taille de morpion entre 3x3 et 8x8

function creerLeMorpion() {
	dimensionMoprion = parseInt(prompt("Chosisie la taille de morpion"));
	if (dimensionMoprion < 3 || dimensionMoprion > 8) {
		while (dimensionMoprion < 3 || dimensionMoprion > 8) {
			dimensionMoprion = parseInt(
				prompt("Desole mais le morpion doit etre entre 3x3 et 8x8")
			);
		}
	} else {
		// get the reference for the body
		var body = document.getElementsByTagName("body")[0];

		// creates a <table> element and a <tbody> element
		var tbl = document.createElement("table");
		var tblBody = document.createElement("tbody");

		// creating all cells
		for (var i = 0; i < dimensionMoprion; i++) {
			// creates a table row
			var row = document.createElement("tr");
			row.setAttribute("height", "50px");
			for (var j = 0; j < dimensionMoprion; j++) {
				// Create a <td> element and a text node, make the text
				// node the contents of the <td>, and put the <td> at
				// the end of the table row
				var cell = document.createElement("td");
				var cellText = document.createTextNode(
					"cell in row " + i + ", column " + j
				);
				cell.appendChild(cellText);
				row.appendChild(cell);
			}

			// add the row to the end of the table body
			tblBody.appendChild(row);
		}

		// put the <tbody> in the <table>
		tbl.appendChild(tblBody);
		// appends <table> into <body>
		body.appendChild(tbl);
		// sets the border attribute of tbl to 1;
		tbl.setAttribute("border", "1");
		tbl.setAttribute("height", "70%");
		tbl.setAttribute("width", "100%");
	}
}
creerLeMorpion();
//On cree le symbole pour chaque joeur
function dessinJoeur1() {
	let symbole = "X";
}
//On gagne de la maniere traditional 3 symboles mais aussi on peut gagner
//si n symbôles identiques doivent être alignés dans la grille nxn

function validerMorpion() {}

//en fin on demande s'ils veulent rejouer
//On affiche en pied le score courant (nombre de parties gagnées par chacun).
