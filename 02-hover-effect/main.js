const container = document.querySelector('.container');

let tweenContainer = gsap.to(container, {
  borderRadius: '3%',
  width: '20vw',
  height: '26vw',
  duration: 1.5,
  // if paused: true -> effect doesn't work , when assi
  paused: true,
});

let textTween = gsap.to('p', {
  fontSize: '4rem',
  x: 0,
  duration: 2,
  paused: true,
});

container.addEventListener('mouseenter', () => {
  tweenContainer.play();
  textTween.play();
});

container.addEventListener('mouseleave', () => {
  tweenContainer.reverse();
  textTween.reverse();
});
