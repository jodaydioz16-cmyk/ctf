
document.addEventListener("DOMContentLoaded", () => {

  // Reveal / hide hints
  const revealButtons = document.querySelectorAll(".reveal-btn");

  revealButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.target;
      const hint = document.getElementById(targetId);

      if (!hint) return;

      const isHidden = hint.hidden;
      hint.hidden = !isHidden;

      button.textContent = isHidden ? "Hide hint" : "Reveal hint";
    });
  });

  // Copy URL button
  const copyButtons = document.querySelectorAll(".copy-btn");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.dataset.copy;

      try {
        await navigator.clipboard.writeText(text);

        button.textContent = "Copied!";

        setTimeout(() => {
          button.textContent = "Copy URL";
        }, 1800);

      } catch (error) {
        button.textContent = "Copy failed";
        console.error("Clipboard error:", error);
      }
    });
  });

});
