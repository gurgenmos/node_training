global.todos = ['aaa', 'bbb', 'ccc'];

exports.index = (req, res, next) => {
  res.render('index', {
    todos: global.todos
  });
};

exports.createTodo = (req, res, next) => {
  let todo = req.body.todo;
  todo = todo.trim();

  if (!todo || typeof todo !== 'string') {
    return res.redirect('/?error=1');
  }

  global.todos.push(todo);

  res.redirect('/');
};

exports.editTodo = (req, res, next) => {
  const index = req.params.id;
  const todo = global.todos[index];

  res.render('edit', {
    todo,
    index
  });
};

exports.updateTodo = (req, res, next) => {
  const index = req.params.id;

  let updatedTodo = req.body.todo;
  updatedTodo = updatedTodo.trim();

  if (!updatedTodo || typeof updatedTodo !== 'string') {
    return res.redirect(`/edit/${index}?error=1`);
  }

  global.todos[index] = updatedTodo;

  res.redirect('/');
};

exports.deleteTodo = (req, res, next) => {
  const index = req.params.id;

  global.todos.splice(index, 1);

  res.redirect('/');
};