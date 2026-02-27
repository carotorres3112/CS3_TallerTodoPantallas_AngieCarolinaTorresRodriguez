//creamos las constantes para acceder a los elementos del DOM con el id 
//que les asignamos en el index.html
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const subtitle = document.getElementById('subtitle');

//agregamos un evento click al botón de agregar tarea cuando precione Add
addBtn.addEventListener('click', function() {
    const texto = taskInput.value;
//si el texto esta vacio no se agrega nada y se sale de la funcion
    if (texto === '') {
        return;
    }

    const li = document.createElement('li');
    li.textContent = texto;
    taskList.appendChild(li);

    taskInput.value = '';

});