window.addEventListener('scroll', function () {
    if (window.scrollY > 800) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

