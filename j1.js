function redirectTo(page) {
    window.location.href = page;
}

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Redirect to categories page after login
    window.location.href = 'h2.html';
});
