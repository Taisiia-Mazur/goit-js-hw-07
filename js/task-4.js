const form = document.querySelector(".login-form");
form.addEventListener("submit", formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("All form fields must be filled in");
  }
  const data = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  form.reset();
  console.log(data);
}
