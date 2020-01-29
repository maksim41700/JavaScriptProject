function first() {
    setTimeout(() => {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

//first();
//second();

function go(callback) {
    first();
    callback();
}

go(function() {
    second();
})