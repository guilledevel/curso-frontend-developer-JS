
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbardShoping = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

const cardsContainer = document.querySelector('.cards-container')

const productList = []
productList.push({
    name: 'Product 1',
    price: 100,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""'
})
productList.push({
    name: 'Zapato',
    price: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""'
})
productList.push({
    name: 'Polera',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""'
})


console.log(productList)

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
navbardShoping.addEventListener('click', toggleProductDetails);

function toggleDesktopMenu() {
    let isProductDetailClosed = productDetail.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    let isProductDetailClosed = productDetail.classList.contains('inactive');
    if (!isProductDetailClosed) {
        productDetail.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetails() {
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed || !isDesktopMenuClosed ) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');  
    }
    productDetail.classList.toggle('inactive');
}

function renderProduct(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
        <img src="${product.image}" alt="">
        <div class="product-info">
            <div>
                <p>$${product.price}</p>
                <p>${product.name}</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
        `
        cardsContainer.appendChild(productCard);
    }
}

renderProduct(productList);
