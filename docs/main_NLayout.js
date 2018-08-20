function randomlly(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomAngle(min, max) {
  return Math.random() * (max - min) + min;
}

var columns = document.getElementsByClassName('col-rand');
var sizes = ['col-md-2', 'col-md-4', 'col-md-8', 'col-md-12'];
var allImg = document.getElementsByClassName('rot');


for (var i=0; i<columns.length; i++) {
  var chosenSize = randomlly(sizes);
//  console.log(chosenSize);
  columns[i].classList.add(chosenSize);
 console.log(allImg);
var angle = getRandomAngle(-6,6);
var rotation = "rotate(" + angle + "deg)";
console.log(rotation);
  allImg[i].style.transform = rotation;
}
