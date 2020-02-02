let btn = document.getElementById('start'),
    resultTable = document.querySelector('.result-table'),
    blocks = resultTable.querySelectorAll('.budget-value, .daybudget-value, .level-value, .expenses-value, .optionalexpenses-value, .income-value, .monthsavings-value, .yearsavings-value'),
    inputs = document.querySelectorAll('.expenses-item'),
    btnApply = document.querySelectorAll('button.expenses-item-btn, button.optionalexpenses-btn'),
    btnCount = document.querySelectorAll('button.count-budget-btn'),
    expenses = document.querySelectorAll('.optionalexpenses-item'),
    fields = document.querySelectorAll('#income, #savings, #sum, #percent, .year-value, .month-value, .day-value');

console.log(blocks);
console.log(inputs);
console.log(btnApply);
console.log(btnCount);
console.log(expenses);
console.log(fields);