  //code to call the functions
  window.addEventListener('load', () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const date = document.querySelector("#new-task-date");
  const list_el = document.querySelector("#tasks");

  //code to prevent form from refreshing everytime the button is clicked
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    //code to add and display the input element of the task
    const task = input.value;

    const task_el = document.createElement('div');
    task_el.classList.add('task');

    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    //code to add and display the date element of the task

    //code to add and display the button element 
    const task_completed_el = document.createElement('button');
    task_completed_el.classList.add('completed');
    task_completed_el.innerText = 'Done';


    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = 'Edit';

    const task_delete_el = document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Delete';

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_completed_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    //code to reset the input element 
    input.value = '';

    //code to give functionality to the button elements
    task_edit_el.addEventListener('click', (e) => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("readonly");
        task_input_el.focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("readonly", "readonly");
      }
    });

    task_completed_el.addEventListener('click', (e) => {
      task_el.classList.toggle("grey-mode");
    });

    task_delete_el.addEventListener('click', (e) => {
      list_el.removeChild(task_el);
    });
  });
});