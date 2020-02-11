window.addEventListener('DOMContentLoaded', () => {

    let box = document.querySelector('#rectangle');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        console.log('It works, touchstart.');
        console.log(e.target);
        console.log(e.touches);
        console.log(e.changedTouches);
        console.log(e.targetTouches);

    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();
        console.log('It works, touchmove.' + e.touches[0].pageX);

    });

    box.addEventListener('touchend', (e) => {
        e.preventDefault();
        console.log('It works, touchend.');
    })

     new RegExp('pattern', 'flags');

     let ans = prompt('fill you mane');

     let reg = /n/ig;

     console.log(ans.test());

    // console.log(ans.search(reg));
    // console.log(ans.match(reg));

    // let pass = prompt('enter password');
    // console.log(pass.replace(/./g, '*'));

    // alert('12-34-56'.replace(/-/g, ':'));


})