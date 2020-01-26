let money = parseInt(prompt("Ваш бюджет на месяц?")),
    time = new Date(prompt("Введите дату в формате YYYY-MM-DD"));

let appData = {
    badget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

let expenseItem = prompt("Введите обязательную статью расходов в этом месяце"),
    expenseItemCost = parseInt(prompt("Во сколько обойдется?"));
appData.expenses[expenseItem] = expenseItemCost;

alert(money / 30);

console.log(appData);