const btn = document.querySelector('#ham-ico');
const  nav = document.querySelector('#nav-menu');


btn.addEventListener('click', () => {

	nav.classList.toggle('show');

});