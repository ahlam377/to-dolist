//selectors
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click',handelClickDeletOrCheck);
document.getElementById('clearAll').addEventListener('click' , handleClearAll);

let todos = [];


//Event Handeler
function handleSubmitForm(e){

    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '');
       addTodo(input.value);
        input.value =''; 

}


//Helpers
function addTodo(todo){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    
    li.innerHTML =`
       <span class ="todo-item">${todo}</span>
       <button name="checkButton"><i class="fa fa-check" aria-hidden="true"></i></button>
       <button name="deletButton"><i class="fa fa-trash" aria-hidden="true"></i></button>
       `;
    li.classList.add('todo-List-item');
    ul.appendChild(li); 
    
}

function handelClickDeletOrCheck(e){
    if(e.target.name =='checkButton')
    checkTodo(e);

    if(e.target.name =='deletButton')
    deleteTodo(e);
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}


//delet and check
function checkTodo(e){
    let item = e.target.parentNode;
    if(item.style.textDecoration == 'line-through')
    item.style.textDecoration = 'none'
    else 
       item.style.textDecoration = 'line-through';
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    item.remove();
}

