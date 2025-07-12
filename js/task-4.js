const formEl = document.querySelector("form.login-form");
formEl.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  if (formEl.email.value === "" || formEl.password.value === "") {
    alert("All form fields must be filled in");
  } else {
    const formData = new FormData(formEl);
    const userInfo = Object.fromEntries(formData.entries());
    console.table(userInfo);
  }

  formEl.reset();
}
