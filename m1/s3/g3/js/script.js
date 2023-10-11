let bottone = document.getElementById("button")

bottone.addEventListener("click", function (){

    let lista = document.getElementById("task-list");

    let input = document.getElementById("task-input");

    if (!input.value) return;

    let li = document.createElement("li");
    li.classList.add('list-item');
    li.innerText = input.value;
    
    lista.append(li)

    input.value = '';
});


let deleteButton = document.createElement('button');
deleteButton.textContent = "Elimina";
deleteButton.addEventListener("click", function(){

})