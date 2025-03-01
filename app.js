let loginBtn = document.querySelector("#login-btn");
loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const accountNumber = document.querySelector("#account-number").value;
  const pin = document.querySelector("#pin").value;
  if (accountNumber.length === 11) {
    if (parseInt(pin) === 1234) {
      window.location.href = "./main.html ";
    } else {
      alert("Invalid pin");
    }
  } else {
    alert("Invalid account number");
  }
});
