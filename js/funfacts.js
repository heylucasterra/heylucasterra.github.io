$(document).ready(function() {

  var quotes = ["I did the Kessel run in less than 12 parsecs.", "One of my greatest passions is learning new languages. I have studied French, German, Spanish, English and my mother language Porguguese this far. Japanese will probably be the next one to follow.", "I have lived and worked in Brazil, Chile, England and Singapore.","When I was in first year of Design school I aplied for the Architecture and Urbanism course. Today I'm extremely happy I didn't change my mind at that time.", "I am currently reading Blink by Malcolm Gladwell again.","Laws of simplicity by John Maeda is one of my personal mantras.","It can sound very cliché, but I believe in Less but Better for all my belongings. I am currently listing everything I own and trying to cut it down to 300 objects only","I'm only 1,76m tall but I played volleyball for over 10 years. I considered going professional but discovered what design was. I still play it every Monday and Wednesday 🏐","Thin-crust pizza is my spiritual food.", "I started playing with Photoshop when I was 12. I was a collaborator on a forum for sharing pirate software and films and use to make signs and avatars for my peers. Today I'm a huge supporter for people coming up with original content, and pay for all my software licenses.", "My website has been mostly black, grey and white since it's first version. This is an experiment with colour and I'd love to hear your feedback about it. Get in touch :)</a>","The characteristic I admire the most in someone is the willingness to change their mind about a subject. It brings me hope about our survival.","Besides Brazil, people also access this website from France, US, India and Australia. Thank you for visiting it too :)", "I've been away from facebook since June 2017. My mental health improved a lot since this decision."];

  $('.factbutton').click(function() {

    randomNum = Math.floor(Math.random() * quotes.length);

    $("#quote").text(quotes[randomNum]);
});

});