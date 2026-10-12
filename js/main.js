const menuToggle = document.querySelector(".mobile-menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("mobile-open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("mobile-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });

}

// ========================================
// ENQUIRY FORM
// ========================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const statusMessage = contactForm.querySelector(".contact-form-status");
    const originalText = submitBtn.textContent;

    statusMessage.textContent = "";
    statusMessage.className = "contact-form-status";

    const formData = new FormData(contactForm);

    formData.append(
      "access_key",
      "5f9bcbc2-d800-4df7-9a4b-ce700375e9ba"
    );

    formData.append("subject", "Ready Set Drive Website Enquiry");
    formData.append("from_name", "Ready Set Drive Website");

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send enquiry.");
      }

      console.log("Enquiry sent successfully:", result);
      contactForm.reset();

      statusMessage.textContent =
        "Thanks — your enquiry has been sent. We'll get back to you soon.";
      statusMessage.classList.add("success");

    } catch (error) {
      console.error("Enquiry error:", error);

      statusMessage.textContent =
        "Sorry, we couldn't send your enquiry. Please try again or contact us on WhatsApp.";
      statusMessage.classList.add("error");

    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  });
}
