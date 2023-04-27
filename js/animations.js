var s1TL = anime.timeline({
  duration: 0,
  delay: 0,
  easing: 'easeOutExpo',
  autoplay: false,
});

var s1logoreverse = anime ({
  targets: '.section1-icons',
  translateX: [0, 1000],
  autoplay:false,
})

s1TL
  .add({
    targets: '.section1-icons',
    translateX: [1000, 0],
    duration: 500,
    opacity: 1,
    easing: 'spring',
    delay: anime.stagger(300),
})

var s2TL = anime.timeline({
  duration: 1000,
  delay: 0,
  easing: 'easeOutExpo',
  autoplay: false,
});

s2TL

  .add ({
    targets: '.section2-icons',
    translateY: [1000, 0],
    duration: 500,
    opacity: 1,
    easing: 'spring',
    delay: anime.stagger(100),
  })


// anime({
//   targets: 'polygon',
//   points: [
//       { value: '148.61 0 238.35 0 233.37 533.04 148.61 533.04 148.61 0' },
//       { value: '344.71 533.04 344.71 0 0 266.52 310.07 502.37 344.71 533.04' }
//   ],
//   easing: 'linear',
//   duration: 800,
//   // delay: 1000,

//   afterLoad: function (origin, destination, direction) {
//       // play animation after section 2 loads
//       if (destination.index == 1) {
//           chart.options.animation = true
//       }
//     }
// })