const { Router } = require('express');

const router = Router();

const {
  index,
  createTodo,
  editTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todos');

router.get('/', index);
router.post('/create', createTodo);
router.get('/edit/:id', editTodo);
router.post('/update/:id', updateTodo);
router.get('/delete/:id', deleteTodo);

module.exports = router;