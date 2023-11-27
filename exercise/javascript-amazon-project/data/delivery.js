export let delivery = JSON.parse(localStorage.getItem('delivery')) || [];


export function addDelivery(id,priceCent,day){
    delivery.push({
        id,
        priceCent,
        day,
    })
    localStorageDelivery();
}

export function countDeliveryCent(){
    let price = 0;
    delivery.forEach(deli=>{
        price += deli.priceCent;
    })
    return price;
}

export function updateDelivery(id,priceCent){
    let day = 0;
    priceCent === 0 ? day = 7:(priceCent === 499? day = 3 : day = 1);
    delivery.forEach(deli=>{
        if(deli.id === id){
            deli.priceCent = priceCent,
            deli.day = day,
            localStorageDelivery();
        }
    })
}

export function removeDelivery(id){
    delivery.forEach((deli,index)=>{
        if(deli.id === id){
            delivery = (delivery.slice(0,index).concat(delivery.slice(index+1)));
            localStorageDelivery();
        }
    })
}

export function localStorageDelivery(){
    localStorage.setItem('delivery',JSON.stringify(delivery));
}