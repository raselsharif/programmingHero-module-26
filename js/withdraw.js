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


    const balance = document.getElementById('balance')
    const balanceStr = balance.innerText;
    const totalBalance = parseFloat(balanceStr);
    if (withdrawField.value > totalBalance) {
        alert("taka nai")
        return;
    }
    withdrawOutput.innerText = withdrawFieldValue;
    const newTotalBalance = totalBalance - withdrawFieldValue;

    balance.innerText = newTotalBalance;

})