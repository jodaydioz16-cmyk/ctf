
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


const flagForm = document.getElementById("flagForm");

flagForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // GANTI dengan nomor WhatsApp penyelenggara
    // Format: 628xxxxxxxxxx (tanpa +, spasi, atau angka 0 di depan)
    const nomorWhatsApp = "6281805321525";

    const nama = document.getElementById("nama").value.trim();
    const kelas = document.getElementById("kelas").value.trim();
    const challenge = document.getElementById("challenge").value;
    const flag = document.getElementById("flag").value.trim();

    if (!nama || !kelas || !challenge || !flag) {
        alert("Mohon lengkapi semua data terlebih dahulu!");
        return;
    }

    const pesan = `
[SUBMISSION CTF SMANSAPA]

Nama: ${nama}
Kelas: ${kelas}
Tantangan: ${challenge}
Flag: ${flag}

Mohon dilakukan verifikasi.
Terima kasih!
    `.trim();

    const urlWhatsApp =
        `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;

    window.open(urlWhatsApp, "_blank", "noopener,noreferrer");
});
