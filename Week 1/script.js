document.getElementById("aboutBtn").addEventListener("click", function() {
      const fact = "I love coding and learning new technologies every day!";
      const factBox = document.getElementById("funFact");
      factBox.textContent = fact;
      factBox.style.display = "block";
    });

    // Form Validation & Submission Simulation
    document.getElementById("contactForm").addEventListener("submit", function(event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name.length < 2) {
        alert("Name must be at least 2 characters long.");
        return;
      }
      if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
      }
      if (message.length < 5) {
        alert("Message must be at least 5 characters long.");
        return;
      }

      document.getElementById("formStatus").style.display = "block";
      document.getElementById("contactForm").reset();
    });