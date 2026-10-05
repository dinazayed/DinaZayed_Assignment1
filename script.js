// Dina Zayed - Assignment 2 JavaScript
// This file adds interactivity to the existing Assignment 1 CV webpage.

document.addEventListener("DOMContentLoaded", function () {
  // Feature 1: Welcome message displayed dynamically when the page loads.
  const welcomeMessage = document.getElementById("welcomeMessage");
  welcomeMessage.textContent = "Welcome to my portfolio page!";

  // Feature 2: Dark mode / light mode toggle.
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const darkModeOn = document.body.classList.contains("dark-mode");
    themeToggle.textContent = darkModeOn ? "Light Mode" : "Dark Mode";
  });

  // Feature 3: Show/hide the Skills section.
  const skillsToggle = document.getElementById("skillsToggle");
  const skillsContent = document.getElementById("skillsContent");

  skillsToggle.addEventListener("click", function () {
    const isHidden = skillsContent.hidden;
    skillsContent.hidden = !isHidden;
    skillsToggle.textContent = isHidden ? "Hide Skills" : "Show Skills";
    skillsToggle.setAttribute("aria-expanded", String(isHidden));
  });

  // Feature 4: Show/hide extra details for the Dress Brand project.
  const projectToggle = document.getElementById("projectToggle");
  const projectDetails = document.getElementById("projectDetails");

  projectToggle.addEventListener("click", function () {
    const isHidden = projectDetails.hidden;
    projectDetails.hidden = !isHidden;
    projectToggle.textContent = isHidden ? "Hide Project Details" : "Show Project Details";
    projectToggle.setAttribute("aria-expanded", String(isHidden));
  });

  // Feature 5: Contact form validation with dynamic error/success messages.
  const contactForm = document.getElementById("contactForm");
  const nameInput = document.getElementById("contactName");
  const emailInput = document.getElementById("contactEmail");
  const messageInput = document.getElementById("contactMessage");

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear messages from the previous attempt.
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    formStatus.textContent = "";

    let formIsValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nameInput.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      formIsValid = false;
    }

    if (emailInput.value.trim() === "") {
      emailError.textContent = "Please enter your email.";
      formIsValid = false;
    } else if (!emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      formIsValid = false;
    }

    if (messageInput.value.trim() === "") {
      messageError.textContent = "Please enter a message.";
      formIsValid = false;
    }

    if (formIsValid) {
      formStatus.textContent = "Thank you! Your message passed validation successfully.";
      contactForm.reset();
    } else {
      formStatus.textContent = "Please correct the highlighted fields.";
    }
  });
});
