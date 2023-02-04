const form = document.querySelector("#currency-converter");
const result = document.querySelector("#result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const from = document.querySelector("#from").value;
  const to = document.querySelector("#to").value;
  const amount = document.querySelector("#amount").value;

  // Use a hardcoded exchange rate for this example
  let exchangeRate = 0;
  if (from === "INR" && to === "USD") {
    exchangeRate = 0.013;
  } else if (from === "USD" && to === "INR") {
    exchangeRate = 75.5;
  }

  const convertedAmount = (amount * exchangeRate).toFixed(2);

  result.textContent = `${amount} ${from} is worth ${convertedAmount} ${to}.`;
});
