// Sélecteurs
const authModalPro = document.getElementById('authModalPro');
const loginBtnPro = document.getElementById('loginBtnPro');
const signupBtnPro = document.getElementById('signupBtnPro');
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

// Fermer modal
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
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(name + " a été ajouté au panier !");
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

window.onload = updateCartCount;
