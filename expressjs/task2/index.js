const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

dotenv.config({ path: './.env' });

const PORT = process.env.PORT;

const todoRouter = require('./routes/todos');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(todoRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));