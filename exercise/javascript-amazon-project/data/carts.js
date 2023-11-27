import {addDelivery, removeDelivery } from "./delivery.js";

export let carts = JSON.parse(localStorage.getItem('carts')) || [];

export const getProducttoCart = (cartId,products) =>{
    for(let i = 0;i<products.length;i++){
        if(cartId === products[i].id) return products[i];
    }
}

export function saveCartToLocalStorage(carts){
    localStorage.setItem('carts',JSON.stringify(carts));
}

export function addToCart(id,quatity = 1){
    let falgs = true;
    carts.forEach(product=>{
        if(product.id === id){
            product.quatity += quatity;
            falgs = false
        }
    })
    if(falgs){
        carts.push({
            id,
            quatity,
        })
        addDelivery(id,0,7);
    }
    saveCartToLocalStorage(carts);
}

export const countProduct = () =>{
    let quatity = 0;
    carts.forEach(product=>{
        quatity += product.quatity;
    })
    return quatity
} 

export function removeFromCart(productId){
    removeDelivery(productId);
    carts.forEach((product,index)=>{
        if(product.id === productId){
            carts = (carts.slice(0,index).concat(carts.slice(index+1)));
            saveCartToLocalStorage(carts);
        }
    })
}

export function paymentfromCart(products){
    let totalCent=0;
    carts.forEach((cart)=>{
        totalCent += getProducttoCart(cart.id,products).priceCents*cart.quatity;
    });
    return totalCent;
} 

export function updateQuatity(productId,quatity){
    if(quatity === '0'){
        removeFromCart(productId); return;
    }
    else{
        if(!quatity) return;
        try{
            carts.forEach(product=>{
                if(product.id === productId){
                    product.quatity = (Number)(quatity);
                    saveCartToLocalStorage(carts);
                }
            })
        }
        catch{
            return;
        }
    }
}