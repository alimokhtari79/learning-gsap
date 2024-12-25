gsap.set('img', {
  y: '-100%',
});

gsap.set('p', {
  opacity: 0,
});

gsap.to('img', {
  y: '0',
  delay: 0.5,
  stagger: 0.1,
  scale: 1.3,
  duration: 3,
  ease: 'power4.out',
  onComplete: scaleAndFadeIn,
});

function scaleAndFadeIn() {
  gsap.to('img', {
    delay: 1.5,
    scale: 1,
    duration: 1,
  });

  gsap.fromTo(
    'p',
    {
      y: '-30',
      delay: 2,
    },
    {
      opacity: 1,
      y: '30',
      delay: 0.3,
      stagger: 0.5,
      duration: 1,
    }
  );
}
