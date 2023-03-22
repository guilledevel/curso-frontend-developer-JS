
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const navbardShoping = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const coutn = document.getElementById('count')
const asideClose = document.querySelector('.aside-close')

const cardsContainer = document.querySelector('.cards-container')
const asideContainer = document.querySelector('.aside-container')
const btnAdd = document.getElementById('btn-add')

let countShoppin = 0;

const productList = []
productList.push({
    name: 'camera',
    price: 100,
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""'
})
productList.push({
    name: 'soap',
    price: 200,
    image: 'https://images.pexels.com/photos/7615805/pexels-photo-7615805.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""'
})
productList.push({
    name: 'bicycle',
    price: 300,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""'
})
productList.push({
    name: 'makeups',
    price: 200,
    image: 'https://images.pexels.com/photos/2586073/pexels-photo-2586073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""'
})


console.log(productList)

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
navbardShoping.addEventListener('click', toggleProductDetails);
btnAdd.addEventListener('click', countInit);
asideClose.addEventListener('click', asideCloseToggle);


function toggleDesktopMenu() {
    let isProductDetailClosed = productDetail.classList.contains('inactive');
    let isAsideContainerClosed = asideContainer.classList.contains('inactive');
    if (!isProductDetailClosed || !isAsideContainerClosed) {
        productDetail.classList.add('inactive');
        asideContainer.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    let isProductDetailClosed = productDetail.classList.contains('inactive');
    let isAsideContainerClosed = asideContainer.classList.contains('inactive');
    if (!isProductDetailClosed || !isAsideContainerClosed) {
        productDetail.classList.add('inactive');
        asideContainer.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleProductDetails() {
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    let isAsideContainerClosed = asideContainer.classList.contains('inactive');
    if (!isMobileMenuClosed || !isDesktopMenuClosed || !isAsideContainerClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');  
        asideContainer.classList.add('inactive');
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
                <img id="product-info" src="./icons/bt_add_to_cart.svg" alt="">
            </figure>
        </div>
        `
        cardsContainer.appendChild(productCard);
    }
}
renderProduct(productList);

const productInfo = document.getElementById('product-info')
productInfo.addEventListener('click', toggleProductInfo);

function toggleProductInfo() {
    let isProductDetailClosed = productDetail.classList.contains('inactive');
    let isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if (!isDesktopMenuClosed || !isMobileMenuClosed || !isProductDetailClosed) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');  
        productDetail.classList.add('inactive');
    }
    asideContainer.classList.toggle('inactive')
}

function countInit() {
    countShoppin ++
    coutn.innerHTML = countShoppin;
}

function asideCloseToggle() {
    asideContainer.classList.toggle('inactive')
}