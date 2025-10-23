
    document.addEventListener('DOMContentLoaded', function() {
        const header = document.querySelector('.header');
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const mainNav = document.querySelector('.main-nav');

        // Efecto de scroll
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Menú móvil
        if (mobileToggle && mainNav) {
            mobileToggle.addEventListener('click', function() {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                mainNav.classList.toggle('active');
            });

            // Cerrar menú al hacer clic en un enlace
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    mainNav.classList.remove('active');
                });
            });

            // Cerrar menú al hacer clic fuera
            document.addEventListener('click', function(event) {
                if (!header.contains(event.target)) {
                    mobileToggle.setAttribute('aria-expanded', 'false');
                    mainNav.classList.remove('active');
                }
            });
        }
    });
