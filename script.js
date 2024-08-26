document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const inputField = document.querySelector('.inputfield');
    const taskList = document.getElementById('taskList');

    // Function to create a new task element
    function createTaskElement(taskText) {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'TodoTask';

        const taskSpan = document.createElement('span');
        taskSpan.className = 'Task';
        taskSpan.textContent = taskText;

        const checkbox = document.createElement('input');
        const checked = checkbox.checked
        checkbox.type = 'checkbox';
        checkbox.className = 'CheckTask'

        const removeButton = document.createElement('button');
        removeButton.textContent = 'x';
        removeButton.className = 'ButtonTask';

        // Add event listener to the remove button
        removeButton.addEventListener('click', () => {
            taskList.removeChild(taskDiv);
        });

        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                taskSpan.style.textDecoration = 'line-through';
            } else {
                taskSpan.style.textDecoration = 'none'; // Remove strike-through
                taskSpan.style.color = '#333'; // Darker color for incomplete tasks
            }
        });
        taskDiv.appendChild(taskSpan);
        taskDiv.appendChild(checkbox);
        taskDiv.appendChild(removeButton);


        return taskDiv;
    }
    const checkbox = document.createElement('input');
    // Add task when the "Add" button is clicked
    addTaskButton.addEventListener('click', () => {
        const taskText = inputField.value.trim();
        if (taskText) {
            const taskElement = createTaskElement(taskText);
            taskList.appendChild(taskElement);
            inputField.value = ''; // Clear the input field
        }
    });
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            addTaskButton.click();
        }
    });
});
