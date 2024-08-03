document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(button => {
        button.addEventListener('click', function(event) {
            toggleAnswer(this);
        });

        button.addEventListener('keydown', function(event) {
            if (event.keyCode === 13) {
                toggleAnswer(this);
            }
        });
    });

    function toggleAnswer(button) {
        const answerId = button.getAttribute('aria-controls');
        const answer = document.getElementById(answerId);
        console.log(answer)

        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
            button.setAttribute('aria-expanded', 'false');
        } else {
            answer.classList.add('show');
            button.setAttribute('aria-expanded', 'true');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll('.acessibility');
    let currentIndex = 0;

    function focusElement(index) {
        if (index >= 0 && index < focusableElements.length) {
            focusableElements[index].focus();
            focusableElements[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp') {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : focusableElements.length - 1;
            focusElement(currentIndex);
            event.preventDefault();
        } else if (event.key === 'ArrowDown') {
            currentIndex = (currentIndex < focusableElements.length - 1) ? currentIndex + 1 : 0;
            focusElement(currentIndex);
            event.preventDefault();
        }
    });


    if (focusableElements.length > 0) {
        focusElement(currentIndex);
    }
});