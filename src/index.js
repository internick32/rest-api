const express =  require('express');
const app = express();
const morgan =  require('morgan');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));

//Starting server
app.listen('3000', () => {
    console.log('Server init on port: 3000');
} );












