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