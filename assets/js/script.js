// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav .button').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      window.location.href = targetId; // For links to other pages
    }
  });
});

// Highlight active navigation link
const setActiveNavLink = () => {
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('nav .button').forEach(link => {
    if (link.getAttribute('href').includes(currentPath)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};
setActiveNavLink();

// Dynamic calendar for booking page
if (document.querySelector('#booking-date')) {
  const bookingDate = document.querySelector('#booking-date');
  const today = new Date().toISOString().split('T')[0];
  bookingDate.setAttribute('min', today);
}

// Form validation for booking
const bookingForm = document.querySelector('#booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const date = document.querySelector('#booking-date').value;

    if (!name || !phone || !date) {
      alert('कृपया सभी आवश्यक जानकारी भरें।');
      return false;
    }
    alert('आपकी बुकिंग सफल रही। धन्यवाद!');
    bookingForm.reset();
  });
}

// Contact form submission
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#contact-name').value.trim();
    const message = document.querySelector('#contact-message').value.trim();

    if (!name || !message) {
      alert('कृपया अपना नाम और संदेश दर्ज करें।');
      return false;
    }
    alert('आपका संदेश भेज दिया गया है। धन्यवाद!');
    contactForm.reset();
  });
}

// Scroll-to-top button functionality
const scrollToTopButton = document.querySelector('#scroll-to-top');
if (scrollToTopButton) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });

  scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
