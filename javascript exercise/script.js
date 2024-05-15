// script.js
let totalIncome = 0;
let totalExpenses = 0;

function addValues() {
    const incomeInput = document.getElementById('income').value;
    const expenseInput = document.getElementById('expense').value;

    const income = parseFloat(incomeInput);
    const expense = parseFloat(expenseInput);

    if (!isNaN(income) && income > 0) {
        totalIncome += income;
    }

    if (!isNaN(expense) && expense > 0) {
        totalExpenses += expense;
    }

    updateDisplay();

    document.getElementById('income').value = '';
    document.getElementById('expense').value = '';
}

function resetValues() {
    totalIncome = 0;
    totalExpenses = 0;

    updateDisplay();

    document.getElementById('income').value = '';
    document.getElementById('expense').value = '';
}

function updateDisplay() {
    document.getElementById('total-income').textContent = totalIncome.toFixed(2);
    document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
    document.getElementById('savings').textContent = (totalIncome - totalExpenses).toFixed(2);
}
