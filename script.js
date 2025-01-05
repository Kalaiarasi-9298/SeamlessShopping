const searchInput = document.getElementById('search-input');
const productList = document.getElementById('product-list');
const productImages = document.getElementById('product-images');

searchInput.addEventListener('focus', function() {
    productList.style.display = 'block';
});

searchInput.addEventListener('input', function() {
    productList.style.display = 'block';
    productImages.style.display = 'none';
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.search-bar')) {
        productList.style.display = 'none';
    }
});

const items = productList.querySelectorAll('div');
items.forEach(item => {
    item.addEventListener('click', function() {
        searchInput.value = this.textContent;
        productList.style.display = 'none';
        productImages.style.display = 'block';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const setYourStoreLink = document.getElementById('set');
    const storeSearchContainer = document.createElement('div');
    const searchBarHTML = `
        <h2>Set Your Store</h2>
        <input type="text" id="zip-code-input" placeholder="Enter ZIP code" />
        <button id="search-store-button">Search Store</button>
        <p id="store-search-message"></p>
    `;

    storeSearchContainer.innerHTML = searchBarHTML;
    storeSearchContainer.style.display = 'none';
    storeSearchContainer.style.position = 'absolute';
    storeSearchContainer.style.top = '50px';
    storeSearchContainer.style.right = '20px';
    storeSearchContainer.style.backgroundColor = '#fff';
    storeSearchContainer.style.padding = '20px';
    storeSearchContainer.style.border = '1px solid #ddd';
    storeSearchContainer.style.borderRadius = '10px';
    storeSearchContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    document.body.appendChild(storeSearchContainer);

    setYourStoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        storeSearchContainer.style.display = 'block';
    });

    document.getElementById('search-store-button').addEventListener('click', function() {
        const zipCode = document.getElementById('zip-code-input').value;
        const messageElement = document.getElementById('store-search-message');

        if (zipCode) {
            messageElement.style.color = 'green';
            messageElement.textContent = `Searching for stores near ZIP code: ${zipCode}`;
        } else {
            messageElement.style.color = 'red';
            messageElement.textContent = 'Please enter a valid ZIP code.';
        }
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('#set') && !event.target.closest(storeSearchContainer)) {
            storeSearchContainer.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    updateCartCount();

    const productGrid = document.getElementById('product-grid');
    const addToCartButton = document.getElementById('add-to-cart-button');

    productGrid.addEventListener('click', function(event) {
        if (event.target.tagName === 'IMG') {
            showProductDescription(event.target);
        }
    });

    addToCartButton.addEventListener('click', function() {
        const productImage = document.querySelector('.product-description img').src;
        cartItems.push(productImage);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartCount();
        alert('Item added to cart!');
    });

    function showProductDescription(imageElement) {
        const productDescription = document.getElementById('product-description');
        const productImage = productDescription.querySelector('img');

        if (!productImage) {
            const img = document.createElement('img');
            img.src = imageElement.src;
            productDescription.insertBefore(img, productDescription.firstChild);
        } else {
            productImage.src = imageElement.src;
        }

        productDescription.style.display = 'block';
    }

    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cartItems.length;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cartItems.length;
});
const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', function() {
    const emailInput = document.getElementById('update-email');
    const email = emailInput.value.trim();
    if (email) {
        alert(`Thank you for signing up! Email: ${email}`);
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
});
document.querySelector('footer a[href="#"]').addEventListener('click', function(event) {
    event.preventDefault();
    alert('This link will direct you to our Privacy Policy page. Please check back soon for updates.');
});
document.querySelector('footer a[href="#"]').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Here are your privacy rights: \n\n1. Right to Access\n2. Right to Rectification\n3. Right to Erasure\n4. Right to Restrict Processing\n5. Right to Data Portability\n6. Right to Object\n7. Rights Related to Automated Decision Making\n\nFor more details, visit our Privacy Policy page.');
});

document.querySelector('footer a[href="#"][id="privacy-rights"]').addEventListener('click', function(event) {
    event.preventDefault();
    
    const privacyNotice = `
        <div id="privacy-notice" style="position: fixed; top: 20%; left: 20%; width: 60%; background-color: white; border: 1px solid #ccc; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);">
            <h2>Your Privacy Rights</h2>
            <p>We value your privacy and are committed to protecting your personal information. Here are some key points about your privacy rights:</p>
            <ul>
                <li>Right to Access: You can request access to the personal data we hold about you.</li>
                <li>Right to Rectification: You have the right to request corrections to inaccurate or incomplete personal data.</li>
                <li>Right to Erasure: You can request the deletion of your personal data under certain conditions.</li>
                <li>Right to Restrict Processing: You can ask us to restrict the processing of your personal data under certain circumstances.</li>
                <li>Right to Data Portability: You have the right to receive your personal data in a structured, commonly used, and machine-readable format.</li>
                <li>Right to Object: You can object to the processing of your personal data for direct marketing purposes.</li>
            </ul>
            <button id="close-privacy-notice">Close</button>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', privacyNotice);

    document.getElementById('close-privacy-notice').addEventListener('click', function() {
        document.getElementById('privacy-notice').remove();
    });
});

// document.getElementById('terms-link').addEventListener('click', function(event) {
//     alert(`Terms and Conditions
//     Welcome to Seamless Shopping! By accessing our website, you agree to be bound by the following terms and conditions:
//      Use of Website: You must be at least 18 years old to use this website. All information provided must be accurate and up-to-date.
//             Intellectual Property: All content, trademarks, and data on this website are the property of Seamless Shopping or its content suppliers and protected by law.
//         Limitation of Liability: Seamless Shopping is not responsible for any damages that may arise from the use of this website.
//             Changes to Terms: We reserve the right to update or modify these terms at any time without prior notice.
//           Privacy Policy: Please review our Privacy Policy to understand our practices regarding your personal information.
//         `)
// });