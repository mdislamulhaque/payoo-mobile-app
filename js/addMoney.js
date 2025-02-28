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
    // this.classList.add("bg-blue-300");
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

          // Clear input fields after successful transaction
          document.getElementById("add-money-mobile-number").value = "";
          document.getElementById("add-money-pin").value = "";
          document.getElementById("add-money-amount").value = "";

          // Show success popup
          document.getElementById("success-popup").classList.remove("hidden");

          document
            .getElementById("close-popup")
            .addEventListener("click", function () {
              document.getElementById("success-popup").classList.add("hidden");
              document
                .getElementById("add-money-form-section")
                .classList.add("hidden");
            });

          // Add transaction to history
          addTransactionHistory(accountNumber, totalAmount, addMoneyAmount);
        } else {
          alert("Invalid amount. Please enter a valid number.");
        }
      } else {
        alert("Please enter a valid PIN.");
      }
    } else {
      alert("Please enter a valid account number.");
    }
  });

function addTransactionHistory(accountNumber, newBalance, addMoneyAmount) {
  const historyTable = document.getElementById("transaction-history");

  const now = new Date();
  const dateTime = now.toLocaleString();

  const newRow = document.createElement("div");

  newRow.innerHTML = `
        <div class="p-6 bg-blue-300 my-2 rounded-lg">${dateTime}${accountNumber}
${newBalance.toFixed(2)}amounts${addMoneyAmount}add money</div>  
  `;
  historyTable.appendChild(newRow);
}

const history = document.getElementById("transaction-history");
const addBtn = document.getElementById("add-money-form-section");

document.getElementById("history-card").addEventListener("click", function () {
  history.classList.remove("hidden");
  addBtn.classList.add("hidden");
});
