    const modalOverlay = document.getElementById('modal-overlay');
    const btnModal = document.getElementById('btn-modal');
    const btnClose = document.getElementById('modal-close');
    const btnProjects = document.getElementById('btn-modal-projects');
    const btnTrade = document.getElementById('btn-modal-trade');

    btnProjects.addEventListener('click', (e) => {
        e.preventDefault(); 
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    });

    btnTrade.addEventListener('click', (e) => {
        e.preventDefault(); 
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    });

    btnModal.addEventListener('click', (e) => {
        e.preventDefault(); 
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    });

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; 
    };

    btnClose.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });