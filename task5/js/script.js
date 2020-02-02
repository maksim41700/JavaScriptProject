let menuItems = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    title = document.getElementById('title'),
    newLi = document.createElement('li'),
    column = document.querySelectorAll('.column'),
    promptIt = document.getElementById('prompt');

menu.insertBefore(menuItems[2], menuItems[1]);

newLi.classList.add('menu-item');
newLi.textContent = 'Пятый пункт';
menu.appendChild(newLi);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

title.textContent = 'Мы продаем только подлинную технику Apple';

column.forEach(elementColumn => {
    adv = elementColumn.querySelectorAll('.adv')
    adv.forEach(elementAdv => {
        elementColumn.removeChild(elementAdv);
    })
});

promptIt.textContent = prompt('Ваше отношение к технике Apple?', '');