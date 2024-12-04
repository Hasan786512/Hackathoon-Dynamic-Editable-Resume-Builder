// Toggles visibility of fields
function toggleField(toggleId: string, fieldId: string): void {
    const toggleElement = document.getElementById(toggleId) as HTMLInputElement;
    const fieldElement = document.getElementById(fieldId) as HTMLElement;

    toggleElement.addEventListener("change", () => {
        fieldElement.style.display = toggleElement.checked ? "block" : "none";
    });
}

// Collects and submits form data
function submitForm(): void {
    const data: { [key: string]: string } = {};
    const inputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
        "input[type='text'], input[type='email'], input[type='tel'], textarea"
    );

    inputs.forEach((input) => {
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
document.getElementById("submit-btn")?.addEventListener("click", submitForm);
