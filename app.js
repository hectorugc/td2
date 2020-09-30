
// Add the title article 0
let title = document.createElement("h2");
title.innerHTML = "Article 0 - Inderdit";


let whereweare = document.firstElementChild.lastElementChild;
console.log(whereweare);
let child = document.firstElementChild.lastElementChild.firstElementChild;
whereweare.insertBefore(title, child);

// Add the text to article 0

let paragraph = document.createElement("p");
paragraph.innerHTML = ("Il est interdit de vous doubler, sous peine de disqualification.");
  
document.getElementsByTagName("h2")[0].after(paragraph);



  // Put all h2 in upper case
  let allh2 = document.getElementsByTagName("h2");
  console.log(allh2);

  for (let i = 0; i < allh2.length; i++) {
   allh2[i].innerHTML = allh2[i].innerHTML.toUpperCase();
  
  }


  // add +1 to all h2 articles
for (let i = 0; i < allh2.length; i++) {
  let allinside =  allh2[i].innerHTML;
  let numberOfArticle = allh2[i].innerHTML.split(" ");
  console.log(numberOfArticle);
  let addOne = ++numberOfArticle[1];
  console.log(addOne);
  allh2[i].innerHTML = numberOfArticle.join(" ")
  console.log(allh2[i].innerHTML = numberOfArticle.join(" "));
  
}

// add color to titles and paragraphs
for (let setColor = 0; setColor < allh2.length; setColor=setColor+2) {
  allh2[setColor] = allh2[setColor].style.backgroundColor = "blue";
  
}

let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);
for (let setColor2P = 0; setColor2P < allParagraphs.length; setColor2P=setColor2P+2) {
  allParagraphs[setColor2P] = allParagraphs[setColor2P].style.backgroundColor = "blue";
}
