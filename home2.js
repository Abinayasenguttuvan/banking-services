// ===== PAGE LOADER =====
window.addEventListener("load",()=>{
    const loader=document.getElementById("loader");
    loader.style.opacity="0";
    setTimeout(()=>loader.remove(),800);
  });

window.addEventListener("load", () => {
    const loader = document.getElementById("page-loader");
    loader.style.opacity = "0";
    loader.style.transition = "opacity .2s ease";
    setTimeout(() => loader.remove(), 900);
  });


/* Scroll reveal */
const reveals = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
            el.style.transition = '1s ease';
        }
    });
});

/* Particles */
particlesJS("particles-js",{
  particles:{
    number:{value:60},
    size:{value:3},
    move:{speed:1},
    line_linked:{enable:false},
    color:{value:"#ffffff"}
  }
});

/* ================= PAGE LOAD ANIMATIONS ================= */

window.addEventListener("load", () => {

    /* FEATURED CARDS STAGGER */
    const cards = document.querySelectorAll(".featured-card");
    cards.forEach((card, index) => {
        card.style.animation = `slideUp 1s ease forwards`;
        card.style.animationDelay = `${index * 0.3 + 0.6}s`;
    });

    /* MAIN CONTENT */
    const post = document.querySelector(".post");
    if(post){
        post.style.animation = "slideLeft 1s ease forwards";
        post.style.animationDelay = "0.8s";
    }

    /* SIDEBAR BOXES */
    const sideBoxes = document.querySelectorAll(".sidebar-box");
    sideBoxes.forEach((box, index) => {
        box.style.animation = "slideRight 1s ease forwards";
        box.style.animationDelay = `${index * 0.25 + 0.9}s`;
    });

    /* CTA */
    const cta = document.querySelector(".cta");
    if(cta){
        cta.style.animation = "slideUp 1.1s ease forwards";
        cta.style.animationDelay = "1s";
    }

});

/* ================= PARTICLES ================= */
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        size: { value: 3 },
        move: { speed: 1.2 },
        opacity: { value: 0.6 },
        line_linked: { enable: false },
        color: { value: "#ffffff" }
    }
});

/* ================= PARTICLES (HERO) ================= */
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        size: { value: 3 },
        move: { speed: 1.2 },
        opacity: { value: 0.6 },
        line_linked: { enable: false },
        color: { value: "#ffffff" }
    }
});

/* ================= CTA PARTICLES ================= */
particlesJS("cta-particles", {
    particles: {
        number: { value: 120 },
        color: { value: "#3f8cff" },
        size: { value: 3, random: true },
        opacity: { value: 0.6, random: true },
        move: { speed: 2.5, random: true },
        line_linked: {
            enable: true,
            distance: 120,
            color: "#3f8cff",
            opacity: 0.25
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" }
        }
    }
});

/* ================= SCROLL OBSERVER ================= */
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // run once
            }
        });
    },
    { threshold: 0.25 }
);

/* observe elements */
document.querySelectorAll(
    ".featured-card, .post, .sidebar-box, .cta"
).forEach(el => observer.observe(el));



