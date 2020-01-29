let money, time, optionalExpenses = {};

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let expenseItem = prompt("Введите обязательную статью расходов в этом месяце"),
                expenseItemCost = +prompt("Во сколько обойдется?");

            if (typeof(expenseItem) === 'string' && typeof(expenseItem) != null && typeof(expenseItemCost) != null &&
                expenseItem != '' && expenseItemCost != '' && expenseItem.length < 50) {
                appData.expenses[expenseItem] = expenseItemCost;
            } else {
                i--;
            };
        };
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay >= 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (!appData.saving) {
            return;
        }
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save / 100 / 12 * percent;

        alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed());
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let expenseItem = prompt("Статья необязательных расходов?");

            if (typeof(expenseItem) === 'string' && typeof(expenseItem) != null && expenseItem != '') {
                optionalExpenses[i + 1] = expenseItem;
            } else {
                i--;
            };
        };
    },
    chooseIncome: function() {
        let i = 0,
            items;
        while (i < 1) {
            items = prompt('Что принесет дополнительный доход? Перечислите через запятую.', '');
            if (typeof(items) === 'string' && items != '' && items != null) {
                i++;
            }
        };

        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort();

        appData.income.forEach(function(item, index, array) {
            console.log('Способы доп. заработка: ' + item);
        });

        for (let key in appData) {
            console.log('Наша программа включает в себя данные: ' + appData[key]);
        }
    }
};

appData.chooseIncome();

// let i = 0;
// while (i < 2) {
//     let expenseItem = prompt("Введите обязательную статью расходов в этом месяце"),
//         expenseItemCost = +prompt("Во сколько обойдется?");

//     if (typeof(expenseItem) === 'string' && typeof(expenseItem) != null && typeof(expenseItemCost) != null &&
//         expenseItem != '' && expenseItemCost != '' && expenseItem.length < 50) {
//         appData.expenses[expenseItem] = expenseItemCost;
//         i++;
//     };
// }

// let i = 0;
// do {
//     let expenseItem = prompt("Введите обязательную статью расходов в этом месяце"),
//         expenseItemCost = +prompt("Во сколько обойдется?");

//     if (typeof(expenseItem) === 'string' && typeof(expenseItem) != null && typeof(expenseItemCost) != null &&
//         expenseItem != '' && expenseItemCost != '' && expenseItem.length < 50) {
//         appData.expenses[expenseItem] = expenseItemCost;
//         i++;
//     };
// } while (i < 2);