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

  

  /* ================= PARTICLE BACKGROUND ================= */
const canvas = document.createElement("canvas");
canvas.className = "particles";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");
let w, h;
const particles = [];

function resize(){
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

for(let i=0;i<90;i++){
  particles.push({
    x: Math.random()*w,
    y: Math.random()*h,
    r: Math.random()*2+1,
    dx: Math.random()*.6,
    dy: Math.random()*.6
  });
}

function animate(){
  ctx.clearRect(0,0,w,h);
  particles.forEach(p=>{
    p.x+=p.dx;
    p.y+=p.dy;
    if(p.x>w||p.x<0) p.dx*=-1;
    if(p.y>h||p.y<0) p.dy*=-1;
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle="rgba(0,245,255,.6)";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

/* ================= SCROLL REVEAL ================= */
const revealEls = document.querySelectorAll(".feature-card,.card");

window.addEventListener("scroll",()=>{
  revealEls.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});
