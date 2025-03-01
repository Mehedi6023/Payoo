document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashoutAmount = document.querySelector("#cashout-amount").value;
    const convertedCashoutAmount = parseFloat(cashoutAmount);
    const pin = document.querySelector("#pin").value;
    const convertedPin = parseInt(pin);
    const balance = document.querySelector("#balance").innerText;
    const convertedBalance = parseFloat(balance);
    if (convertedPin === 1234) {
      if (convertedCashoutAmount <= convertedBalance) {
        sum = convertedBalance - convertedCashoutAmount;
        document.querySelector("#balance").innerText = sum;
      } else {
        alert("Insufficient balance");
      }
    } else {
      alert("Invalid pin");
    }
  });
