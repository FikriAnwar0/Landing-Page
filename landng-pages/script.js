document.addEventListener("DOMContentLoaded", function () {
    AOS.init({ duration: 1000, once: true });

    // Memastikan ScrollReveal sudah terload
    if (typeof ScrollReveal !== "undefined") {
        ScrollReveal().reveal("#fitur div, #statistik div", {
            delay: 200,
            distance: "50px",
            origin: "bottom",
            duration: 1000,
            easing: "ease-in-out",
            interval: 200
        });
    } else {
        console.error("ScrollReveal tidak terload.");
    }

    // Menunggu Chart.js sebelum menjalankan
    setTimeout(() => {
        if (typeof Chart !== "undefined") {
            // Data untuk grafik
            let dataLabels = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober"];
            let dataValues = [600, 450, 360, 700, 900, 1000, 1200, 1500, 1700, 2000];

            let dataLabelss = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober"];
            let dataValuess = [2000, 2300, 2500, 2000, 1500, 1000, 700, 500, 450, 300]

            // Grafik Bar
            new Chart(document.getElementById("barChart"), {
                type: "bar",
                data: {
                    labels: dataLabels,
                    datasets: [{ label: "Pengguna Aktif", data: dataValues, backgroundColor: "rgba(34, 197, 94, 0.8)", borderRadius: 8 }]
                },
                options: {
                    responsive: true,
                    animation: { duration: 2000, easing: "easeOutBounce" },
                    plugins: { legend: { display: false } }
                }
            });

            // Grafik Bar
            new Chart(document.getElementById("barChartt"), {
                type: "bar",
                data: {
                    labels: dataLabelss,
                    datasets: [{ label: "Pengguna Tidak Aktif", data: dataValuess, backgroundColor: "rgba(34, 197, 94, 0.8)", borderRadius: 8 }]
                },
                options: {
                    responsive: true,
                    animation: { duration: 2000, easing: "easeOutBounce" },
                    plugins: { legend: { display: false } }
                }
            });

            // Grafik Doughnut
            new Chart(document.getElementById("doughnutChart"), {
                type: "doughnut",
                data: {
                    labels: ["Desktop", "Mobile", "Tablet"],
                    datasets: [{ data: [50, 30, 20], backgroundColor: ["#2ecc71", "#27ae60", "#1abc9c"] }]
                },
                options: {
                    responsive: true,
                    animation: { animateScale: true, animateRotate: true },
                    plugins: { legend: { position: "bottom" } }
                }
            });

            // Grafik Line
            new Chart(document.getElementById("lineChart"), {
                type: "line",
                data: {
                    labels: dataLabels,
                    datasets: [{ label: "Tren Pertumbuhan", data: dataValues, borderColor: "#27ae60", borderWidth: 2, fill: false }]
                },
                options: {
                    responsive: true,
                    animation: { duration: 2000, easing: "easeInOutQuart" },
                    plugins: { legend: { display: false } }
                }
            });


            // Grafik Line
            new Chart(document.getElementById("lineChartt"), {
                type: "line",
                data: {
                    labels: dataLabelss,
                    datasets: [{ label: "Tren Perkembangan", data: dataValuess, borderColor: "#27ae60", borderWidth: 2, fill: false }]
                },
                options: {
                    responsive: true,
                    animation: { duration: 2000, easing: "easeInOutQuart" },
                    plugins: { legend: { display: false } }
                }
            });

            // Grafik Radar
            new Chart(document.getElementById("radarChart"), {
                type: "radar",
                data: {
                    labels: ["Pelajar", "Mahasiswa", "Karyawan", "Pebisnis", "Freelancer"],
                    datasets: [{ label: "Kategori", data: [70, 85, 60, 50, 40], backgroundColor: "rgba(39, 174, 96, 0.3)", borderColor: "#27ae60", borderWidth: 2 }]
                },
                options: {
                    responsive: true,
                    animation: { duration: 2000, easing: "easeInOutCirc" },
                    plugins: { legend: { position: "bottom" } }
                }
            });
        } else {
            console.error("Chart.js tidak terload.");
        }
    }, 500);

    // Inisialisasi Swiper.js untuk slider testimoni
    new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 30, // Jarak antar kartu testimoni
    });

    // Animasi masuk untuk testimoni
    gsap.from(".swiper-slide", {
        opacity: 0,
        y: 50,
        duration: 1.5,
        stagger: 0.3,
        ease: "power2.out"
    });

});



document.addEventListener("DOMContentLoaded", function () {
    console.log("FAQ Section Initialized");

    // Mengambil semua item FAQ
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".faq-icon");

        // Menambahkan event listener untuk membuka/tutup FAQ
        question.addEventListener("click", () => {
            const isOpen = answer.classList.contains("hidden");

            // Tutup semua FAQ lainnya
            faqItems.forEach((el) => {
                el.querySelector(".faq-answer").classList.add("hidden");
                el.querySelector(".faq-icon").textContent = "+";
                gsap.to(el.querySelector(".faq-answer"), { height: 0, opacity: 0, duration: 0.3 });
            });

            if (isOpen) {
                answer.classList.remove("hidden");
                icon.textContent = "-";
                gsap.fromTo(answer, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.5, ease: "power2.out" });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Kontak Section Initialized");

    const form = document.getElementById("contact-form");

    // Animasi saat mengetik (Anime.js)
    document.querySelectorAll("#contact-form input, #contact-form textarea").forEach((input) => {
        input.addEventListener("focus", () => {
            anime({
                targets: input,
                scale: 1.05,
                duration: 300,
                easing: "easeInOutQuad"
            });
        });

        input.addEventListener("blur", () => {
            anime({
                targets: input,
                scale: 1,
                duration: 300,
                easing: "easeInOutQuad"
            });
        });
    });

    // Event submit form dengan efek animasi tombol GSAP
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        gsap.to("#contact-form button", {
            scale: 1.2,
            duration: 0.3,
            yoyo: true,
            repeat: 1
        });

        setTimeout(() => {
            alert("Pesan Anda telah dikirim!");
            form.reset();
        }, 1000);
    });

    // Animasi masuk untuk section kontak
    gsap.from("#kontak .bg-white", {
        y: 50,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out"
    });

    // Efek hover skala dengan GSAP
    document.querySelectorAll("#kontak .bg-white").forEach((card) => {
        card.addEventListener("mouseenter", () => {
            gsap.to(card, { scale: 1.03, duration: 0.3 });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(card, { scale: 1, duration: 0.3 });
        });
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}