const btnAdd = document.querySelector('.add');
let todoList = JSON.parse(localStorage.getItem('dohomework')) || [];
const jsWork = document.querySelector('.js-input-work');
const jsDdate = document.querySelector('.js-input-date');
let text = '';
update(todoList);

btnAdd.addEventListener('click',()=>{
    const work = jsWork.value;
    const date =  jsDdate.value;
    if(work && date){
        todoList.push({
            work,
            date,
        });
        text += updateText({work,date,},todoList.length - 1);
        document.querySelector('.conatner').innerHTML = text;
        localStorage.setItem('dohomework',JSON.stringify(todoList));
        document.querySelector('#js-input-form').reset();
    }
    else{
        if(!work){
            jsWork.style.border='2px solid red';
        }
        else{
            jsWork.style.border=null;
        }
        if(!date){
            jsDdate.style.border='2px solid red';
        }
        else{
            jsDdate.style.border=null;
        }
    }
})
function update(todoList){
    todoList.forEach((element,index)=>{
        text += updateText(element,index);
    })
    document.querySelector('.conatner').innerHTML = text;
}
function updateText(element,index){
    return `<div class="works-time center data-index = ${index}">
        <span class = "work-notify">${cutText(element.work)}</span>
        <span class = "date-notify">${element.date}</span>
        <button class="del", onclick="delFuntion(${index})">Delete</button>
    </div>`;
}

[jsDdate,jsWork].forEach((input)=>{
    input.addEventListener('focus',()=>{
        input.style.border =  '2px solid rgba(65, 61, 61, 0.76)';
    })
})


function cutText(text){
    return (text.length<25)?text:`${text.slice(0,25)}...`
}

function delFuntion(index){
    todoList = todoList.slice(0,index).concat(todoList.slice(index+1));
    text  = '';
    update(todoList);
    console.log(todoList);
    localStorage.setItem('dohomework',JSON.stringify(todoList));    
}