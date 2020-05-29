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