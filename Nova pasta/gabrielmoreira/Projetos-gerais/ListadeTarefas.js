document.getElementById('add-task-button').addEventListener('click', addTask);
document.addEventListener('DOMContentLoaded', loadTasks);

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('task-list');

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
            saveTasks();
        });

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Concluir';
        completeButton.addEventListener('click', function() {
            listItem.classList.toggle('completed');
            saveTasks();
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', function() {
            const newText = prompt('Edite sua tarefa:', taskText);
            if (newText !== null && newText.trim() !== '') {
                listItem.firstChild.nodeValue = newText.trim();
                saveTasks();
            }
        });

        listItem.appendChild(editButton);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = "";
        saveTasks();
    } else {
        alert("Por favor, insira uma tarefa.");
    }
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#task-list li').forEach(function(taskItem) {
        tasks.push({
            text: taskItem.firstChild.nodeValue,
            completed: taskItem.classList.contains('completed')
        });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');
    tasks.forEach(function(task) {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;

        if (task.completed) {
            listItem.classList.add('completed');
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
            saveTasks();
        });

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Concluir';
        completeButton.addEventListener('click', function() {
            listItem.classList.toggle('completed');
            saveTasks();
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', function() {
            const newText = prompt('Edite sua tarefa:', task.text);
            if (newText !== null && newText.trim() !== '') {
                listItem.firstChild.nodeValue = newText.trim();
                saveTasks();
            }
        });

        listItem.appendChild(editButton);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
}
