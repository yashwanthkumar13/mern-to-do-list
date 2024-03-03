const form = document.getElementById('task-form');
const newTaskInput = document.getElementById('new-task');
const tasksList = document.getElementById('tasks');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const newTask = newTaskInput.value.trim();
	if (newTask.length) {
		addTask(newTask);
		newTaskInput.value = '';
	}
});

function addTask(task) {
	const li = document.createElement('li');
	li.innerHTML = `<span>${task}</span> <button class="delete-btn">Delete</button>`;
	tasksList.appendChild(li);
	bindDeleteBtn();
}

function bindDeleteBtn() {
	const deleteBtns = document.querySelectorAll('.delete-btn');
	deleteBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			const parentLi = btn.parentElement;
			tasksList.removeChild(parentLi);
		});
	});
}

bindDeleteBtn();