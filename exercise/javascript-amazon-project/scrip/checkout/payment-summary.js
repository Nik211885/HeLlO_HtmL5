import { countProduct,paymentfromCart } from "../../data/carts.js";
import formCentToDollar from "../utils/converMoney.js";
import {countDeliveryCent, updateDelivery } from "../../data/delivery.js";
import { products } from "../../data/products.js";

export function renderPayment(){
    let html = '';
    html += `<div class="payment-summary-title">
            Order Summary
        </div>

        <div class="payment-summary-row">
            <div>Items (${countProduct()}):</div>
            <div class="payment-summary-money">$${formCentToDollar(paymentfromCart(products))}</div>
        </div>

        <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formCentToDollar(countDeliveryCent())}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formCentToDollar(paymentfromCart(products) + countDeliveryCent())}</div>
        </div>

        <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formCentToDollar((paymentfromCart(products) + countDeliveryCent())*0.1)}</div>
        </div>

        <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">${formCentToDollar((paymentfromCart(products) + countDeliveryCent())*1.1)}</div>
        </div>

        <button class="place-order-button button-primary js-place-your-order">
            Place your order
        </button>`;
    document.querySelector('.payment-summary').innerHTML = html;
   
}

export function shipping(){
    document.querySelectorAll('input').forEach(input=>{
        input.addEventListener('click',()=>{
            if(input.checked){
                updateDelivery(input.getAttribute('name'),(Number)(input.dataset.shippingPrice));
                renderPayment();
            }
        })
    })
}