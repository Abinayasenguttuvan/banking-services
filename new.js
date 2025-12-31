document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
  
      const rotateX = (y - centerY) / 18;
      const rotateY = (centerX - x) / 18;
  
      card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
  });

  

  gsap.registerPlugin(ScrollTrigger);

// INITIAL FLOAT
gsap.to(".credit-card", {
  y: -20,
  duration: 3,
  ease: "sine.inOut",
  repeat: -1,
  yoyo: true
});

// SCROLL-SYNCED 360° ROTATION
gsap.to(".credit-card", {
  rotateY: 360,
  rotateX: 15,
  scrollTrigger: {
    trigger: ".payment-section",
    start: "top center",
    end: "bottom center",
    scrub: 1
  },
  ease: "none"
});

// HOVER INTERACTION
document.querySelector(".credit-card").addEventListener("mouseenter", () => {
  gsap.to(".credit-card", {
    scale: 1.1,
    duration: 0.4,
    ease: "power3.out"
  });
});

document.querySelector(".credit-card").addEventListener("mouseleave", () => {
  gsap.to(".credit-card", {
    scale: 1,
    duration: 0.4,
    ease: "power3.out"
  });
});



gsap.registerPlugin(ScrollTrigger);

gsap.from(".step-card", {
  y: 60,
  opacity: 0,
  duration: 0.9,
  stagger: 0.25,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".steps-grid",
    start: "top 85%",
    toggleActions: "play none none reverse"
  }
});





const marquee = document.querySelector(".marquee-track");

let marqueeTween = gsap.to(marquee, {
  xPercent: -50,
  repeat: -1,
  duration: 30,
  ease: "linear"
});

/* Pause on hover */
document.querySelectorAll(".review-card").forEach(card => {
  card.addEventListener("mouseenter", () => marqueeTween.pause());
  card.addEventListener("mouseleave", () => marqueeTween.play());
});

/* Depth animation */
gsap.from(".review-card", {
  rotateY: 25,
  opacity: 0,
  z: -80,
  stagger: 0.15,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".testimonials-section",
    start: "top 80%"
  }
});


particlesJS("particles-js", {
    particles: {
      number: {
        value: 75,
        density: {
          enable: true,
          value_area: 900
        }
      },
  
      /* BLUE PARTICLES */
      color: {
        value: "#2f6df6"
      },
  
      shape: {
        type: "circle"
      },
  
      opacity: {
        value: 0.35,
        random: true
      },
  
      size: {
        value: 3,
        random: true
      },
  
      /* CONNECTING LINES */
      line_linked: {
        enable: true,
        distance: 160,
        color: "#2f6df6",
        opacity: 0.18,
        width: 1
      },
  
      move: {
        enable: true,
        speed: 1.3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out"
      }
    },
  
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        repulse: {
          distance: 120,
          duration: 0.4
        },
        push: {
          particles_nb: 2
        }
      }
    },
  
    retina_detect: true
  });
  

