
// Add the title article 0
let title = document.createElement("h2");
title.innerHTML = "Article 0";


let whereweare = document.firstElementChild.lastElementChild;
console.log(whereweare);
let child = document.firstElementChild.lastElementChild.firstElementChild;
whereweare.insertBefore(title, child);

// Add the text to article 0

let paragraph = document.createElement("p");
let textnode = document.createTextNode("Il est interdit de vous doubler, sous peine de disqualification.");
  paragraph.append(textnode);
  document.getElementsByTagName("h2")[0].append(paragraph);



  // Put all h2 in upper case
  let allh2 = document.getElementsByTagName("h2");
  console.log(allh2);

  for (let i = 0; i < allh2.length; i++) {
   allh2[i].innerHTML = allh2[i].innerHTML.toUpperCase();
  
  }
