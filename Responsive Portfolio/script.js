// TYPING EFFECT
new Typed('#element', {
    strings: ['Web Developer','Creative Designer','Tech Enthusiast'],
    typeSpeed: 60,
    backSpeed:40,
    loop:true
});

// ACTIVE NAV LINK
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if(scrollY >= sectionTop - 100){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});

// SCROLL REVEAL
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach(el=>{
    observer.observe(el);
});

// CONTACT BUTTON
function sendMessage(){
    alert("Message sent successfully! 😊");
}