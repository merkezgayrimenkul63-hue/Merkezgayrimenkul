//==========================
// MERKEZ GAYRİMENKUL
// script.js
//==========================

// AOS
AOS.init({
    duration: 1000,
    once: true
});

// PRELOADER
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.opacity = "0";
        setTimeout(() => {
            preloader.style.display = "none";
        }, 500);
    }
});

// STICKY HEADER
const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#0b0b0b";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(0,0,0,.65)";
        header.style.boxShadow = "none";

    }

});

// SCROLL BUTTON
const scrollBtn = document.getElementById("scrollTop");

if (scrollBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            scrollBtn.style.display = "flex";

        } else {

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

// COUNTER
const counters = document.querySelectorAll(".counter");

const speed = 80;

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        const update = () => {

            const count = +counter.innerText.replace(/\D/g,'');

            const inc = target / speed;

            if(count < target){

                counter.innerText = Math.ceil(count + inc);

                setTimeout(update,20);

            }else{

                counter.innerText = target;

            }

        };

        update();

    });

};

const stats = document.querySelector(".stats");

if(stats){

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter();

observer.disconnect();

}

});

});

observer.observe(stats);

}

// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// CONTACT FORM
const form=document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.");

form.reset();

});

}

// ACTIVE MENU
const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

// HERO BUTTON EFFECT
document.querySelectorAll(".btn,.btn2").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0)";

});

});
