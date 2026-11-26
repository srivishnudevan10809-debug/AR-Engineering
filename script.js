// ===============================
// MOBILE NAVIGATION
// ===============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
});

// Close menu when clicking navigation links

nav.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {
        nav.classList.remove("open");
    });

});


// ===============================
// AUTOMATIC COPYRIGHT YEAR
// ===============================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// ===============================
// PRODUCT FILTER
// ===============================

const filterButtons = document.querySelectorAll(".filter");

const productCards = document.querySelectorAll(".product-card");

const searchInput = document.getElementById("search");

let currentFilter = "all";


function filterProducts() {

    const searchText = searchInput.value.toLowerCase();

    productCards.forEach(function (card) {

        const brand = card.dataset.brand;

        const productText = card.innerText.toLowerCase();

        const matchesBrand =
            currentFilter === "all" ||
            brand === currentFilter;

        const matchesSearch =
            productText.includes(searchText);

        if (matchesBrand && matchesSearch) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


// ===============================
// FILTER BUTTONS
// ===============================

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class from all buttons

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        // Add active class to clicked button

        button.classList.add("active");

        // Update selected brand

        currentFilter = button.dataset.filter;

        // Display filtered products

        filterProducts();

    });

});


// ===============================
// PRODUCT SEARCH
// ===============================

searchInput.addEventListener("input", function () {

    filterProducts();

});


// ===============================
// WHATSAPP PRODUCT ENQUIRY
// ===============================

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Get product name

        const product = button.dataset.product;

        // Shop WhatsApp number

        const phoneNumber = "919025963075";

        // Create WhatsApp message

        const message =
            "Hi AR Engineering! I am interested in " +
            product +
            ". Please share price, availability and installation details.";

        // Generate WhatsApp link

        const whatsappURL =
            "https://wa.me/" +
            phoneNumber +
            "?text=" +
            encodeURIComponent(message);

        // Open WhatsApp

        window.open(whatsappURL, "_blank");

    });

});


// ===============================
// WEBSITE LOADED
// ===============================

console.log("AR Engineering website loaded successfully!");

console.log("CCTV products, search and WhatsApp are ready!");