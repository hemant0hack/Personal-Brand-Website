emailjs.init("b5ms7ZSwqQMqT2kKl");

const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navLinks = document.getElementById('navLinks');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
}

if (navLinks) {
  const links = navLinks.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('active');
      const icon = mobileMenuToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
}

const appleMessages = [
  "Think different.",
  "Simplicity is the ultimate sophistication.",
  "Designed by Apple in California.",
  "Your brand. Your rules.",
  "Privacy. That's iPhone.",
  "Creativity goes on.",
  "Apple brand essence.",
  "One more thing.."
];

const messageEl = document.getElementById('appleMessage');
const refreshBtn = document.getElementById('refreshAppleMsg');

function updateMessage() {
  const random = Math.floor(Math.random() * appleMessages.length);
  messageEl.textContent = appleMessages[random];
}

if (refreshBtn) {
  refreshBtn.addEventListener('click', updateMessage);
}

const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const templateParams = {
      from_name: name,
      from_email: email,
      to_email: email,
      subject: subject,
      message: message,
      reply_to: email
    };

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    formStatus.className = 'form-status loading';
    formStatus.textContent = 'Sending your message...';

    emailjs.send('service_83vvns3', 'template_nrely9f', templateParams)
      .then(function (response) {
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Message sent successfully! We\'ll get back to you soon.';
        contactForm.reset();
      })
      .catch(function (error) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Error sending message. Please try again.';
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';

        setTimeout(function () {
          if (formStatus.classList.contains('success')) {
            formStatus.style.display = 'none';
          }
        }, 5000);
      });
  });
}

const ctaButtons = document.querySelectorAll('.btn-primary, .btn-link');
ctaButtons.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    if (btn.getAttribute('href') === '#contact') return;
    e.preventDefault();
    const original = btn.textContent;
    if (btn.classList.contains('btn-primary')) {
      btn.textContent = '?';
      setTimeout(function () {
        btn.textContent = original;
      }, 600);
    }
  });
});

if (messageEl) {
  messageEl.textContent = appleMessages[0];
}

console.log('Apple brand site loaded successfully.');
