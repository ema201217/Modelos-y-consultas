const express = require('express');
const path = require('path');
const app = express();

/* Routers */
const indexRouter = require('./src/routes/index');
const moviesRoutes = require('./src/routes/moviesRoutes');
const genresRoutes = require('./src/routes/genresRoutes');
const actorsRoutes = require('./src/routes/actorsRouter');

/* Meddleware Aplications */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));
app.use(express.static('./public'));


/* VIEWS */
app.use('/', indexRouter);
app.use('/movies',moviesRoutes);
app.use('/genres',genresRoutes);
app.use('/actors',actorsRoutes);


/* Server */
app.listen('3000', () => console.log('Servidor corriendo en el puerto 3000'));
