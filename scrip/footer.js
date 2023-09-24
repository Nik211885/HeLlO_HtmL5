const navShow = document.querySelectorAll('.top');
const show=document.querySelectorAll('.show');
const down = document.querySelectorAll('.down')
navShow.forEach((nav,index)=>{
    nav.addEventListener('click',()=>{
        const tmp = show[index].style.display;
        if(tmp){
            
            down[index].style.rotate='0deg';
            show[index].style.display=null;
        }
        else{
            
            down[index].style.rotate='180deg';
            show[index].style.display='block';
        }
    })
})