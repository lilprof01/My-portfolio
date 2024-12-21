// Navbar code for responsive views
let menuIcon = document.getElementById('hamburger');

menuIcon.addEventListener('click', function openNav (){
  var menuItems = document.getElementById('menu-items');

  menuItems.style.visibility = 'visible';
})

menuIcon.addEventListener("mouseover", ()=>{
  innercursor.classList.add("grow");
  outtercursor.classList.add("shrink");
})

menuIcon.addEventListener("mouseleave", ()=>{
  innercursor.classList.remove("grow");
  outtercursor.classList.remove("shrink");
})

let cancelIcon = document.getElementById('cancel');

cancelIcon.addEventListener('click', function closeNav (){
  var menuItems = document.getElementById('menu-items');

  menuItems.style.visibility = 'hidden';
})

cancelIcon.addEventListener("mouseover", ()=>{
  innercursor.classList.add("grow");
  outtercursor.classList.add("shrink");
})

cancelIcon.addEventListener("mouseleave", ()=>{
  innercursor.classList.remove("grow");
  outtercursor.classList.remove("shrink");
})

// cursor animation code
let innercursor = document.querySelector(".inner-cursor");
let outtercursor = document.querySelector(".outter-cursor");
let blurFilter = document.querySelector(".blur");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innercursor.style.left = `${x}px`;
  innercursor.style.top = `${y}px`;
  outtercursor.style.left = `${x}px`;
  outtercursor.style.top = `${y}px`;
  blurFilter.style.left = `${x}px`;
  blurFilter.style.top = `${y}px`;
}

let link = Array.from(document.querySelectorAll("a"));
let buttons = Array.from(document.querySelectorAll("button"))

link.forEach(link => {
  link.addEventListener("mouseover", ()=>{
    innercursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", ()=>{
    innercursor.classList.remove("grow");
  })
  link.addEventListener("mouseover", ()=>{
    outtercursor.classList.add("shrink");
  });
  link.addEventListener("mouseleave", ()=>{
    outtercursor.classList.remove("shrink");
  })
})

buttons.forEach(buttons => {
  buttons.addEventListener("mouseover", ()=>{
    innercursor.classList.add("grow");
  });
  buttons.addEventListener("mouseleave", ()=>{
    innercursor.classList.remove("grow");
  })
  buttons.addEventListener("mouseover", ()=>{
    outtercursor.classList.add("shrink");
  });
  buttons.addEventListener("mouseleave", ()=>{
    outtercursor.classList.remove("shrink");
  })
})

// Add some interactivity
document.addEventListener('DOMContentLoaded', () => {
  // Animate skill bars
  const skillBars = document.querySelectorAll('.progress-bar');
  skillBars.forEach(bar => {
    const progress = bar.dataset.progress;
    bar.style.setProperty('--progress', `${progress}%`);
  });
});