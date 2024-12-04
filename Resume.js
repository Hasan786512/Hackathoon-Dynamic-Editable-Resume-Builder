var _a;
// Toggles visibility of fields
function toggleField(toggleId, fieldId) {
    var toggleElement = document.getElementById(toggleId);
    var fieldElement = document.getElementById(fieldId);
    toggleElement.addEventListener("change", function () {
        fieldElement.style.display = toggleElement.checked ? "block" : "none";
    });
}
// Collects and submits form data
function submitForm() {
    var data = {};
    var inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel'], textarea");
    inputs.forEach(function (input) {
        if (input.value.trim() !== "") {
            data[input.id] = input.value.trim();
        }
    });
    console.log("Form Data Submitted:", data);
    alert("Form submitted successfully! Check the console for details.");
}
// Attach toggle functionality
toggleField("toggle-name", "name-fields");
toggleField("toggle-contact", "contact-fields");
toggleField("toggle-email", "email-fields");
toggleField("toggle-education", "education-fields");
toggleField("toggle-skills", "skills-fields");
toggleField("toggle-hobbies", "hobbies-fields");
toggleField("toggle-experience", "experience-fields");
// Attach submit event
(_a = document.getElementById("submit-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", submitForm);
