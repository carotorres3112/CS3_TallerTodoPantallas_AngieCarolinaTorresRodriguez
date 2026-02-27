const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const subtitle = document.getElementById('subtitle');
const emptyMsg = document.getElementById('emptyMsg');
const contador = document.getElementById('contador');

function actualizarMensaje(){
    const tareas = taskList.querySelectorAll('li');
    const completadas = taskList.querySelectorAll('.completada');
    const pendientes = tareas.length - completadas.length;

    if(tareas.length === 0){
        emptyMsg.style.display = 'block'; 
        contador.style.display = 'none';
        subtitle.textContent = 'Add something to get started';
    } else{
        emptyMsg.style.display = 'none';
        contador.style.display = 'block';
        contador.textContent = completadas.length + ' of ' + tareas.length + ' completed';
        subtitle.textContent = pendientes + ' pending tasks';
    }
}

    addBtn.addEventListener('click', function() {
    const texto = taskInput.value;

    if (texto === '') {
        return;
    }

    const li = document.createElement('li');

    const spanTexto = document.createElement('span');
    spanTexto.textContent = texto;
    spanTexto.classList.add('texto-tarea');
    li.appendChild(spanTexto);

    const badgeAnterior = taskList.querySelector('.badge-new');
    if (badgeAnterior) {
        badgeAnterior.remove();
    }

    const badge = document.createElement('span');
    badge.textContent = 'new';
    badge.classList.add('badge-new');
    li.appendChild(badge);

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = '×';
    btnEliminar.classList.add('btn-eliminar');

    btnEliminar.addEventListener('click', function(e) {
        e.stopPropagation();
        taskList.removeChild(li);
        actualizarMensaje();
    });

    li.appendChild(btnEliminar);

    li.addEventListener('click', function(e){
        if(e.target !== btnEliminar){
            spanTexto.classList.toggle('tarea-completada');
            li.classList.toggle('completada');
            actualizarMensaje();
        }
    });

    taskList.insertBefore(li, taskList.firstChild);
    taskInput.value = '';
    actualizarMensaje();
});

actualizarMensaje();