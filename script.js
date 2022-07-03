let dayOne = document.getElementById('pop-up-one');
let dayTwo = document.getElementById('pop-up-two');
let dayThree = document.getElementById('pop-up-three');
let dayFour = document.getElementById('pop-up-four');
let dayFive = document.getElementById('pop-up-five');
let daySix = document.getElementById('pop-up-six');
let daySeven = document.getElementById('pop-up-seven');

let popUps = document.getElementsByClassName('pop-up');


/* let Mon = document.getElementsByClassName('mon');

Mon.addEventListener('mouseover', function handleMouseOver() {
    dayOne.style.visibility = 'visible';
  });

Mon.addEventListener('mouseout', function handleMouseOut() {
    dayOne.style.visibility = 'hidden';
}); */

let monday = document.getElementsByClassName('mon');

/* dayOne.style.display = "none"
dayTwo.style.display = "none"
dayThree.style.display = "none"
dayFour.style.display = 'none'
dayFive.style.display = "none"
daySix.style.display = "none"
daySeven.style.display = "none" */

function showItem() {
    dayOne.style.display = 'block';
}

monday.addEventListener('mouseover', showItem)