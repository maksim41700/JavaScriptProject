function modal() {

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        tabButtons = document.querySelectorAll('.description-btn');

    function showOverlay(buttonElement) {
        let phoneInput = document.querySelector('.popup-form__input');
        phoneInput.value = localStorage.getItem('phoneInput');
        overlay.style.display = 'block';
        buttonElement.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', function() {
        showOverlay(this);
    });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].addEventListener('click', function() {
            showOverlay(this);
        });
    };

}

module.exports = modal;