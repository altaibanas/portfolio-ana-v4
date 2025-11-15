    // تهيئة الجسيمات
        document.addEventListener('DOMContentLoaded', function() {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#00f5ff" },
                    shape: { type: "circle" },
                    opacity: { value: 0.5, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#8a2be2",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" },
                        resize: true
                    }
                }
            });
            
            // تأثير الكتابة
            const typingText = document.getElementById('typing-text');
            const texts = [
                "أبدع تجارب رقمية مستقبلية",
                "أطور واجهات مستخدم استثنائية", 
                "أصمم حلولاً تقنية مبتكرة",
                "أحول الأفكار إلى واقع تفاعلي"
            ];
            let textIndex = 0;
            let charIndex = 0;
            let isDeleting = false;
            let typingSpeed = 100;
            
            function type() {
                const currentText = texts[textIndex];
                
                if (isDeleting) {
                    typingText.textContent = currentText.substring(0, charIndex - 1);
                    charIndex--;
                    typingSpeed = 50;
                } else {
                    typingText.textContent = currentText.substring(0, charIndex + 1);
                    charIndex++;
                    typingSpeed = 100;
                }
                
                if (!isDeleting && charIndex === currentText.length) {
                    isDeleting = true;
                    typingSpeed = 1000;
                } else if (isDeleting && charIndex === 0) {
                    isDeleting = false;
                    textIndex = (textIndex + 1) % texts.length;
                    typingSpeed = 500;
                }
                
                setTimeout(type, typingSpeed);
            }
            
            // بدء تأثير الكتابة
            setTimeout(type, 1000);
            
            // تحريك أشرطة المهارات عند ظهورها
            const skillBars = document.querySelectorAll('.skill-progress');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const width = entry.target.getAttribute('data-width');
                        entry.target.style.width = width + '%';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            skillBars.forEach(bar => {
                observer.observe(bar);
            });
            
            // التمرير السلس لروابط التنقل
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
            
            // تغيير لون شريط التنقل عند التمرير
            window.addEventListener('scroll', function() {
                const navbar = document.getElementById('navbar');
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // تبديل السمة
            const themeToggle = document.getElementById('theme-toggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', () => {
                    document.documentElement.classList.toggle('dark');
                    const icon = themeToggle.querySelector('i');
                    if (document.documentElement.classList.contains('dark')) {
                        icon.classList.remove('fa-sun');
                        icon.classList.add('fa-moon');
                    } else {
                        icon.classList.remove('fa-moon');
                        icon.classList.add('fa-sun');
                    }
                });
            }
            
            // تبديل القائمة على الأجهزة المحمولة
            const menuToggle = document.getElementById('menu-toggle');
            const navLinks = document.querySelector('.hidden.md\\:flex');
            
            if (menuToggle && navLinks) {
                menuToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('hidden');
                    navLinks.classList.toggle('flex');
                    navLinks.classList.toggle('flex-col');
                    navLinks.classList.toggle('absolute');
                    navLinks.classList.toggle('top-20');
                    navLinks.classList.toggle('right-0');
                    navLinks.classList.toggle('w-full');
                    navLinks.classList.toggle('bg-gray-900');
                    navLinks.classList.toggle('p-6');
                    navLinks.classList.toggle('space-y-4');
                });
            }
        });