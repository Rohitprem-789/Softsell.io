document.querySelector('button').addEventListener('click', function() {
    alert("Thank you for clicking!");
});
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
