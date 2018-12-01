const Joi = require('joi');
const express = require('express');
const app = express();


app.use(express.json());

const courses = [
  {id:1, name:'course1'},
  {id:2, name:'course2'},
  {id:3, name:'course3'},
];

app.get('/',(req, res) => {
  res.send('I will pass everything!!!');
});

app.get('/api/courses', (req, res) =>{
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  // res.send(req.params.id);
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) return res.status(404).send('The course with the given ID was not found');
  res.send(course);
});

app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});


//POST

app.post('/api/courses', (req,res) => {
  const { error } = validateCourse(req.body); // error

  if(error){
     //400 bad request
     res.status(400).send(error.details[0].message);
     return;
  }

   const course = {
     id: courses.length + 1,
     name:req.body.name
   };
   courses.push(course);
   res.send(course);
});

//PUT
app.put('/api/courses/:id', (req, res)=> {
//Look up the course
// If not existing. return 404
const course = courses.find(c => c.id === parseInt(req.params.id));
if(!course) return res.status(404).send('The course with the given ID was not found');

// //Validate
// //If invalid, return 400 - Bad request
// const schema = {
//   name: Joi.string().min(3).required()
//   };
// const result = Joi.validate(req.body, schema);

// const result = validateCourse(req.body);
const { error } = validateCourse(req.body); // error

if(error){
  //400 bad request
  res.status(400).send(error.details[0].message);
  return;
} 

//Update course
course.name = req.body.name;

//Return the updated course
res.send(course);

});

//DELETE
app.delete('/api/course/:id', (req, res) => {
//Look up the course
// not existing -> 404 error
// const course = courses.find(c => c.id === parseInt(req.params.id));
// if(!course){
//   res.status(404).send('The course with given Id is not existing');
// }
const course = courses.find(c => c.id === parseInt(req.params.id));
if(!course) res.status(404).send('The course with the given ID was not found');

res.send("run over here");

//having that -> delete that
const index = courses.indexOf(course);
courses.splice(index,1);

//Return the same course
res.send(courses);
});


function validateCourse(course){
  const schema = {
    name: Joi.string().min(3).required()
    };
return Joi.validate(course, schema);
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