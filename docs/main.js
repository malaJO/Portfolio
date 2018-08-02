/*Checks screen width*/
var testScreen = screen.width;
var winWidth = window.innerWidth;


/*Checks if element is in view/window and plays animation if visible*/
function playAnim(x, y) {
  var anim = document.getElementsByClassName('animdemo')[0];
  //console.log(anim);
  var topBot = anim.getBoundingClientRect();
  //console.log(topBot);
  var elemTop = topBot.top;
  var elemBottom = topBot.bottom;



  var isVisible = (elemTop >= 0) && (elemBottom < window.innerHeight);
  if (isVisible === true) {
    var anima = document.getElementById(x);
    //console.log(anima);
    anima.classList.add(y);
    };
}

playAnim('Slovo_J', 'SlovoJ', 0); //Plays animation is the element is in view, in case user goes directly to page*/



/*Checks how log user has scrolled on Y axis and triggers animation if scrolled enough*/
function startAnim(){
 var scrollY = window.pageYOffset || document.documentElement.scrollTop;
 //console.log(scrollY);

  if (scrollY>800 && scrollY<1400) { /*If user scrolled enough to see the top or bottom of the element that is animated, then animation starts*/

  var anima = document.getElementById('Slovo_J');
  anima.classList.add('SlovoJ');
/*} else if (scrollY>1400 && scrollY<2700) {
  var anima1 = document.getElementById('Sunshade_meaty');
  anima1.classList.add('Sunshade_meaty');
  var anima2 = document.getElementById('Sunshade_yellow');
  anima2.classList.add('Sunshade_yellow');*/
} else if (scrollY>3100 && scrollY<3900) {
  var anima3 = document.getElementById('Chart_colour');
  anima3.classList.add('Chart_colour');
}

}


window.addEventListener('scroll', startAnim); /*Checks how log user has scrolled on Y axis and triggers animation if scrolled enough*/


//playAnim('Sunshade_meaty', 'Sunshade_meaty', 1);
//playAnim('Sunshade_yellow', 'Sunshade_yellow', 1);
playAnim('Chart_colour', 'Chart_colour', 2);


/* Randomizing font size and family, and background opacity main text in About section */
function randomlly(array){
    return array[Math.floor(Math.random() * array.length)];
  }

function textOpac () {
var size = ['1.2rem', '0.8rem', '1.1rem', '1rem', '0.9rem']
var font = ['Montserrat', 'Lora', 'Nunito', 'Roboto+Mono']

var spans = document.getElementsByTagName('span');
for (i=0; i<spans.length; i++) {
  var spanovi = spans[i];
spanovi.style.fontFamily = randomlly(font);
spanovi.style.fontSize = randomlly(size);
var Opac = 'rgba(255,255,255,' + Math.random() +')';
spanovi.style.backgroundColor = Opac;
var blackOpac = 'rgba(0,0,0,' + (Math.random()+0.5) +')'
spanovi.style.color = blackOpac;
//console.log(blackOpac);
}
}




/*Adjusting top margin for the MountainFjord illustration*/

function calcHeight () {

  var imgHeight = document.getElementsByClassName('AboutImg');
  var renderedHeight = imgHeight[0].clientHeight;
  var skyHeight = document.getElementsByClassName('Sky');
  //var textHeight = document.getElementsByClassName('AboutText');
  var textBoxes = document.getElementsByClassName('selectbright');
  var headingHeight = textBoxes[1];




if ((testScreen < '768') || (winWidth < '768')) {
  //var textOriginal = textHeight[0].scrollHeight;

  var calcHeight = renderedHeight/2 - 0.5 + textOriginal;
  skyHeight[0].style.height = calcHeight + 'px';

} else {

var textExplain = document.getElementsByClassName('explain');
var newDiv = document.createElement('div');
var parentToDiv = document.getElementsByClassName('ProjPic');
parentToDiv[0].insertBefore(newDiv, parentToDiv[0].childNodes[0]);
newDiv.style.height = textExplain[0].clientHeight + 'px';
parentToDiv[0].style.paddingTop = '2.4rem';

var textPosition = headingHeight.getBoundingClientRect();
textBoxes[0].style.height = textPosition.height + 'px';
//textBoxes[0].style.paddingTop = textBoxes[0].getBoundingClientRect().height/1.8 + 'px';


/*var calculatedTop = 'calc(' + window.innerHeight/2 + 'px - ' + textPosition.top + 'px)';
console.log(window.innerHeight);
console.log(textPosition.height);
console.log(textPosition.y);
textBoxes[0].style.bottom = '50vh';
//textBoxes[1].style.marginBottom = calculatedTop;
console.log(calculatedTop);
console.log(headingHeight);

var textExplain = document.getElementsByClassName('explain');
console.log('Else');
var newDiv = document.createElement('div');

var parentToDiv = document.getElementsByClassName('ProjPic');
parentToDiv[0].insertBefore(newDiv, parentToDiv[0].childNodes[0]);
console.log(imgHeight);
var headingHeightCalc = 'calc(50vh - ' + headingHeight + 'px)';
textBoxes[0].style.marginTop = headingHeightCalc; //adjusting heigt of the text about me
var newDivHeight = 'calc(' + headingHeight + 'px + ' + textExplain[0].clientHeight + 'px)';
console.log(newDivHeight);
newDiv.style.height = newDivHeight;
console.log(textExplain[0].clientHeight);*/

}
}

textOpac();
setTimeout (calcHeight, 300);




//Modals

