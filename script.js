document.addEventListener('DOMContentLoaded', () => {
            const preloader = document.getElementById('preloader');
            window.addEventListener('load', () => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            });

            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            const menuToggle = document.getElementById('menu-toggle');
            const navMenu = document.getElementById('nav-menu');
            const navLinks = document.querySelectorAll('.nav-link');

            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                    }
                });
            });

            const revealElements = document.querySelectorAll('.reveal');
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
        
                        if (entry.target.querySelector('.skills-progress')) {
                            const progressBars = entry.target.querySelectorAll('.skills-progress');
                            progressBars.forEach(bar => {
                                const width = bar.getAttribute('data-width');
                                bar.style.width = width;
                            });
                        }
                    }
                });
            }, {
                threshold: 0.1
            });

            revealElements.forEach(el => {
                revealObserver.observe(el);
            });

            const sections = document.querySelectorAll('section[id]');
            const navHighlighter = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        document.querySelector('.nav-link.active').classList.remove('active');
                        document.querySelector(`.nav-link[href="#${id}"]`).classList.add('active');
                    }
                });
            }, {
                rootMargin: '-50% 0px -50% 0px'
            });

            sections.forEach(section => {
                navHighlighter.observe(section);
            });

        });