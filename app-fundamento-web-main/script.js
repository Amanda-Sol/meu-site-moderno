/* ==========================================================
   ARQUIVO: script.js
   OBJETIVO: Controlar navegação, menu mobile e formulários
   AUTORA: Amanda Soledade 💻
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa todas as funcionalidades
    initializeNavigation();
    initializeMobileMenu();
    initializeForm(); // Formulário de cadastro
    initializeLoginForm(); // Formulário de login
});

/* ==========================================================
    FUNÇÃO 1 - NAVEGAÇÃO SUAVE ENTRE SEÇÕES
   ========================================================== */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Verifica se o link é âncora (#)
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

/* ==========================================================
    FUNÇÃO 2 - MENU MOBILE (ABRIR / FECHAR)
   ========================================================== */
function initializeMobileMenu() {
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });
    }
}

/* ==========================================================
    FUNÇÃO 3 - FORMULÁRIO DE CADASTRO
   ========================================================== */
function initializeForm() {
    const form = document.getElementById('registerForm');
    if (!form) return; // Evita erro se o formulário não existir

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        handleFormSubmit();
    });

    function handleFormSubmit() {
        // Captura valores do formulário
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const senha = document.getElementById('senha').value.trim();
        const confirmSenha = document.getElementById('confirmSenha').value.trim();

        // Limpa mensagens anteriores
        clearErrors();

        let valid = true;

        // Validação simples
        if (nome === '') {
            showError('nomeError', 'O nome é obrigatório.');
            valid = false;
        }

        if (email === '') {
            showError('emailError', 'O e-mail é obrigatório.');
            valid = false;
        } else if (!validateEmail(email)) {
            showError('emailError', 'Digite um e-mail válido.');
            valid = false;
        }

        if (senha === '') {
            showError('senhaError', 'A senha é obrigatória.');
            valid = false;
        } else if (senha.length < 6) {
            showError('senhaError', 'A senha deve ter pelo menos 6 caracteres.');
            valid = false;
        }

        if (confirmSenha === '') {
            showError('confirmSenhaError', 'Confirme sua senha.');
            valid = false;
        } else if (senha !== confirmSenha) {
            showError('confirmSenhaError', 'As senhas não coincidem.');
            valid = false;
        }

        if (!valid) return;

        // Exibir no console
        console.log('=== NOVO CADASTRO ===');
        console.log('Nome:', nome);
        console.log('E-mail:', email);
        console.log('Senha:', senha);
        console.log('Data/Hora:', new Date().toLocaleString());
        console.log('=====================');

        alert('Cadastro realizado com sucesso! Veja os dados no console.');
        form.reset();
    }

    function showError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }

    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.classList.remove('show'));
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

/* ==========================================================
   FUNÇÃO 4 - FORMULÁRIO DE LOGIN
   ========================================================== */
function initializeLoginForm() {
    const loginForm = document.getElementById('loginForm');
    if (!loginForm) return; // Evita erro se o formulário não existir

    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        handleLogin();
    });

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function handleLogin() {
        let email = loginEmail.value.trim();
        let password = loginPassword.value.trim();
        let valid = true;

        // Limpar erros
        document.getElementById('loginEmailError').classList.remove('show');
        document.getElementById('loginPasswordError').classList.remove('show');

        // Validar Email
        if (!email) {
            showError('loginEmailError', 'E-mail é obrigatório');
            valid = false;
        } else if (!validateEmail(email)) {
            showError('loginEmailError', 'E-mail inválido');
            valid = false;
        }

        // Validar Senha
        if (!password) {
            showError('loginPasswordError', 'Senha é obrigatória');
            valid = false;
        } else if (password.length < 6) {
            showError('loginPasswordError', 'Senha deve ter pelo menos 6 caracteres');
            valid = false;
        }

        if (!valid) return;

        // Exibir dados no console
        console.log('=== LOGIN REALIZADO ===');
        console.log('E-mail:', email);
        console.log('Senha:', password);
        console.log('Data/Hora:', new Date().toLocaleString());
        console.log('=======================');

        alert('Login realizado com sucesso! Confira o console (F12 > Console).');
        loginForm.reset();
    }

    function showError(id, message) {
        const element = document.getElementById(id);
        element.textContent = message;
        element.classList.add('show');
    }
}
