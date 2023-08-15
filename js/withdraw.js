document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldValueStr = withdrawField.value;

    withdrawField.value = '';
    if (isNaN(withdrawFieldValueStr) || withdrawFieldValueStr == '') {
        alert("Pls Input only Numbers.")
        return;
    }
    const withdrawFieldValue = parseFloat(withdrawFieldValueStr);

    const withdrawOutput = document.getElementById('withdraw-output');
    const withdrawOutputStr = withdrawOutput.innerText;
    const withdrawOutputTotal = parseFloat(withdrawOutputStr);

    const withdrawOutputGrandTotal = withdrawOutputTotal + withdrawFieldValue;

    const balance = document.getElementById('balance')
    const balanceStr = balance.innerText;
    const totalBalance = parseFloat(balanceStr);
    if (withdrawFieldValueStr > totalBalance) {
        alert("taka nai")
        return;
    } else if (withdrawFieldValueStr <= 0) {
        alert("Your can not put negative number or 0")
        return;
    }
    withdrawOutput.innerText = withdrawOutputGrandTotal;
    const newTotalBalance = totalBalance - withdrawFieldValue;

    balance.innerText = newTotalBalance;

})