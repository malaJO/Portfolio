var anim = document.getElementsByClassName('animdemo')[0];

/*Checks if element is in view/window and plays animation if visible*/
function isInView() {
    var rect = anim.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = (elemTop >= 0) && (elemBottom < window.innerHeight);
    if (isVisible === true) {
      playAnim();
    };
}

/*Plays animation is the element is in view, in case user goes directly to page*/

function playAnim() {
  if (isInView(anim)) {
  startAnim();
  }
}


/*Animation triggers by adding a class to svg element*/
function startAnim() {
  var anima = document.getElementById('Slovo_J');
  anima.classList.add('SlovoJ');
  }

/*Checks how log user has scrolled on Y axis and triggers animation if scrolled enough*/
function howScroll(){
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

  console.log('Scroll X:'+scrollX+' Scroll Y:'+scrollY)

    if (scrollY>800 && scrollY<2000) { /*If user scrolled enough to see the top or bottom of the element that is animated, then animation starts*/
      startAnim();
    }
}


window.addEventListener("scroll", howScroll); //activates howScroll function when user scrols
