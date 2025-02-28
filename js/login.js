document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("acc-number").value;
    const pinNumber = parseInt(document.getElementById("pin-number").value);
    if (accountNumber.length == 11) {
      if (pinNumber === 1234) {
        window.location.href = "../home.html";
      } else {
        alert("please enter a valid pin");
      }
    } else {
      alert("please enter acc number");
    }
  });
