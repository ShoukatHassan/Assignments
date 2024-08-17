document.addEventListener('DOMContentLoaded', function() {
    // Get the modals
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');

    // Get the buttons that open the modals
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');

    // Get the <span> elements that close the modals
    const closeBtns = document.getElementsByClassName('close');

    // When the user clicks the login button, open the login modal 
    loginBtn.addEventListener('click', function() {
        loginModal.style.display = 'block';
    });

    // When the user clicks the signup button, open the signup modal 
    signupBtn.addEventListener('click', function() {
        signupModal.style.display = 'block';
    });

    // When the user clicks on <span> (x), close the modals
    Array.from(closeBtns).forEach(function(btn) {
        btn.addEventListener('click', function() {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        });
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', function(event) {
        if (event.target === loginModal || event.target === signupModal) {
            loginModal.style.display = 'none';
            signupModal.style.display = 'none';
        }
    });

    // Prevent forms from submitting (for demo purposes)
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Implement login logic here
    });

    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault();
        // Implement signup logic here
    });
});
