const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

document.querySelectorAll('.faq-q').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const answer = button.nextElementSibling;
    answer.classList.toggle('open');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
