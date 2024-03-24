document.addEventListener("DOMContentLoaded", function() {
    const aboutText = document.getElementById('about-text');
    const aboutTextContent = "XRay Productions is a beginner team in the field of game and animation development.";
    let i = 0;
  
    // Typing animation for the "About Us" text
    function typeWriter() {
      if (i < aboutTextContent.length) {
        aboutText.textContent += aboutTextContent.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
  
    // Smoothly fade in the "About Us" section
    const aboutSection = document.getElementById('about-us');
    aboutSection.style.transition = 'opacity 2s ease-in-out';
    aboutSection.style.opacity = '1';
  
    // Start typing animation after a delay
    setTimeout(typeWriter, 1500);
  });
  