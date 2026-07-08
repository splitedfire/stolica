document.addEventListener('DOMContentLoaded', function() {
            const video = document.getElementById('bgVideo');
            const scrollHint = document.getElementById('scrollHint');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    if (!video.paused) video.pause();
                    scrollHint.style.opacity = '0'; 
                } else {
                    if (video.paused) video.play();
                    scrollHint.style.opacity = '0.8'; 
                }
            });

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.3 
            };

            const observer = new IntersectionObserver(function(entries, observer) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const section = entry.target;
                        
                        section.querySelector('h1').classList.add('visible');
                        section.querySelector('p').classList.add('visible');
                        section.querySelector('.search-panel').classList.add('visible');
                        
                        observer.unobserve(section);
                    }
                });
            }, observerOptions);

            const searchSection = document.getElementById('searchSection');
            observer.observe(searchSection);
        });