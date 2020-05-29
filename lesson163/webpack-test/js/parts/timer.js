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