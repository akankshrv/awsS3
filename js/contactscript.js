(function () {
  emailjs.init("FEzQLj997W6upnSN2");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = this.email.value.trim();
    const firstName = this.first_name.value.trim();
    const lastName = this.last_name.value.trim();
    const company = this.company.value.trim();

    // Validate fields
    if (!validateEmail(emailInput)) {
      document.getElementById("status").innerHTML =
        "Please enter a valid email address.";
      return;
    }

    if (!validateName(firstName)) {
      document.getElementById("status").innerHTML =
        "Please enter a valid first name (letters only).";
      return;
    }

    if (!validateName(lastName)) {
      document.getElementById("status").innerHTML =
        "Please enter a valid last name (letters only).";
      return;
    }

    if (company && !validateCompany(company)) {
      document.getElementById("status").innerHTML =
        "Please enter a valid company name (letters, numbers, and spaces only).";
      return;
    }

    // Log form data for debugging
    const formData = new FormData(this);
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    // Send form data using EmailJS
    emailjs.sendForm("service_nm8a7f5", "template_2y4vx27", this).then(
      function () {
        document.getElementById("status").innerHTML =
          "Message sent successfully!";
      },
      function (error) {
        console.error("Error sending message:", error);
        document.getElementById("status").innerHTML =
          "Failed to send message. Error: " + JSON.stringify(error);
      }
    );
  });

// Email validation function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Name validation function (allows only letters)
function validateName(name) {
  const re = /^[A-Za-z]+$/;
  return re.test(name);
}

// Company validation function (allows letters, numbers, and spaces)
function validateCompany(company) {
  const re = /^[A-Za-z0-9 ]+$/;
  return re.test(company);
}
