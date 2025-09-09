// Typewriter effect
const textArray = ["welcome to my portfolio", "I am HARSH SUMAN","I am an AI Developer", "I love coding", "I build web apps"];
const typingSpeed = 100; const erasingSpeed = 50; const delayBetweenWords = 1500;
let textIndex = 0; 
let charIndex = 0;
function type() {
   const element = document.getElementById("typewriter");
    if (charIndex < textArray[textIndex].length) {
       element.textContent += textArray[textIndex].charAt(charIndex); charIndex++;
        setTimeout(type, typingSpeed);
       } 
       else { 
        setTimeout(erase, delayBetweenWords);
       } }
function erase() { 
  const element = document.getElementById("typewriter");
   if (charIndex > 0) {
     element.textContent = textArray[textIndex].substring(0, charIndex - 1); 
     charIndex--; setTimeout(erase, erasingSpeed); 
    } 
    else {
       textIndex = (textIndex + 1) % textArray.length; setTimeout(type, typingSpeed);
       } }
document.addEventListener("DOMContentLoaded", () => { setTimeout(type, delayBetweenWords); 
  
});
// Form submission handling
document.getElementById('contactForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  // Optionally, show a loading state here

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      alert('Thank you! Your request has been sent to the admin.');
      form.reset();
    } else {
      alert('There was a problem submitting your request. Please try again.');
    }
  } catch (error) {
    alert('There was a problem submitting your request. Please try again.');
  }
});

// Mobile menu handler
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpenIcon = document.getElementById('menu-open-icon');
  const menuCloseIcon = document.getElementById('menu-close-icon');

  if (menuBtn && mobileMenu && menuOpenIcon && menuCloseIcon) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      menuOpenIcon.classList.toggle('hidden');
      menuCloseIcon.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('active'));
    });
  }
});

// Toggle navigation menu on small screens

const toggleBtn = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("hidden");
  });

 const scrollBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  

