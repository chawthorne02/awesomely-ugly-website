const changeImage = () => image.src="https://c.tenor.com/SxnzRXwpPlMAAAAC/guy-backflip.gif";

const btn = document.querySelector('.backflip');
const image = document.querySelector('.spiderman');

btn.addEventListener('click', changeImage);
