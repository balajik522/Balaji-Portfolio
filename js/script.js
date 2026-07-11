    /// =========================================
    // EMAILJS CONTACT FORM
    // =========================================
    (function () {
        emailjs.init({
            publicKey: "-8xb_8TG5BNln2xTI",
        });
    })();

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    const button = document.getElementById("send-btn");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        button.disabled = true;
        button.innerHTML = "Sending...";

        emailjs.sendForm(
            "service_kv7ydyt",
            "template_00ui3em",
            this
        )

        .then(() => {

            status.innerHTML = "✅ Mail sent successfully!";

            form.reset();

        })

        .catch((error) => {

            console.error(error);

            status.innerHTML = "❌ Failed to send Mail.";

        })

        .finally(() => {

            button.disabled = false;

            button.innerHTML = "Send Message";

        });

    });
    // =========================================
    // PAGE LOADER
    // =========================================

    window.addEventListener("load", () => {

        const loader = document.getElementById("loader");

        setTimeout(() => {

            loader.classList.add("hidden");

        }, 800);

    });
    console.log("Balaji Portfolio Loaded Successfully 🚀");