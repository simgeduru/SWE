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

    // Sidebar ürün seçim işlemi
    const productItems = document.querySelectorAll('.product-item');
    const selectedProductsList = document.querySelector('.selected-products');
    
    productItems.forEach(item => {
        item.addEventListener('click', () => {
            if (!item.classList.contains('selected-item')) {
                item.classList.add('selected-item');
                const selectedItem = document.createElement('li');
                selectedItem.textContent = item.textContent;
                selectedItem.classList.add('selected-item');
                selectedProductsList.appendChild(selectedItem);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const productItems = document.querySelectorAll(".product-item");
    
    // Default selected products
    const defaultSelected = ["Smart Power", "Temperature"];
    
    productItems.forEach(item => {
        const productName = item.querySelector("span").innerText.trim();
        
        if (defaultSelected.includes(productName)) {
            item.classList.add("selected", "default-selected");
        }
        
        item.addEventListener("click", () => {
            if (!item.classList.contains("default-selected")) {
                item.classList.toggle("selected");
            }
        });
    });
});

