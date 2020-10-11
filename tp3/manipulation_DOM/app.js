// Add the title article 0
let title = document.createElement("h2");
title.innerHTML = "Article 0 - Inderdit";

let whereweare = document.firstElementChild.lastElementChild;
console.log(whereweare);
let child = document.firstElementChild.lastElementChild.firstElementChild;
whereweare.insertBefore(title, child);

// Add the text to article 0

let paragraph = document.createElement("p");
paragraph.innerHTML =
	"Il est interdit de vous doubler, sous peine de disqualification.";

document.getElementsByTagName("h2")[0].after(paragraph);

// Put all h2 in upper case
let allh2 = document.getElementsByTagName("h2");
console.log(allh2);

for (let i = 0; i < allh2.length; i++) {
	allh2[i].innerHTML = allh2[i].innerHTML.toUpperCase();
}

// add +1 to all h2 articles
for (let i = 0; i < allh2.length; i++) {
	let allinside = allh2[i].innerHTML;
	let numberOfArticle = allh2[i].innerHTML.split(" ");
	console.log(numberOfArticle);
	let addOne = ++numberOfArticle[1];
	console.log(addOne);
	allh2[i].innerHTML = numberOfArticle.join(" ");
	console.log((allh2[i].innerHTML = numberOfArticle.join(" ")));
}

// add color to titles and paragraphs
// let allParagraphs = document.getElementsByTagName("p");
for (let setColor = 0; setColor < allh2.length; setColor = setColor + 2) {
	allh2[setColor] = allh2[setColor].style.backgroundColor = "blue";
	// allParagraphs[setColor] = allParagraphs[setColor].style.backgroundColor = "blue";
	var parrafo = allh2[setColor].nextElementSibling;
	parrafo = parrafo.style.backgroundColor = "blue";
}

//change order
let elemen2change = document.getElementsByTagName("ul")[0].firstElementChild
	.firstElementChild;
console.log(elemen2change.outerHTML);

let inverseit = document.getElementsByTagName("ul")[2].firstElementChild
	.firstElementChild;
console.log(inverseit.outerHTML);
//document.replaceWith(elemen2change, inverseit);

let parent = document.getElementsByTagName("ul")[0].firstElementChild;
parent.insertBefore(inverseit, elemen2change);

let parent2 = document.getElementsByTagName("ul")[2].firstElementChild;
let current = document.getElementsByTagName("p")[9];
parent2.insertBefore(elemen2change, current);
