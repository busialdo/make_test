const MODELKI = document.querySelectorAll('.modelki img');
const guziki = document.querySelector('.guziki');
const close = document.querySelector('.close');
const arrow_left = document.querySelector('.arrow_left');
const arrow_right = document.querySelector('.arrow_right');
const guzik_img = document.querySelector('.guzik_img');


let currentImgIndex;

MODELKI.forEach((modelki, index) => {
    modelki.addEventListener('click', (e) => {
        guziki.classList.remove('hidden');
        guzik_img.src = e.target.src;
        currentImgIndex = index;
    });
});

close.addEventListener('click', () => {
    guziki.classList.add("hidden");
});

arrow_right.addEventListener('click', () => {
    currentImgIndex = currentImgIndex + 1;
    guzik_img.src = MODELKI[currentImgIndex].src;
});

arrow_left.addEventListener('click', () => {
    currentImgIndex = currentImgIndex - 1;
    guzik_img.src = MODELKI[currentImgIndex].src;
});




document.getElementById('view1').addEventListener('click', function(event) {
    document.getElementById('Regulamin').scrollIntoView({ behavior: 'smooth' }); 
});

document.getElementById('view2').addEventListener('click', function(event) {
    document.getElementById('zalecenia').scrollIntoView({ behavior: 'smooth' }); 
});

document.getElementById('view3').addEventListener('click', function(event) {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' }); 
});

document.getElementById('view4').addEventListener('click', function(event) {
    document.getElementById('Kontakt').scrollIntoView({ behavior: 'smooth' }); 
});




let animacja = gsap.timeline()

animacja.from("header",{
    y:-100,
    opacity:0,
    duration:1.3,
})

gsap.from("#ula123" ,{
    x:-300,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#ula123",
        scroller:"body",
        start:"top 85%",
        end:"top 35%",
        scrub: true,
        toggleActiond: "restart none none none none",
    }
})

gsap.from("#witam888" ,{
    x:-300,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#witam888",
        scroller:"body",
        start:"top 85%",
        end:"top 35%",
        scrub: true,
        toggleActiond: "restart none none none none",
    }
})