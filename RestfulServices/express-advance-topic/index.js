const Joi = require('joi');
const logger = require('./logger');
const express = require('express');
const helmet = require('helmet');
const app = express();
const morgan = require('morgan');
const config = require('config');
const courses = require('./routes/courses');
const home = require('./routes/home');

//Often use only a debug in a file -> watch below
//const startupDebugger =  require('debug')('app:startup');
//const dbDebugger =  require('debug')('app:db');

//
const debug = require('debug')('app:startup');


// console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`app: ${app.get('env')}`);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //key=value&key=value

//read the file in the public folder -> http://localhost:3000/readme.txt
app.use(express.static('public')); 

app.use(logger);

app.use(helmet());

/*use all url having the format api/courses 
with courses module we loaded above const courses = require('./courses'); */

app.use('/api/courses', courses); 
app.use('/home', home);


app.set('view engine', 'pug');
app.set('views', './views'); //set location of template

//configuration
console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.host'));
console.log('Mail Password: ' + config.get('mail.password'));

if (app.get('env') === 'development') {
    //morgan log a http request - and also can write it to a file
    app.use(morgan('tiny'));
    //console.log('morgan enable.')

      //using the debug library
    //   startupDebugger('Morgan enabled...');
    //   dbDebugger('Connect to database');

     //should use only a debug on a file
       debug('use only the debug in the file');
}

///get the parametters
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`It is Hakm2 ${port}...`);
});


// app.use(function(req, res, next){
//     console.log('Authenticating...');
//    next();
// });




//HaKM do that
// const express = require('express');
// const app = express();

// const persons = [
//    {id:1, name:'hakm' },
//    {id:2, name:'Ngoc' },
//    {id:1, name:'Thanh' },
// ];

// app.get('/api/person/:id',(req, res) => { 
//  const person =  persons.find(p => p.id === parseInt(req.params.id));
//  if(!person) res.status(404).send('The course with the given ID was not found');
//  res.send(person);
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Use are using the ${port}`);
// });