const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const { email, password } = loginForm.elements;

  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();

  if (emailVal === "" || passwordVal === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailVal,
    password: passwordVal,
  };

  console.log(formData);
  loginForm.reset();
}
