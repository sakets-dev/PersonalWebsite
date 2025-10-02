// ===== Utility function to close any modal =====
function closeModal(modalId, contentId) {
    const modal = document.getElementById(modalId);
    const content = document.getElementById(contentId);
  
    modal.classList.remove("opacity-100");
    modal.classList.add("opacity-0");
    content.classList.remove("scale-100");
    content.classList.add("scale-95");
  
    setTimeout(() => {
      modal.classList.add("hidden");
    }, 300);
  }
  
  // ===== Projects =====
  function openProjects() {
    const modal = document.getElementById("projects-modal");
    const content = document.getElementById("projects-content");
  
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.remove("opacity-0");
      modal.classList.add("opacity-100");
      content.classList.remove("scale-95");
      content.classList.add("scale-100");
    }, 10);
  }
  function closeProjects() {
    closeModal("projects-modal", "projects-content");
  }
  
  // ===== Accomplishments =====
  function openAccomplishments() {
    const modal = document.getElementById("accomplishments-modal");
    const content = document.getElementById("accomplishments-content");
  
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.remove("opacity-0");
      modal.classList.add("opacity-100");
      content.classList.remove("scale-95");
      content.classList.add("scale-100");
    }, 10);
  }
  function closeAccomplishments() {
    closeModal("accomplishments-modal", "accomplishments-content");
  }
  
  // ===== Experience =====
  function openExperience() {
    const modal = document.getElementById("experience-modal");
    const content = document.getElementById("experience-content");
  
    modal.classList.remove("hidden");
    setTimeout(() => {
      modal.classList.remove("opacity-0");
      modal.classList.add("opacity-100");
      content.classList.remove("scale-95");
      content.classList.add("scale-100");
    }, 10);
  }
  function closeExperience() {
    closeModal("experience-modal", "experience-content");
  }
  
  // ===== Global Escape Key Listener =====
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      // Close any open modal
      if (!document.getElementById("projects-modal").classList.contains("hidden")) {
        closeProjects();
      }
      if (!document.getElementById("accomplishments-modal").classList.contains("hidden")) {
        closeAccomplishments();
      }
      if (!document.getElementById("experience-modal").classList.contains("hidden")) {
        closeExperience();
      }
    }
  });
  