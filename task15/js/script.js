window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (tab[i] == target) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadLine = '2020-08-28';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
            seconds = (t <= 0) ? '0' : Math.floor((t / 1000) % 60),
            minutes = (t <= 0) ? '0' : Math.floor((t / 1000 / 60) % 60),
            hours = (t <= 0) ? '0' : Math.floor(t / (1000 * 60 * 60));

        return {
            'total': t,
            'seconds': (seconds < 10) ? '0' + seconds : seconds,
            'minutes': (minutes < 10) ? '0' + minutes : minutes,
            'hours': (hours < 10) ? '0' + hours : hours
        }
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);

            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);

    // Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        tabButtons = document.querySelectorAll('.description-btn');

    function showOverlay(buttonElement) {
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

    //Form
    let message = {
        loading: 'Loading...',
        success: 'Thanks! We will get in touch with you.',
        failure: 'Something is wrong...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        function postData() {

            return new Promise(function(resolve, reject) {
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                let formData = new FormData(form);

                let obj = {};

                formData.forEach(function(value, key) {
                    obj[key] = value;
                });

                let json = JSON.stringify(obj);

                request.send(json);

                request.addEventListener('readystatechange', function() {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState == 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                });
            })
        }

        function clearInputs() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData()
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInputs)

    });

    //Slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        sliderDots = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(slideNumber) {

        if (slideIndex > slides.length) {
            slideIndex = 1;
        } else if (slideIndex < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        //for (let i = 0; i < slides.length; i++) {
        //    slides[i].style.display = 'none';
        //}

        dots.forEach((item) => item.classList.remove('dot-active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(slideNumber) {
        showSlides(slideIndex += slideNumber);
    }

    function currentSlide(slideNumber) {
        showSlides(slideIndex = slideNumber);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    })

    next.addEventListener('click', function() {
        plusSlides(1);
    })

    sliderDots.addEventListener('click', function(event) {
        console.log(event.target);
        for (let i = 0; i < dots.length; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i]) {
                currentSlide(i + 1);
            }
        }
    });
});