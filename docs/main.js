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

var size = ['1.2rem', '0.8rem', '0.7rem', '1rem', '1.4rem']
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


//Modals

//Getting all modal variables
var btn0 = document.getElementById('modalBtn1');
var btn1 = document.getElementById('modalBtn2');
var btn2 = document.getElementById('modalBtn3');
var btn3 = document.getElementById('modalBtn4');
var btn4 = document.getElementById('modalBtn5');
var modall = document.getElementsByClassName('modall');
var endingModall = document.getElementsByClassName('close');


btn0.onclick = function() {
  modall[0].style.display = 'block';
}

endingModall[0].onclick = function() {
  modall[0].style.display = 'none'
}

window.onclick = function(event) {
    if (event.target.className === 'modall' || event.target.className === 'modall modall-w') {
        modall[0].style.display = "none";
        modall[1].style.display = 'none';
        modall[2].style.display = 'none';
        modall[3].style.display = 'none';
        modall[4].style.display = 'none';
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


//Adjusting size of the icons for Contact by width-height ratio

var icon = document.getElementsByClassName('social');
var lastIcon = document.getElementById("LogoD");

/*Changing icon size dependent on the screen size*/
lastIcon.onload = function () {
  for (i=0; i<icon.length; i++) {
    var widTH = icon[i].width;
    var heigHT = icon[i].height;
    console.log(screen.width);

    if (screen.width <= '768') {
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
