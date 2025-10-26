
        document.addEventListener('DOMContentLoaded', function() {
            // Hamburger menu logic
            const menuToggle = document.getElementById('menuToggle');
            const navbar = document.getElementById('navbar');
            
            menuToggle.addEventListener('click', function() {
                navbar.classList.toggle('open');
                menuToggle.querySelector('i').classList.toggle('fa-bars');
                menuToggle.querySelector('i').classList.toggle('fa-times');
            });

            // Close navbar when a link is clicked (optional, but good for UX)
            const navLinks = document.querySelectorAll('.navbar ul li a');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    if (navbar.classList.contains('open')) {
                        navbar.classList.remove('open');
                        menuToggle.querySelector('i').classList.remove('fa-times');
                        menuToggle.querySelector('i').classList.add('fa-bars');
                    }
                });
            });

            // This helps reset the style if the window is resized to a smaller view
            window.addEventListener('resize', function() {
                if (window.innerWidth <= 768) {
                    navbar.classList.remove('navbar-fixed');
                }
            });
            // === END: NEW CODE FOR STICKY NAVBAR ===

        });
