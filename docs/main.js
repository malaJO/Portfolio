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

//playAnim('Slovo_J', 'SlovoJ', 0); //Plays animation is the element is in view, in case user goes directly to page*/



/*Checks how log user has scrolled on Y axis and triggers animation if scrolled enough*/
/*function startAnim(){
 var scrollY = window.pageYOffset || document.documentElement.scrollTop;
 //console.log(scrollY);

  if (scrollY>800 && scrollY<1400) { /*If user scrolled enough to see the top or bottom of the element that is animated, then animation starts*/

  /*var anima = document.getElementById('Slovo_J');
  anima.classList.add('SlovoJ');
/*} else if (scrollY>1400 && scrollY<2700) {
  var anima1 = document.getElementById('Sunshade_meaty');
  anima1.classList.add('Sunshade_meaty');
  var anima2 = document.getElementById('Sunshade_yellow');
  anima2.classList.add('Sunshade_yellow');*/
/*} else if (scrollY>3100 && scrollY<3900) {
  var anima3 = document.getElementById('Chart_colour');
  anima3.classList.add('Chart_colour');
}

}*/


//window.addEventListener('scroll', startAnim); /*Checks how log user has scrolled on Y axis and triggers animation if scrolled enough*/


//playAnim('Sunshade_meaty', 'Sunshade_meaty', 1);
//playAnim('Sunshade_yellow', 'Sunshade_yellow', 1);
//playAnim('Chart_colour', 'Chart_colour', 2);


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

}
}




/*Adjusting top margin for the MountainFjord illustration*/

function calcHeight () {

  var imgMF = document.getElementsByClassName('AboutImg')[0];
  var renderedHeight = imgMF.clientHeight;
  var positionOnPage = imgMF.y;
  var skyHeight = document.getElementsByClassName('Sky');
  var textBoxes = document.getElementsByClassName('selectbright');
  var headingHeight = textBoxes[1];





if ((testScreen < '768') || (winWidth < '768')) {


  var calcHeight = positionOnPage + renderedHeight/2;
   skyHeight[0].style.height = calcHeight + 'px';


} else {

var textExplain = document.getElementsByClassName('explain');
var newDiv = document.createElement('div');
var parentToDiv = document.getElementsByClassName('ProjPic');
parentToDiv[0].insertBefore(newDiv, parentToDiv[0].childNodes[0]);
newDiv.style.height = textExplain[0].clientHeight + 'px';
parentToDiv[0].style.paddingTop = '2rem';


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

//triggering all the modals - didn't know a better way to assemble this under one command, without triggering all the modals at the same time

btn0.onclick = function() {
  modall[0].style.display = 'block';
}

btn1.onclick = function() {
  modall[1].style.display = 'block';
}

btn2.onclick = function() {
  modall[2].style.display = 'block';
}

btn3.onclick = function() {
  modall[3].style.display = 'block';
}

btn4.onclick = function() {
  modall[4].style.display = 'block';
}

btn5.onclick = function() {
  modall[5].style.display = 'block';
}


//Closing modals either on 'x' button or clicking outside modal is done in the last function, checking for className = modal




/*Displaying and animating navbar objects for mobile/narrow/small displays*/
var dropdownButton = document.getElementsByClassName('dropBtn');
var dropContent = document.getElementsByClassName('dropupContent');
var navLinks = document.getElementsByClassName('drpupLink');
var touch = document.getElementsByClassName('KeepInTouch');
console.log(touch);

function setDisplayNone (which) {
  which.style.display = 'none';
}

function displaying() {
  if ((testScreen < '768') || (winWidth < '768')) {
  if (dropContent[0].style.display != "block") {
    dropContent[0].style.display = 'block';
    dropContent[0].classList.add('rise');
  } else if (dropContent[0].style.display != "none") {
    dropContent[0].classList.remove('rise');
    setDisplayNone(dropContent[0]);

  }
}

}

function displaying1() {
  if ((testScreen < '768') || (winWidth < '768')) {
  if (dropContent[1].style.display != "inline-block") {
    dropContent[1].style.display = 'inline-block';
    dropContent[1].classList.add('rise');
    setDisplayNone(dropContent[0]);
  } else if (dropContent[1].style.display != "none") {
    setDisplayNone(dropContent[1]);
    dropContent[1].classList.remove('rise');
  }
}
}

/*
} else if (navLinks[0].display.style != "none" ||
          navLinks[1].display.style != "none" ||
          navLinks[2].display.style != "none" ||
          navLinks[3].display.style != "none" ||
          navLinks[4].display.style != "none" ||
          navLinks[5].display.style != "none" ){
            setDisplayNone(dropContent[0]);

          } else if (touch[0].display.style != "none" ||
                    touch[1].display.style != "none" ||
                    touch[2].display.style != "none" ||
                    touch[3].display.style != "none" ||
                    touch[4].display.style != "none" ){
            setDisplayNone(dropContent[1]);
*/

document.onclick = function(event) {
//console.log(event.target.className);
//console.log(event.target);
 if (event.target.id === 'modall' ||
     event.target.id === 'close' ||
     event.target.className === 'projtext' ||
     event.target.className === 'abouticon' ||
     event.target.className === 'navicon') {
      // console.log("doing");
   for (i=0; i<modall.length; i++) {
    modall[i].style.display = 'none';
   }
} else if ((testScreen < '768') || (winWidth < '768')) {
   if (event.target.className === 'projtext' ||
       event.target.className === 'projicon' ||
     event.target.className === 'mobileShow' && 'mobileText' ) {

     setDisplayNone(dropContent[0]);
     //setDisplayNone(dropContent[1]);
  }
}
}

dropdownButton[0].addEventListener('click', displaying);
dropdownButton[1].addEventListener('click', displaying1);
