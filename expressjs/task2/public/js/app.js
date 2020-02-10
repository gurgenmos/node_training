const todos = document.querySelector('.todos');

if (todos) {
  todos.addEventListener('click', (event) => {
    let deleteItem;

    if (event.target.className.includes('delete-todo')) {
      deleteItem = event.target;
    } else if (event.target.closest('.delete-todo')) {
      deleteItem = event.target.closest('.delete-todo')
    }

    if (deleteItem) {
      event.preventDefault();

      if (confirm('Are you sure?')) {
        window.location.href = deleteItem.href;
      }
    }
  });
}

const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');

if (error) {
  document.querySelector('.error').innerHTML = 'Invalid data';
}