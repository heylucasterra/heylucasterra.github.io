$(document).ready(function() {

  var quotes = ["I did the Kessel run in less than 12 parsecs.", "One of my greatest passions is learning new languages. I have studied French, German, Spanish, English and my mother language Porguguese this far. Japanese will probably be the next one to follow.", "I have lived and worked in Brazil, Chile, England and Singapore.","When I was in first year of Design school I aplied for the Architecture and Urbanism course. Today I'm extremely happy I didn't change my mind at that time.", "I am currently reading Blink by Malcolm Gladwell again.","Laws of simplicity by John Maeda is one of my personal mantras.","It can sound very cliché, but I believe in Less but Better for all my belongings. I am currently listing everything I own and trying to cut it down to 300 objects only","I'm only 1,76m tall but I played vollyeball for over 10 years. I considered going professional but discovered what design was. I still play it every Monday and Wednesday.","Thin-crust pizza is my spiritual food."];

  $('.factbutton').click(function() {

    randomNum = Math.floor(Math.random() * quotes.length);

    $("#quote").text(quotes[randomNum]);
});

});