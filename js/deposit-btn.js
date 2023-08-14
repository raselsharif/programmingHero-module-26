

document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositFieldValue = depositField.value;

    depositField.value = '';
    if (isNaN(depositFieldValue)) {
        alert("Input only numbers.")
        return;
    }

    const depositAmount = document.getElementById('deposit-amount');

    const previousDepositTotal = parseFloat(depositFieldValue);
    const depositAmountStr = depositAmount.innerText;
    const depositAmountTotal = parseFloat(depositAmountStr);
    const total = previousDepositTotal + depositAmountTotal;

    depositAmount.innerText = total;

    const balance = document.getElementById('balance');
    const balanceStr = balance.innerText;
    const newTotalBalance = parseFloat(balanceStr);
    balance.innerText = total;
    console.log(balance);



})