const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const exphbs = require( 'express-handlebars');

dotenv.config({ path: './.env' });

const PORT = process.env.PORT;

const indexRouter = require('./routes/index');
const formRouter = require('./routes/form');

// Api routes
const apiTimeRouter = require('./routes/api/time');
const apiUserRouter = require('./routes/api/users');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use(indexRouter);
app.use(formRouter);
app.use('/api', apiTimeRouter);
app.use('/api/users', apiUserRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

