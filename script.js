
//BLURRING EFFECT WITH COUNT DOWN EFFECT 
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const loadinglink = document.querySelector('.loading-link')
let load = 0

let int = setInterval(blurring, 30)

function blurring() {
  load++

  if (load > 99 ) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
  loadinglink.style.filter  = `blur(${scale(load, 0, 100, 40, 0)}px)`
  
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
//mouse rippl click on efect first page index link 
document.onclick =() =>
applyCursorRippleEffect(Event);

function applyCursorRippleEffect(e) {
  const ripple =
  document.createElement("div");
  
    ripple.className="ripple";
    document.body.appendChild(ripple);

  ripple.style.left = '${e.clientX}px';
  ripple.style.top = '${e.clientY}px';
  ripple.style.animation = 'ripple-effect .20s linear';
  ripple.onanimationend = () => {
    document.body.removeChild(ripple);

  }
}
//optional but we did it 

/*const all =
document.body.getElementsByTagName("*");
for ( b = 0; i < all.length; ++b) {
  all[b].onclick = (event) =>
  event.stopPropagation();
}
*/

/*Startbutton animation cross on click */ 
const startbutton = document.querySelector('.startbutton');

  startbutton.addEventListener('click',function () {
     this.classList.toggle('is-active');
});
