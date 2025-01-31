document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger-menu');
    const wifiIcon = document.getElementById('wifi-icon');

    // Hamburger menü aç/kapat
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // CTA Butonu Click Animasyonu
    const ctaButton = document.querySelector('.cta-btn');
    ctaButton.addEventListener('click', () => {
        ctaButton.style.transform = 'scale(0.9)';
        setTimeout(() => {
            ctaButton.style.transform = 'scale(1)';
        }, 200);
    });

    // Mouse move animasyonu (WiFi ikonu)
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth * 30 - 15;
        const y = e.clientY / window.innerHeight * 30 - 15;
        wifiIcon.style.transform = `translate(${x}px, ${y}px)`;
    });
});
