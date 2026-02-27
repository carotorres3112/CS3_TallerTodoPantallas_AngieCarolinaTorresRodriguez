//creamos las constantes para acceder a los elementos del DOM con el id 
//que les asignamos en el index.html
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const subtitle = document.getElementById('subtitle');
const emptyMsg = document.getElementById('emptyMsg');
const contador = document.getElementById('contador');

function actualizarMensaje(){
    const tareas = taskList.querySelectorAll('li');
    const completadas = taskList.querySelectorAll('.tarea-completada');
    if(tareas.length === 0){
        emptyMsg.style.display = 'block'; 
        contador.style.display = 'none';
    } else{
        emptyMsg.style.display = 'none';
        contador.style.display = 'block';
        contador.textContent = completadas.length + ' of ' + tareas.length + ' completed';
    }
}
//agregamos un evento click al botón de agregar tarea cuando precione Add
addBtn.addEventListener('click', function() {
    const texto = taskInput.value;
//si el texto esta vacio no se agrega nada y se sale de la funcion
    if (texto === '') {
        return;
    }

    const li = document.createElement('li');
    li.textContent = texto;

    li.addEventListener('click', function(e){
        if(e.target !== btnEliminar){
            li.classList.toggle('tarea-completada');
            actualizarMensaje();
        }
    });

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'x';
    btnEliminar.classList.add('btn-eliminar');

    btnEliminar.addEventListener('click', function() {
        taskList.removeChild(li);
        actualizarMensaje();
    });

    li.appendChild(btnEliminar);
    taskList.appendChild(li);

    taskInput.value = '';
    actualizarMensaje();
});
actualizarMensaje();