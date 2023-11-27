import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs@2.0.0-alpha.4/+esm';
import {countProduct, getProducttoCart,updateQuatity as updatequa,carts} from "../../data/carts.js";
import formatDate from "../utils/formatDate.js";
import formCentToDollar from "../utils/converMoney.js";
import { delivery } from '../../data/delivery.js';
import { renderPayment, shipping } from './payment-summary.js';
import { products } from '../../data/products.js';


export function renderInforDelivery(){
    const dayNow = dayjs();
    let html = '';
    carts.forEach((product)=>{
        const inforProduct = getProducttoCart(product.id, products);
        let check = 0;
        delivery.forEach(deli=>{
            if(deli.id === product.id){
                check = deli["day"]
            }
        })
        html += `<div class="cart-item-container">
            <div class="delivery-date">
            Delivery date: ${formatDate(dayNow)}
            </div>

            <div class="cart-item-details-grid">
            <img class="product-image"
                src="${inforProduct.image}">

            <div class="cart-item-details">
                <div class="product-name">
                ${inforProduct.name}
                </div>
                <div class="product-price">
                ${formCentToDollar(inforProduct.priceCents)}
                </div>
                <div class="product-quantity">
                <span>
                    Quantity: <span class="quantity-label">${product.quatity}</span>
                </span>
                <span class="update-quantity-link link-primary js-update-quatity" data-primary-product-id = ${product.id}>
                    Update
                </span>
                <span class="delete-quantity-link link-primary js-delete" data-primary-id-product = ${product.id}>
                    Delete
                </span>
                </div>
            </div>

            <div class="delivery-options">
                <div class="delivery-options-title">
                Choose a delivery option:
                </div>

                <div class="delivery-option">
                <input type="radio" class="delivery-option-input"
                    name="${inforProduct.id}"} ${check === 7?"checked":""} data-shipping-price = 0>
                <div>
                    <div class="delivery-option-date">
                    ${formatDate(dayNow.add(7,'day'))}
                    </div>
                    <div class="delivery-option-price">
                    FREE Shipping
                    </div>
                </div>
                </div>
                <div class="delivery-option">
                <input type="radio" class="delivery-option-input"
                    name="${inforProduct.id}" ${check === 3?"checked":""} data-shipping-price = 499>
                <div>
                    <div class="delivery-option-date">
                    ${formatDate(dayNow.add(3,'day'))}
                    </div>
                    <div class="delivery-option-price">
                    $4.99 - Shipping
                    </div>
                </div>
                </div>
                <div class="delivery-option">
                <input type="radio" class="delivery-option-input"
                    name="${inforProduct.id}" ${check === 1?"checked":""} data-shipping-price = 999>
                <div>
                    <div class="delivery-option-date">
                    ${formatDate(dayNow)}
                    </div>
                    <div class="delivery-option-price">
                    $9.99 - Shipping
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>`;
    });
    document.querySelector('.order-summary').innerHTML = html;
    document.querySelector('.js-checkout-items').innerHTML = `${countProduct()} items`
}


export function updateQuatity(call){
    let flags1 = true;
    document.querySelectorAll('.js-update-quatity').forEach((update)=>{
        let falgs = true;
        update.addEventListener('click',()=>{
            if(falgs && flags1){
                update.innerHTML=`<input type = "number" class = "input-update-quatity" min = 0 max = 10>`
                const quatityInput = document.querySelector('.input-update-quatity');
                quatityInput.addEventListener('blur',()=>{
                    updatequa(update.dataset.primaryProductId,quatityInput.value);
                    renderPayment();
                    renderInforDelivery();
                    shipping();
                    call();
                    updateQuatity(call);
                })
            }
            flags1 = false;
            falgs = false;
        })
    })
}
