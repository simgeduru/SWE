document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger-menu');
    const wifiIcon = document.getElementById('wifi-icon');

    // Hamburger menü aç/kapat
    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active');
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
    
    // Otomatik seçili olacak ürünler
    const defaultSelected = ["Smart Power", "Temperature", "Gateway"];
    
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

document.addEventListener("DOMContentLoaded", () => {
    const productItems = document.querySelectorAll(".product-item");
    const selectedProductsList = document.querySelector(".selected-products");
    
    // Otomatik olarak seçili olacak ve değiştirilemeyecek ürünler
    const defaultSelected = ["Smart Power", "Temperature", "Gateway"];
    const selectedProducts = {};

    productItems.forEach(item => {
        const productName = item.dataset.name;

        if (defaultSelected.includes(productName)) {
            item.classList.add("selected", "default-selected");
            selectedProducts[productName] = 1; // Başlangıçta adet 1
            updateSelectedProducts();
        }

        item.addEventListener("click", () => {
            if (!item.classList.contains("default-selected")) {
                if (selectedProducts[productName]) {
                    delete selectedProducts[productName];
                    item.classList.remove("selected");
                } else {
                    selectedProducts[productName] = 1;
                    item.classList.add("selected");
                }
                updateSelectedProducts();
            }
        });
    });

    function updateSelectedProducts() {
        selectedProductsList.innerHTML = "";

        Object.keys(selectedProducts).forEach(product => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${product}</span>
                <div>
                    <button class="decrease" data-name="${product}">-</button>
                    <span class="quantity">${selectedProducts[product]}</span>
                    <button class="increase" data-name="${product}">+</button>
                </div>
            `;
            selectedProductsList.appendChild(listItem);
        });

        document.querySelectorAll(".increase").forEach(button => {
            button.addEventListener("click", () => {
                const productName = button.dataset.name;
                selectedProducts[productName]++;
                updateSelectedProducts();
            });
        });

        document.querySelectorAll(".decrease").forEach(button => {
            button.addEventListener("click", () => {
                const productName = button.dataset.name;
                if (selectedProducts[productName] > 1) {
                    selectedProducts[productName]--;
                } else if (!defaultSelected.includes(productName)) {
                    delete selectedProducts[productName];
                    document.querySelector(`[data-name="${productName}"]`).classList.remove("selected");
                }
                updateSelectedProducts();
            });
        });
    }
});
