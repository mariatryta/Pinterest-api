// variables 
let input = document.getElementById('task');
const ul = document.querySelector('.collection'); 
const btn =  document.getElementById('Add');

function AddTask(e){
    e.preventDefault();
    const li = document.createElement('li');
    li.className = 'collection-item';
    const textnode = li.appendChild(document.createTextNode(input.value));         // Create a text node
    ul.appendChild(li);
    // clean the input
    input.value = " ";
}

btn.addEventListener('click', AddTask);
