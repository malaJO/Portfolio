/*Checks if element is in view/window and plays animation if visible*/
function playAnim(x, y, i) {
  var anim = document.getElementsByClassName('animdemo')[i];
  var rect = anim.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;
  //console.log(anim);
  //console.log(rect);

  var isVisible = (elemTop >= 0) && (elemBottom < window.innerHeight);
  if (isVisible === true) {
    var anima = document.getElementById(x);
    console.log(anima);
    anima.classList.add(y);
    };
}

playAnim('Slovo_J', 'SlovoJ', 0); //Plays animation is the element is in view, in case user goes directly to page*/



/*Checks how log user has scrolled on Y axis and triggers animation if scrolled enough*/
function startAnim(){
 var scrollY = window.pageYOffset || document.documentElement.scrollTop;
 console.log(scrollY);

  if (scrollY>800 && scrollY<1400) { /*If user scrolled enough to see the top or bottom of the element that is animated, then animation starts*/

  var anima = document.getElementById('Slovo_J');
  anima.classList.add('SlovoJ');
} else if (scrollY>1400 && scrollY<2700) {
  var anima1 = document.getElementById('Sunshade_meaty');
  anima1.classList.add('Sunshade_meaty');
  var anima2 = document.getElementById('Sunshade_yellow');
  anima2.classList.add('Sunshade_yellow');
} else if (scrollY>3100 && scrollY<3900) {
  var anima3 = document.getElementById('Chart_colour');
  anima3.classList.add('Chart_colour');
}

}


window.addEventListener('scroll', startAnim); /*Checks how log user has scrolled on Y axis and triggers animation if scrolled enough*/


playAnim('Sunshade_meaty', 'Sunshade_meaty', 1);
playAnim('Sunshade_yellow', 'Sunshade_yellow', 1);
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




var modals = document.getElementsByClassName('myModall');
console.log(modals);

for (i=0; i<modals.length; i++) {
  var btn = document.getElementsByClassName("myBtn")[i];
  var span = document.getElementsByClassName("close")[i];
  var modall = modals[i];

  console.log(btn);
  console.log(span);
  console.log(modall);

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
      modall.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modall.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modall) {
          modall.style.display = "none";
      }
  }

}
