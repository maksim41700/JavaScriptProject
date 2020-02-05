let btnStart = document.getElementById('start'),
    resultTable = document.querySelector('.result-table'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    expensesValue = document.querySelector('.expenses-value'),
    levelValue = document.querySelector('.level-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),

    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),

    expensesItems = document.querySelectorAll('.expenses-item'),

    btnExpensesItem = document.querySelector('button.expenses-item-btn'),
    btnOptionalexpenses = document.querySelector('button.optionalexpenses-btn'),


    btnCount = document.querySelector('button.count-budget-btn'),
    optionalExpensesItems = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('#income'),
    savingsCheckbox = document.querySelector('#savings'),
    sumValue = document.querySelector('#sum'),
    percentValue = document.querySelector('#percent'),
    buttons = document.querySelectorAll('button'),
    money, time, optionalExpenses = {};

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false,
    started: false
};

setButtonAccessability();

btnStart.addEventListener('click', () => {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();

    let timeDate = new Date(Date.parse(time));

    yearValue.value = timeDate.getFullYear();
    monthValue.value = timeDate.getMonth() + 1;
    dayValue.value = timeDate.getDate();

    if (!appData.started) {
        setButtonAccessability();
        appData.started = true;
    }
});

btnExpensesItem.addEventListener('click', () => {
    let sum = 0;

    for (let i = 0; i < expensesItems.length; i++) {
        let expenseItem = expensesItems[i].value,
            expenseItemCost = +expensesItems[++i].value;

        if (typeof(expenseItem) === 'string' && typeof(expenseItem) != null && typeof(expenseItemCost) != null &&
            expenseItem != '' && expenseItemCost != '' && expenseItem.length < 50) {
            appData.expenses[expenseItem] = expenseItemCost;
            sum += expenseItemCost;
        } else {
            i--;
        };
    };

    expensesValue.textContent = sum;

});

btnOptionalexpenses.addEventListener('click', () => {
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let expenseItem = optionalExpensesItems[i].value;
        optionalExpenses[i] = expenseItem;
        optionalexpensesValue.textContent += optionalExpenses[i] + ' ';
    };
});

btnCount.addEventListener('click', () => {

    if (appData.budget === undefined) {
        daybudgetValue.textContent = "Произошла ошибка";
        return;
    }

    let expenses = 0;
    for (let key in appData.expenses) {
        expenses += +appData.expenses[key];
    };

    appData.moneyPerDay = ((appData.budget - expenses) / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
        levelValue.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        levelValue.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay >= 2000) {
        levelValue.textContent = "Высокий уровень достатка";
    } else {
        levelValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', () => {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savingsCheckbox.addEventListener('click', () => {
    appData.saving = !appData.saving;
});

sumValue.addEventListener('input', () => {
    if (!appData.saving) {
        return;
    }

    countSavings();

});

percentValue.addEventListener('input', () => {
    if (!appData.saving) {
        return;
    }

    countSavings();

});

function countSavings() {
    let sum = +sumValue.value,
        percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
};

function setButtonAccessability() {
    for (let i = 0; i < buttons.length; i++) {
        if (btnStart == buttons[i]) {
            continue;
        };
        buttons[i].disabled = !buttons[i].disabled;
    }
}