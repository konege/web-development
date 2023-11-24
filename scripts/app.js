function validate_email(email) {
  const email_regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email_regex.test(email);
}

function validate_phone_number(phoneNumber) {
  const phone_regex = /^(05)([0-9]{2})[0-9]{3}[0-9]{4}$/;
  return phone_regex.test(phoneNumber);
}

function handle_submit(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phone").value;

  if (!validate_email(email)) {
    alert("Please enter a valid email address !!!");
    return false;
  }
  if (!validate_phone_number(phoneNumber)) {
    alert("Please enter a valid phone number !!!");
    return false;
  }

  if (validate_email(email) && validate_phone_number(phoneNumber)) {
    window.location.href = "pages/success.html";
  } else {
    alert("Please enter valid information.");
  }

  return true;
}

document
  .getElementById("appointment-form")
  .addEventListener("submit", handle_submit);
