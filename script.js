
const hintButtons = document.querySelectorAll(".hint-button");

hintButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const targetId = button.dataset.target;
        const hintContent = document.getElementById(targetId);
        const arrow = button.querySelector(".arrow");

        const isOpen = hintContent.classList.contains("show");

        // Tutup petunjuk yang sedang dibuka
        hintContent.classList.toggle("show", !isOpen);

        // Ubah simbol tombol
        arrow.textContent = isOpen ? "＋" : "−";

        // Perbarui status aksesibilitas
        button.setAttribute("aria-expanded", String(!isOpen));
    });
});
