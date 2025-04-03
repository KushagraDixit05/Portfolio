// Typing Effect
document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing");
    const phrases = [
      "Exploring technology.",
      "Building innovative solutions.",
      "Showcasing my projects.",
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function type() {
      const currentPhrase = phrases[phraseIndex];
      if (isDeleting) {
        typingElement.textContent = currentPhrase.substring(0, charIndex--);
      } else {
        typingElement.textContent = currentPhrase.substring(0, charIndex++);
      }
  
      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, 1000); 
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; 
        setTimeout(type, 500); 
      } else {
        setTimeout(type, isDeleting ? 50 : 100);
      }
    }
  
    type();
  });
  

  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }); 


document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
});