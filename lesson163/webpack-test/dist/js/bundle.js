/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/parts/calc.js":
/*!**************************!*\
  !*** ./js/parts/calc.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daysSum = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function() {
        totalValue.innerHTML = calc();
    });

    restDays.addEventListener('change', function() {
        totalValue.innerHTML = calc();
    });

    function calc() {

        if (persons.value == '' || restDays.value == '' || persons.value == '0' || restDays.value == '0') {
            return 0;
        } else {
            personSum = +persons.value;
            daysSum = +restDays.value;
            return (personSum + daysSum) * 4000 * place.options[place.selectedIndex].value;
        }
    }

    place.addEventListener('change', function() {
        totalValue.innerHTML = calc();
    });

}

module.exports = calc;

/***/ }),

/***/ "./js/parts/form.js":
/*!**************************!*\
  !*** ./js/parts/form.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {

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

        let phoneInput = document.querySelector('.popup-form__input');

        function postData() {

            localStorage.setItem('phoneInput', phoneInput.value);
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

}

module.exports = form;

/***/ }),

/***/ "./js/parts/modal.js":
/*!***************************!*\
  !*** ./js/parts/modal.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./js/parts/slider.js":
/*!****************************!*\
  !*** ./js/parts/slider.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {

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

}

module.exports = slider;

/***/ }),

/***/ "./js/parts/tabs.js":
/*!**************************!*\
  !*** ./js/parts/tabs.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {

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
}

module.exports = tabs;

/***/ }),

/***/ "./js/parts/timer.js":
/*!***************************!*\
  !*** ./js/parts/timer.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {

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

}

module.exports = timer;

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let calc = __webpack_require__(/*! ./parts/calc.js */ "./js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form.js */ "./js/parts/form.js"),
        modal = __webpack_require__(/*! ./parts/modal.js */ "./js/parts/modal.js"),
        slider = __webpack_require__(/*! ./parts/slider.js */ "./js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs.js */ "./js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer.js */ "./js/parts/timer.js");

    calc();
    form();
    slider();
    tabs();
    timer();
    modal();

});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map