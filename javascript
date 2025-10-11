// sticky menu + highlight section active
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);

    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
    sections.forEach(sec => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
            document.querySelectorAll('nav ul li a').forEach(a => a.classList.remove('active'));
            document.querySelector(`nav ul li a[href="#${sec.id}"]`).classList.add('active');
        }
    });
});
// animation fade-in scroll
const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);
const form = document.querySelector('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    let name = form.querySelector('input[name="name"]').value;
    let email = form.querySelector('input[name="email"]').value;
    let message = form.querySelector('textarea[name="message"]').value;

    if(name === "" || email === "" || message === ""){
        alert("Merci de remplir tous les champs !");
        return;
    }

    if(!validateEmail(email)){
        alert("Adresse email invalide !");
        return;
    }

    alert("Merci pour votre message ! Nous vous répondrons rapidement.");
    form.reset();
});

function validateEmail(email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.dataset.filter;
        portfolioItems.forEach(item => {
            if(category === 'all' || item.classList.contains(category)){
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
faders.forEach(fader => fader.classList.add('fade-in'));
faders.forEach(fader => appearOnScroll.observe(fader));
