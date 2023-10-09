let input = document.querySelector("#todo-input");
let submit = document.querySelector("#todo-submit");
let list = document.querySelector("#todo-list");
function validateTodo(param){
    param.parentNode.classList.add('done');
}
function deleteTodo(param){
    param.parentNode.remove();
}
// à terminer...
// function getLocalStorage(){
//     let data = localStorage.getItem(('task')); // stock sur l'ordi avec localStorage
//     console.log(data);
// }
// function setLocalStorage(){
//     localStorage.setItem('task', data)
// }
submit.addEventListener('click', function(e){
    e.preventDefault();
    let myTask = input.value;
    input.value = ""; // pour vider l'input
    let li = document.createElement("li"); // créer l'élément li
    let liContent = `
        <span>${myTask}</span>
        <button class="btn btn-danger" onclick="deleteTodo(this)">Supprimer</button>
        <button class="btn btn-succes" onclick="validateTodo(this)">Fait</button>
    `;
    li.innerHTML = liContent; // ajoute contenu HTML
    list.appendChild(li); // ajoute le li à ul en tant qu'enfant
});

window.onload = function(){
    let mySavedData = getLocalStorage();
    if(mySavedData!=null){
        list.innerHTML = mySavedData;
    }else{
        list.innerHTML = "";
    }
}