let selected = null;
let lastButton = null;

const buttons = document.querySelector(".buttons-container").children;
const submitButton = document.querySelector("#submit-rating");
const ratingContainer = document.querySelector(".rating-container");
const thankYouContainer = document.querySelector(".thank-you-container");
const ratingResult = document.querySelector("#rating-result");

for (const button of buttons) {
  button.addEventListener("click", () => {
    if (lastButton) {
      lastButton.classList.remove("selected");
    }

    button.classList.add("selected");
    lastButton = button;

    selected = button.textContent;
    submitButton.disabled = false;
  });
}

submitButton.addEventListener("click", () => {
  if (selected) {
    ratingResult.textContent = selected;

    ratingContainer.classList.add("hidden");
    thankYouContainer.classList.remove("hidden");
    submitButton.disabled = true;
  }
});
