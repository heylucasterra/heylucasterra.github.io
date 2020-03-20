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