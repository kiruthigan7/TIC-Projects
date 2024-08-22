document.addEventListener('DOMContentLoaded', () => {
    const loginToggle = document.getElementById('login-toggle');
    const registerToggle = document.getElementById('register-toggle');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginToggle.addEventListener('click', () => {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    });

    registerToggle.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    document.getElementById('loginForm').addEventListener('submit', (event) => {
        event.preventDefault();
        // Simulate login check
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        
        if (username === 'admin' && password === 'password') {
            window.location.href = 'admin-dashboard.html';
        } else {
            document.getElementById('loginMessage').innerText = 'Invalid username or password.';
        }
    });

    document.getElementById('registerForm').addEventListener('submit', (event) => {
        event.preventDefault();
        // Simulate registration check
        const username = document.getElementById('registerUsername').value;
        const password = document.getElementById('registerPassword').value;
        
        if (username && password) {
            // Registration success
            document.getElementById('registerMessage').innerText = 'Registration successful! You can now log in.';
            setTimeout(() => {
                loginForm.style.display = 'block';
                registerForm.style.display = 'none';
            }, 2000);
        } else {
            document.getElementById('registerMessage').innerText = 'Please fill in all fields.';
        }
    });
});
