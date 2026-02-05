const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - 150) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});

// Scroll animations
const animatedSections = document.querySelectorAll('.section-animate');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.2
});

animatedSections.forEach(section => {
    sectionObserver.observe(section);
});

// About Me card animation
const aboutCard = document.querySelector('.about-card-animate');

const aboutObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.2
});

if (aboutCard) {
    aboutObserver.observe(aboutCard);
}

document.querySelector(".contact-form")
  .addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent (demo)");
  });

  document.addEventListener("DOMContentLoaded", () => {
  const contactCard = document.querySelector(".contact-card-animate");

  if (!contactCard) return; // safety check

  const contactObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          contactObserver.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.2 }
  );

  contactObserver.observe(contactCard);

  
});

document.addEventListener("DOMContentLoaded", () => {
const aboutCard = document.querySelector(".about-card-animate");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

observer.observe(aboutCard);


  
});
