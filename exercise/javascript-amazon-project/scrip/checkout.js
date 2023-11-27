import {renderInforDelivery,updateQuatity} from "./checkout/order-summary.js"
import { carts, removeFromCart } from "../data/carts.js"
import { renderPayment,shipping } from "./checkout/payment-summary.js";


renderInforDelivery();
shipping();
renderPayment();
function removeProductInCart(){
    document.querySelector('.js-place-your-order').addEventListener('click',()=>{
        if(carts.length){
            open('./orders.html','_self');
        }
        else{
            alert('Your carts not nothing');
        }
    })
    updateQuatity(removeProductInCart);
    document.querySelectorAll('.js-delete').forEach((button,index)=>{
        button.addEventListener('click',()=>{
            renderInforDelivery();
            removeFromCart(document.querySelectorAll('.js-delete')[index].dataset.primaryIdProduct);
            renderInforDelivery();
            shipping();
            renderPayment();
            removeProductInCart();
            
        })
    })
}
removeProductInCart();