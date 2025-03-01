document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.querySelector("#amount-field").value;
    const convertedAmount = parseFloat(amount);
    const pin = document.querySelector("#pin").value;
    const convertedPin = parseInt(pin);
    const balance = document.querySelector("#balance").innerText;
    const convertedBalance = parseFloat(balance);
    if (convertedPin === 1234) {
      sum = convertedAmount + convertedBalance;
        document.querySelector("#balance").innerText = sum;
    } else {
      alert("Invalid pin");
    }
  });