//Getting all modal variables
var btn0 = document.getElementById('modalBtn1');
var btn1 = document.getElementById('modalBtn2');
var btn2 = document.getElementById('modalBtn3');
var btn3 = document.getElementById('modalBtn4');
var btn4 = document.getElementById('modalBtn5');
var btn5 = document.getElementById('modalBtn6');
var modall = document.getElementsByClassName('modall');
var endingModall = document.getElementsByClassName('close');


btn0.onclick = function() {
  modall[0].style.display = 'block';
}


document.onclick = function(event) {

  if (event.target.id === 'modall') {
    modall[0].style.display = 'none';
    modall[1].style.display = 'none';
    modall[2].style.display = 'none';
    modall[3].style.display = 'none';
    modall[4].style.display = 'none';
    modall[5].style.display = 'none';
  }
}


btn1.onclick = function() {
  modall[1].style.display = 'block';
}

endingModall[1].onclick = function() {
  modall[1].style.display = 'none'
}

btn2.onclick = function() {
  modall[2].style.display = 'block';
}

endingModall[2].onclick = function() {
  modall[2].style.display = 'none'
}

btn3.onclick = function() {
  modall[3].style.display = 'block';
}

endingModall[3].onclick = function() {
  modall[3].style.display = 'none'
}

btn4.onclick = function() {
  modall[4].style.display = 'block';
}

endingModall[4].onclick = function() {
  modall[4].style.display = 'none'
}

btn5.onclick = function() {
  modall[5].style.display = 'block';
}

endingModall[5].onclick = function() {
  modall[5].style.display = 'none'
}


//Adjusting size of the icons for Contact by width-height ratio
/*
var icon = document.getElementsByClassName('social');
var lastIcon = document.getElementById("LogoD");
*/
/*Changing icon size dependent on the screen size*/
/*lastIcon.onload = function () {
  for (i=0; i<icon.length; i++) {
    var widTH = icon[i].width;
    var heigHT = icon[i].height;
    //console.log(screen.width);

    if ((testScreen < '768') || (winWidth < '768')) {
      if (heigHT>widTH) {
        icon[i].style.height = '64px';
        icon[i].style.width = 'auto';
      } else {
        icon[i].style.height = 'auto';
        icon[i].style.width = '64px';
      }
    } else {
      if (heigHT>widTH) {
        icon[i].style.height = '96px';
        icon[i].style.width = 'auto';
      } else {
        icon[i].style.height = 'auto';
        icon[i].style.width = '96px';

      }
    }
}
}
*/
/*Positioning of nav meny*/
/*var navTop = document.getElementsByClassName('nav-link')[1].getBoundingClientRect().y;
var navLeft = document.getElementsByClassName('nav-link')[1].getBoundingClientRect().x;
var sideBar = document.getElementsByClassName('dropdown-content')[0];
var winHeight = window.innerHeight;



if ((screen.width < '768') && (winWidth > winHeight)) {
  var calcWidth = 'calc(10vw - ' + navLeft+ 'px)';
  sideBar.style.top = '-' + navTop + 'px';
  sideBar.style.left = calcWidth;
} else if ((screen.width < '768') && (winWidth < winHeight)) {
  var calcWidth = 'calc(10vw - ' + navLeft+ 'px)';
  sideBar.style.top = '-' + navTop/2 + 'px';
  sideBar.style.left = calcWidth;
} else {
  var calcWidth = 'calc(-' + navTop + 'px - 10px)';

  sideBar.style.top = calcWidth;
}

window.onclick = function(event) {
    if (event.target.className === 'dropdown-content') {
    sideBar.style.display = 'none';
    }
  }
*/

/*Button for dropdown content - we'll have to add a class to button .dropdown-clicked*/
var dropdownButton = document.getElementsByClassName('dropBtn');
var dropContent = document.getElementsByClassName('dropupContent');
var navLinks = document.getElementsByClassName('drpupLink');
var touch = document.getElementsByClassName('KeepInTouch');
console.log(dropdownButton);
console.log(navLinks);
console.log(dropContent);



function displaying() {
  var disp = dropContent[0].style.display;
  console.log(dropContent[0].style.display);
  if (disp != "block") {
    console.log('if');
    dropContent[0].style.display = 'block';
    dropContent[0].classList.remove('dropdown-clicked');
    console.log(dropContent[0]);
    for (i=0; i<navLinks.length; i++){
      navLinks[i].style.display = 'block';
      navLinks[i].classList.remove('dropdown-clicked');
    }

  } else {
    console.log('else');
    function setDisplayNone () {
      dropContent[0].style.display = 'none';
    }
    dropContent[0].classList.add('dropdown-clicked');
    setTimeout(setDisplayNone, 0);
    console.log(dropContent[0]);
  }

}

function displaying1() {
  var disp = dropContent[1].style.display;
  console.log(dropContent[1].style.display);
  if (disp != "inline-block") {
    console.log('if');
    dropContent[1].style.display = 'inline-block';
    dropContent[1].classList.remove('dropdown-clicked');
    console.log(dropContent[1]);
    for (i=0; i<touch.length; i++){
      touch[i].style.display = 'inline-block';
      touch[i].classList.remove('dropdown-clicked');
    }

  } else {
    console.log('else');
    function setDisplayNone () {
      dropContent[1].style.display = 'none';
    }
    dropContent[1].classList.add('dropdown-clicked');
    setTimeout(setDisplayNone, 0);
    console.log(dropContent[1]);
  }

}

dropdownButton[0].addEventListener('click', displaying);
dropdownButton[1].addEventListener('click', displaying1);
