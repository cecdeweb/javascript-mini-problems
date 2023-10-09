let submit = document.querySelector('#todo-submit');
let input = document.querySelector('#todo-input');
let list = document.querySelector('#todo-list');
function validateTodo(target){
   target.parentNode.classList.add('done');
   let myData = list.innerHTML;                // pour récupérer le contenu de la liste
   setLocalStorage(myData);                    // pour sauvegarder le contenu de la liste
}
function deleteTodo(target){
    target.parentNode.remove();
    let myData = list.innerHTML;                // pour récupérer le contenu de la liste
    console.log(myData)
    setLocalStorage(myData);                    // pour sauvegarder le contenu de la liste
}
function getLocalStorage(){
    let data = localStorage.getItem('blablabla');
    return data;
}
function setLocalStorage(data){
    localStorage.setItem('blablabla', data);
}
window.onload = function(){                         //   onload: au chargement de la page
    let mySavedData = getLocalStorage();
    if(mySavedData != null){                        // si il y a des données dans le local storage
        list.innerHTML = mySavedData;               // on les injecte dans le <ul>
    }else{
        list.innerHTML = "";                        // sinon on met une chaine vide
    }
}
submit.addEventListener('click', function(e){
    e.preventDefault();                             // pour ne pas recharger la page
    let myTask = input.value;                       // pour récupérer la valeur de l'input
    if(myTask == ""){                               // si l'input est vide
        alert('Veuillez saisir une tâche');         // on affiche une alerte
        return false;                               // on arrête la fonction
    }else{                                          // sinon
        input.value = "";                           // ou form.reset();
        let li = document.createElement('li');      // pour créer un élément li
        let liContent = `
            <span>${myTask}</span>
            <button class="btn btn-danger" onclick="deleteTodo(this)">Supprimer</button>
            <button class="btn btn-success" onclick="validateTodo(this)">Fait</button>
        `;
        li.innerHTML = liContent;                   // pour ajouter le contenu de l'input dans le li
        list.appendChild(li);                       // pour ajouter le li dans la liste
        let myData = list.innerHTML;                // pour récupérer le contenu de la liste
        setLocalStorage(myData);                    // pour sauvegarder le contenu de la liste
    }
})