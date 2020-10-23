// insert article 0 and p to article
    $("<h2>Article 0 - Interdiction absolue</h2>").prependTo($('body'));
   $("<p>Est interdit de vous doubler, sous peine de disqualification</p>").insertBefore($('h2:eq(1)'));
// put titles in uppercase
$('h2').each(function(){
    $(this).text( $(this).text().toUpperCase());
});
//Decaler numeros
   $('h2').each(function(){
       let textInside = $(this).html().split(" ");
       let addOne = ++textInside[1]
       $(this).html(textInside.join(" "))   
   });
//change color
$('h2:even').each(function(){
$(this).css("backgroundColor" , "blue");
$(this).next().css("backgroundColor" , "blue")
});
// change dates
$('ul:eq(4)').insertBefore('ul:eq(0)')
$('ul:eq(2)').insertBefore('ul:eq(4)')

