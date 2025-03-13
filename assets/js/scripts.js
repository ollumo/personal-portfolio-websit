"use strict";

// ============================
// Sidebar Toggle Functionality
// ============================

// Function to toggle element visibility
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle for mobile
sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// ============================
// Page Navigation Functionality
// ============================

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event listener to all nav links
navigationLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        let targetPage = this.innerText.toLowerCase(); // Convert text to lowercase

        pages.forEach(page => {
            if (page.dataset.page === targetPage) {
                page.classList.add("active");
                window.scrollTo(0, 0);
            } else {
                page.classList.remove("active");
            }
        });

        // Update active link
        navigationLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});

// ============================
// Form Submission Functionality
// ============================

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("[data-form]");
    const submitBtn = document.getElementById("submit-btn");
    const inputs = document.querySelectorAll("[data-form-input]");

    // Function to check if all input fields are filled
    function checkFields() {
        let allFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });

        submitBtn.disabled = !allFilled;
    }

    // Add event listeners to all input fields
    inputs.forEach(input => {
        input.addEventListener("input", checkFields);
    });

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        
        // Display success message
        alert("Message Sent Successfully!");
        
        // Reset the form and disable the button again
        form.reset();
        submitBtn.disabled = true;
    });
});
