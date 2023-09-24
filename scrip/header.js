const change = document.querySelectorAll('.contaner')
const btn = document.querySelectorAll('button')
const btnNav = document.querySelectorAll('.hidden')
btn.forEach((button)=>{
    let a=0;
    let b=0;
    let a1=0;
    let b1=0;
    button.addEventListener(('mouseenter'),()=>{
        btnNav.forEach((nav,index)=>{
            if(nav.offsetHeight>0){
                a=(nav.offsetHeight);
                a1=index;
                return;
            }
        })
        change.forEach((chane,index)=>{
            if(chane.offsetHeight>0){
                b=(chane.offsetHeight);
                b1=index;
                return;
            }
        })
        if(a>b){
            change[b1].style.height=`${a}px`
        }
        else{
            btnNav[a1].style.height=`${b}px`
        }
    })
    button.addEventListener(('mouseleave'),()=>{
        change[b1].style.height=null;
        btnNav[a1].style.height=null;
    })
})