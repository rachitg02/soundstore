import confetti from 'canvas-confetti';

export const runFireworks= ()=>{
    var end = Date.now() + (4 * 1000);

// go Buckeyes!
var colors = ['#f55d5d', '#4e03fc'];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}());
}