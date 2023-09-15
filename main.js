const btnPlaySweetChild = document.querySelector('#btn-sweetChild');
const btnPlayHotelCalifornia = document.querySelector('#btn-hotelCalifornia');
const btnPlayBohemian = document.querySelector('#btn-bohemian');

const audSweet = document.querySelector('#aud-sweet');
const audEagles = document.querySelector('#aud-hotelCalifornia');
const audBohemian = document.querySelector('#aud-bohemian');

function tocaSweet() {
    audSweet.play();
}

btnPlaySweetChild.onclick = tocaSweet;

function tocaCalifornia() {
    audEagles.play();
}

btnPlayHotelCalifornia.onclick = tocaCalifornia;

function tocaBohemian() {
    audBohemian.play();
}

btnPlayBohemian.onclick = tocaBohemian;

