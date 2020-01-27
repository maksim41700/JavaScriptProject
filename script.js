let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

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

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}