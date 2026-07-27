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
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');

  if (!contactForm) return;

  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };

    if (!data.name || !data.email || !data.message) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Thank you! Your message has been sent.');
        form.reset();
      } else {
        const errorText = await response.text();
        console.error('Formspree error:', errorText);
        alert('There was a problem submitting your request. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('There was a problem submitting your request. Please try again.');
    }
  });
});

// Mobile menu handler
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuOpenIcon = document.getElementById('menu-open-icon');
  const menuCloseIcon = document.getElementById('menu-close-icon');

  if (!menuBtn || !mobileMenu || !menuOpenIcon || !menuCloseIcon) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuOpenIcon.classList.toggle('hidden', isOpen);
    menuCloseIcon.classList.toggle('hidden', !isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuOpenIcon.classList.remove('hidden');
      menuCloseIcon.classList.add('hidden');
      menuBtn.setAttribute('aria-expanded', 'false');
    });
  });
});

// Optional scroll button behavior, if present
const scrollBtn = document.getElementById('scrollToTopBtn');

if (scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });
}

