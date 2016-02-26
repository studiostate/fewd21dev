
// these are my click events 
document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;

//function if made gray
function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
}

//function if white
function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}