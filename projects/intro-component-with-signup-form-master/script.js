const formEl = document.querySelector("form");

const isValidEmail = (value) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const showError = (inputEl, message) => {
  const divEl = inputEl.parentElement;
  divEl.classList.add("error");

  const errorEl = document.createElement("p");
  errorEl.classList.add('error-message');
  errorEl.textContent = message;

  const errorIconEl = document.createElement("span");
  errorIconEl.textContent = "!";
  errorIconEl.classList.add("error-icon");

  divEl.append(errorIconEl);
  divEl.append(errorEl);
};

const addErrorResetOnInput = (inputEl) => {
  const divEl = inputEl.parentElement;
  inputEl.addEventListener(
    "input",
    () => {
      divEl.classList.remove("error");
      divEl.querySelector(".error-icon")?.remove();
      divEl.querySelector(".error-message")?.remove();
    },
    { once: true },
  );
};

const clearErrorMessages = () => {
  const errorEl = document.querySelectorAll(".error-message");
  errorEl.forEach((el) => {
    el.remove();
  });
};

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const formEl = event.target;
  const formData = new FormData(event.target);

  clearErrorMessages();

  document.querySelectorAll(".input-container.error").forEach((el) => {
    el.classList.remove("error");
  });

  for (const [name, value] of formData.entries()) {
    const inputEl = formEl.querySelector(`[name="${name}"]`);
    
    if (value.trim() === "") {
      showError(inputEl, `${inputEl.placeholder} cannot be empty`);
      addErrorResetOnInput(inputEl);
    } else if (name === "email" && !isValidEmail(value)) {
      showError(inputEl, "Looks like this is not an email");
      addErrorResetOnInput(inputEl);
    }
  }
});
