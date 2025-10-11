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
// Boutons
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const closeLogin = document.getElementById('closeLogin');
const closeSignup = document.getElementById('closeSignup');

loginBtn.onclick = () => loginModal.style.display = 'block';
signupBtn.onclick = () => signupModal.style.display = 'block';
closeLogin.onclick = () => loginModal.style.display = 'none';
closeSignup.onclick = () => signupModal.style.display = 'none';

window.onclick = function(event) {
  if (event.target == loginModal) loginModal.style.display = 'none';
  if (event.target == signupModal) signupModal.style.display = 'none';
};

// Simuler inscription et login
const signupSubmit = document.getElementById('signupSubmit');
const loginSubmit = document.getElementById('loginSubmit');

signupSubmit.onclick = () => {
  const user = document.getElementById('signupUser').value;
  const pass = document.getElementById('signupPass').value;
  if(user && pass){
    localStorage.setItem('shoporaUser', user);
    localStorage.setItem('shoporaPass', pass);
    alert('Inscription réussie !');
    signupModal.style.display = 'none';
  } else alert('Remplissez tous les champs !');
};

loginSubmit.onclick = () => {
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;
  if(user === localStorage.getItem('shoporaUser') && pass === localStorage.getItem('shoporaPass')){
    alert('Connexion réussie !');
    loginModal.style.display = 'none';
  } else alert('Nom d’utilisateur ou mot de passe incorrect !');
};
// Sélecteurs
const authModalPro = document.getElementById('authModalPro');
const loginBtnPro = document.getElementById('loginBtn'); // utiliser le même bouton header si voulu
const signupBtnPro = document.getElementById('signupBtn');
const closeAuthPro = document.getElementById('closeAuthPro');

const showSignupProBtn = document.getElementById('showSignupPro');
const showLoginProBtn = document.getElementById('showLoginPro');
const loginFormPro = document.querySelector('.login-form-pro');
const signupFormPro = document.querySelector('.signup-form-pro');

const signupSubmitPro = document.getElementById('signupSubmitPro');
const loginSubmitPro = document.getElementById('loginSubmitPro');

// Ouvrir modal
loginBtnPro.onclick = () => { authModalPro.style.display = 'flex'; showLoginFormPro(); }
signupBtnPro.onclick = () => { authModalPro.style.display = 'flex'; showSignupFormPro(); }
closeAuthPro.onclick = () => authModalPro.style.display = 'none';
window.onclick = e => { if(e.target === authModalPro) authModalPro.style.display = 'none'; }

// Switch login/signup
function showSignupFormPro(){ loginFormPro.style.display='none'; signupFormPro.style.display='block'; }
function showLoginFormPro(){ loginFormPro.style.display='block'; signupFormPro.style.display='none'; }

showSignupProBtn.onclick = showSignupFormPro;
showLoginProBtn.onclick = showLoginFormPro;

// Simuler inscription/login
signupSubmitPro.onclick = () => {
  const user = document.getElementById('signupUserPro').value;
  const pass = document.getElementById('signupPassPro').value;
  if(user && pass){
    localStorage.setItem('shoporaUserPro', user);
    localStorage.setItem('shoporaPassPro', pass);
    alert('Inscription réussie !');
    showLoginFormPro();
  } else alert('Remplissez tous les champs !');
};

loginSubmitPro.onclick = () => {
  const user = document.getElementById('loginUserPro').value;
  const pass = document.getElementById('loginPassPro').value;
  if(user === localStorage.getItem('shoporaUserPro') && pass === localStorage.getItem('shoporaPassPro')){
    alert('Connexion réussie ! Bienvenue '+user);
    authModalPro.style.display = 'none';
  } else alert('Nom d’utilisateur ou mot de passe incorrect !');
};
