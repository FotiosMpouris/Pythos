// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Select all navigation links inside the header
  const navLinks = document.querySelectorAll("header nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      // Get the target section ID (without the '#' character)
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Smooth scroll to the target section
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
