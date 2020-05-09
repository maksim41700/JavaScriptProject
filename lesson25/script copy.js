let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.scrollWidth,
    height = box.scrollHeight;

//console.log(width);
//console.log(height);
//console.log(box.getBoundingClientRect());

//console.log(document.documentElement.clientWidth);

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px';
});

scrollBy(0, 200);
scrollTo(0, 200);

let drink = 1;

function shoot(arrow) {
    console.log('You have shot...');

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject('You missed!');
        }, 3000);
    });
    return promise;
};

function win() {
    console.log('You are win!');
    (drink == 1) ? buyBeer(): giveMoney();
}

function loose() {
    console.log('You are loose!');
}

function giveMoney() {
    console.log('You have got the money.');
}

function buyBeer() {
    console.log('You have got the beer.')
}

shoot({})
console.log('You hit the target!');
.then(mark => console.log('You hit the target!'))
    .then(win)
    .catch(loose)