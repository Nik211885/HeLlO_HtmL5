var showLess = document.querySelector('.show-less');
var pdHidden = document.querySelector('.pd-hidden');
showLess.addEventListener('click',()=>{
    const less = showLess.textContent;
    if(less === 'Show more (5)'){
        pdHidden.style.display = 'flex';
        showLess.textContent = 'Show less'
    }
    else{
        pdHidden.style.display = null;
        showLess.textContent = 'Show more (5)'
    }
})