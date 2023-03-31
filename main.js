import gsap from "gsap"

/* gsap.to(".box",{
  x: 500,
  duration: 4,
  opacity: 1,
  scale:1,
}) */

let allbox = document.querySelectorAll(".box")

gsap.to(allbox, {
  opacity: 1,
  x: 500,
  duration: 2,
  stagger:1,
  scale:1,
})

let x=0,
    y=0;

window.addEventListener('mousemove', (e)=>{
  x = e.clientX
  y = e.clientY
})

let round = document.querySelector('.round')

gsap.to(round, {
  repeat:-1,
  duration:0.0003,

  onRepeat:()=>{
    gsap.set(round,{
      css:{
        top:y,
        left:x
      }
    })
  }
})