$(document).ready(function() {

  var quotes = ["Who agrees, who disagrees, who silently condones with this system? Who’s ignorant of it?", "What are the long-term effects of this?", "What external forces are at work in this system", "How can this system be misused? Can it be used to cheat, to steal, to confuse, to polarize, to alienate, to dominate, to terrify?", "We tend to treat symptoms, rather than causes.\n Is this the “cure” for something? What causes this something your solution tries to address?", "Who might want to misuse it? What could they gain by it?", "Who is (un)intentionally outside of this system? What do they think of it?"];

  $('.factbutton').click(function() {

    randomNum = Math.floor(Math.random() * quotes.length);

    $("#quote").text(quotes[randomNum]);
});

});

// $('#toggle').click(function() {
// 	$('body').toggleClass('night');
// 	$('header').toggleClass('night');
// 	$('.title').toggleClass('night');
// })

const toggle = document.querySelector('#toggle');
const header = document.querySelector('header');
const title = document.querySelector('.title');
const body = document.querySelector('body');

function toggleClass() {
	toggle.classList.toggle('night');
	header.classList.toggle('night');
	title.classList.toggle('night');
	body.classList.toggle('night');
}

toggle.addEventListener('click', toggleClass);