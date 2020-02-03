let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');


// btn.onclick = () => {
//     alert("you press the first button");
// }

// btn.addEventListener('click', (event) => {
//     // alert("you press the first button");
//     console.log("Произошло событие: " + event.type + " на элементе: " + event.target);
// });

wrap.addEventListener('click', () => {
    console.log("Произошло событие: " + event.type + " на элементе: " + event.target);
});

link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log("Произошло событие: " + event.type + " на элементе: " + event.target);
});

btn.forEach((item) => {
    item.addEventListener('mouseleave', (event) => {
        console.log("mouseleave");
    })
});


// btn.addEventListener('mouseenter', () => {
//     alert("вы навели на первую кнопку");
// })