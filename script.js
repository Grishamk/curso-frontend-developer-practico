const navBar = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navBar.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const isShoppingCarClosed = productDetail.classList.contains('inactive');
    const isProductDetailClosed = realProductDetail.classList.contains('inactive');

    if (!isShoppingCarClosed) {
        productDetail.classList.add('inactive');
    }

    if(!isProductDetailClosed) {
        realProductDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}



const burgerMenu = document.querySelector('.menu');
const toggleBurgerMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isShoppingCarClosed = productDetail.classList.contains('inactive');
    const isProductDetailClosed = realProductDetail.classList.contains('inactive');
    
    if (!isShoppingCarClosed) {
        productDetail.classList.add('inactive');
    }

    if (!isProductDetailClosed) {
        realProductDetail.classList.add('inactive');
    }


    toggleBurgerMenu.classList.toggle('inactive');
}



const shoppingCar = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail');

shoppingCar.addEventListener('click', toggleProductDetail);

function toggleProductDetail () {
    const isMobileMenuClosed = toggleBurgerMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isProductDetailClosed = realProductDetail.classList.contains('inactive');

    if (!isMobileMenuClosed) {
        toggleBurgerMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    }

    if (!isProductDetailClosed) {
        realProductDetail.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}


const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Computadora',
    price: 700,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Playstation 5',
    price: 650,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Xbox Series S',
    price: 300,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

const cardsContainer = document.querySelector('.cards-container');

for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImage = document.createElement('img');
    productImage.setAttribute('src', product.img);
    productImage.addEventListener('click', openProductDetail);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p')
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p')
    productName.innerText = product.name;

    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');

    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCard);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImage, productInfo);

    cardsContainer.appendChild(productCard);
}


const realProductDetail = document.querySelector('.product-detail2');
const productClose = document.querySelector('.product-detail2-close');

productClose.addEventListener('click', closeProductDetail);

function openProductDetail() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isShoppingCarClosed = productDetail.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    if(!isShoppingCarClosed) {
        productDetail.classList.add('inactive');
    }

    realProductDetail.classList.remove('inactive');
}

function closeProductDetail() {
    realProductDetail.classList.add('inactive')
}