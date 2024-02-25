
document.addEventListener('DOMContentLoaded', (event) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-scroll');
      } else {
        entry.target.classList.remove('animate-scroll');
      }
    });
  }, {
    threshold: 0.4 // Trigger when 10% of the target is visible
  });

  const aboutMeSection = document.querySelector('#aboutme .scroll');
  observer.observe(aboutMeSection);
});

