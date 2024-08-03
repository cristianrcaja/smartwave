document.querySelectorAll('.hide-password').forEach(function (icon) {
    icon.addEventListener('click', togglePasswordVisibility);
    icon.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' || event.key === ' ') {
            togglePasswordVisibility.call(this);
        }
    });
});

function togglePasswordVisibility() {
    const input = this.previousElementSibling;
    if (input.type === 'password') {
        input.type = 'text';
        this.classList.remove('bi-eye-slash');
        this.classList.add('bi-eye');
    } else {
        input.type = 'password';
        this.classList.remove('bi-eye');
        this.classList.add('bi-eye-slash');
    }
}

