// Contact Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                company: formData.get('company'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };

            // Validate form
            if (validateForm(data)) {
                // Show loading state
                const submitButton = this.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;

                // Simulate form submission (replace with actual form handling)
                setTimeout(() => {
                    showSuccessMessage();
                    this.reset();
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 2000);
            }
        });
    }

    function validateForm(data) {
        const errors = [];

        if (!data.name.trim()) {
            errors.push('Name is required');
        }

        if (!data.email.trim()) {
            errors.push('Email is required');
        } else if (!isValidEmail(data.email)) {
            errors.push('Please enter a valid email address');
        }

        if (!data.subject) {
            errors.push('Please select a subject');
        }

        if (!data.message.trim()) {
            errors.push('Message is required');
        }

        if (errors.length > 0) {
            showErrorMessage(errors.join('<br>'));
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showSuccessMessage() {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message success';
        messageDiv.innerHTML = `
            <div class="message-content">
                <h4>Thank you for your message!</h4>
                <p>We'll get back to you within 48 hours.</p>
            </div>
        `;

        // Insert message after the form
        const formContainer = document.querySelector('.contact-form-container');
        formContainer.appendChild(messageDiv);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);

        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function showErrorMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'form-message error';
        messageDiv.innerHTML = `
            <div class="message-content">
                <h4>Please correct the following errors:</h4>
                <p>${message}</p>
            </div>
        `;

        // Insert message after the form
        const formContainer = document.querySelector('.contact-form-container');
        formContainer.appendChild(messageDiv);

        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);

        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Add CSS for form messages
    const style = document.createElement('style');
    style.textContent = `
        .form-message {
            margin-top: 1rem;
            padding: 1rem;
            border-radius: 8px;
            animation: slideIn 0.3s ease;
        }

        .form-message.success {
            background-color: #d1fae5;
            border: 1px solid #10b981;
            color: #065f46;
        }

        .form-message.error {
            background-color: #fee2e2;
            border: 1px solid #ef4444;
            color: #991b1b;
        }

        .message-content h4 {
            margin-bottom: 0.5rem;
            font-weight: 600;
        }

        .message-content p {
            margin: 0;
        }

        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});
