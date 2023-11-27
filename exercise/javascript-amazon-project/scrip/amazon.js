import { addToCart,countProduct } from "../data/carts.js";
import {products,searchProduct} from "../data/products.js"
import formCentToDollar from "./utils/converMoney.js";
const inputSearch = document.querySelector('.js-search-product');

inputSearch.value="";
renderProduct(products);
updateCart();

function renderProduct(products){
    let html = '';

    for (let i =0;i<(products.length<28?products.length:28);i++){
        html += `<div class="product-container">
            <div class="product-image-container">
            <img class="product-image"
                src="${products[i].image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
            ${products[i].name}
            </div>

            <div class="product-rating-container">
            <img class="product-rating-stars"
                src="./images/ratings/rating-${products[i].rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
                ${products[i].rating.count}
            </div>
            </div>

            <div class="product-price">
            $${formCentToDollar(products[i].priceCents)}
            </div>
            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart" data-primary-product-id=${products[i].id}>
                Add to Cart
            </button>
            </div>
        `;
    }

    document.querySelector('.products-grid').innerHTML = html;
}
const searchProductRender = () =>{
    if(inputSearch.value.length>0){
        renderProduct(searchProduct(inputSearch.value));
    }
    else{
        renderProduct(products);
    }
}
inputSearch.addEventListener('keydown',searchProductRender);

document.querySelector('.js-search-product').addEventListener('click',searchProductRender);

function addCart(){
    const btn = document.querySelectorAll('.js-add-to-cart')
    btn.forEach((button,index)=>{
        button.addEventListener('click',()=>{
            renderProduct(products);
            addToCart(document.querySelectorAll('.js-add-to-cart')[index].dataset.primaryProductId);
            updateCart();
            setTimeout(()=>{
                document.querySelectorAll(".added-to-cart")[index].style.opacity = 0;
            },330);
            document.querySelectorAll(".added-to-cart")[index].style.opacity = 1;
            addCart()
        });
    })
}

addCart();

function updateCart(){
    document.querySelector('.js-cart-quatity').innerHTML = countProduct();
}
