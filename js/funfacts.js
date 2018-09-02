$(document).ready(function() {

  var quotes = ["I did the Kessel run in less than 12 parsecs.", "One of my greatest passions is learning languages. Apart from Portuguese, I have also studied a bit of French, German, Spanish and English. Japanese is the next on the list.", "I have lived/ worked in Brazil, Chile, England and Singapore.","When I was in first year of Design school I applied for the Architecture and Urbanism course but didn't pass in one of the tests. I couldn't be happier about never passing a test.", "I am currently re-reading Blink by Malcolm Gladwell.","John Maeda's Laws of simplicity is one of my favourite design books.","I believe in Rams' Less but Better motto and try to incorporate it in my routine. I am currently listing all my possessions so I can cut it down to 300 objects. Wish me luck!","I'm only 1,76m tall but I played volleyball in school for over 10 years. I even considered going professional but accidentally stumbled upon design. I'm now back at playing volleyball (just for fun) every Monday and Wednesday 🏐","Thin-crust pizza is my spiritual food 🍕","I started messing with Photoshop and After Effects when I was 12. I made signs and avatars for peers in a web forum for sharing pirate software and films. Getting access to those tools was how I got into design. Today I pay for all my software licenses but aim on making good tools accessible for everyone","My website has been mostly white, black and grey since it's first version in 2009. This is an experiment in colour and has several accessibility issues. I'm currently working on a new, more accessible version.","The characteristic I admire the most in a person is their willingness to change their mind about a subject. It brings me hope about our future living in society.","Besides Brazil, people also access this website from France, the UK, the US, India and Australia. Thanks a lot for visiting it too :)", "I've been away from Facebook since June 2017. My mental health thanks me everyday for making that move.", "Portuguese author Valter Hugo Mãe portraits the concept of humanity as a cultural-intellectual construction greater than animal we are born. I'm stoked about making this cultural-intellectual construction thrive.","My favourite trip was to Peru in 2008. It also happens to be the trip I took the least amount of photographs 🤔"];

  $('.factbutton').click(function() {

    randomNum = Math.floor(Math.random() * quotes.length);

    $("#quote").text(quotes[randomNum]);
});

});