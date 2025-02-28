document.getElementById("logout-btn").addEventListener("click", function () {
  window.location.href = "../index.html";
});
// =======addmoneysection================
document
  .getElementById("add-money-card")
  .addEventListener("click", function () {
    const addMoneyFormSection = document.getElementById(
      "add-money-form-section"
    );
    this.classList.add("bg-blue-300");
    addMoneyFormSection.classList.remove("hidden");
  });
// =============addmoneybtn==============

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById(
      "add-money-mobile-number"
    ).value;
    const pinNumber = parseInt(document.getElementById("add-money-pin").value);
    const addMoneyAmount = parseFloat(
      document.getElementById("add-money-amount").value
    );
    const totalBalanceElement = document.getElementById("total-Balance");
    const totalBalance = parseFloat(
      document.getElementById("total-Balance").innerText.split("$")[1]
    );
    if (accountNumber.length == 11) {
      if (pinNumber === 1234) {
        let totalAmount = addMoneyAmount + totalBalance;
        if (addMoneyAmount > 0) {
          totalBalanceElement.innerText = "$" + totalAmount.toFixed(2);

          const accountNumber = document.getElementById(
            "add-money-mobile-number"
          );
          accountNumber.value = "";
          const pinNumber = document.getElementById("add-money-pin");
          pinNumber.value = "";
          const addMoneyAmount = document.getElementById("add-money-amount");

          addMoneyAmount.value = "";
          const addMoneyFormSection = document.getElementById(
            "add-money-form-section"
          );

          document.getElementById("success-popup").classList.remove("hidden");

          document
            .getElementById("close-popup")
            .addEventListener("click", function () {
              document.getElementById("success-popup").classList.add("hidden");
              addMoneyFormSection.classList.add("hidden");
            });
        } else {
          alert("Invalid amount. Please enter a valid number.");
        }
      } else {
        alert("please enter a valid pin");
      }
    } else {
      alert("please enter acc number");
    }
  });
