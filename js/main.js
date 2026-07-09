document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('bgVideo');
    const scrollHint = document.getElementById('scrollHint');
    const customDropdowns = document.querySelectorAll('.custom-dropdown');

    customDropdowns.forEach(dropdown => {
        const header = dropdown.querySelector('.dropdown-header');
        const body = dropdown.querySelector('.dropdown-body');


        header.addEventListener('click', (e) => {
            e.stopPropagation();


            customDropdowns.forEach(d => {
                if (d !== dropdown) d.classList.remove('open');
            });


            dropdown.classList.toggle('open');
        });


        body.addEventListener('click', (e) => {
            e.stopPropagation();
        });


        const items = dropdown.querySelectorAll('.dropdown-item');
        items.forEach(item => {
            item.addEventListener('click', () => {
                header.innerHTML = `${item.innerText} <span class="arrow">▼</span>`;
                dropdown.classList.remove('open');
            });
        });
    });


    document.addEventListener('click', () => {
        customDropdowns.forEach(d => d.classList.remove('open'));
    });


    const currencyBtns = document.querySelectorAll('.currency-tabs button');
    currencyBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            currencyBtns.forEach(b => b.classList.remove('active'));

            btn.classList.add('active');
        });
    });

    window.addEventListener('scroll', function () {
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

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;

                section.querySelector('h1').classList.add('visible');
                section.querySelector('p').classList.add('visible');
                section.querySelector('.search-panel').classList.add('visible');
                section.classList.add('bg-visible');

                observer.unobserve(section);
            }
        });
    }, observerOptions);

    const searchSection = document.getElementById('searchSection');
    observer.observe(searchSection);
});

const reviewObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const reviewObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add('is-visible');

            observer.unobserve(entry.target);
        }
    });
}, reviewObserverOptions);


const reviewElements = document.querySelectorAll('.animate-review');


reviewElements.forEach(el => {
    reviewObserver.observe(el);
});