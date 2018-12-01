const Joi = require('joi');


const express = require('express');
const app = new express();

app.use(express.json());

let movies= [
  {
    id: '1',
    name: 'iron man'
  },
  {
    id: '2',
    name: 'iron man2'
  },
  {
    id: '3',
    name: 'iron man3'
  }
];

function validateMovie(movie){
  const schema = {
    name: Joi.string().min(3).required()
    };
  // return Joi.validate(movie, schema);
  return Joi.validate(movie, schema);
};


app.get('/api/movies',(req, res) => {
   return res.send(Movies);
});


app.post('/api/movies', (req,res)=>{
  let movie = {
   id: movies.length + 1,
   name: req.body.name
  };
  movies.push(movie);
  res.status(200).send(movies);
});

app.put('/api/movies/:id',(req,res) => {
    //check id
   const movie = movies.find( m => m.id === req.params.id);
   if(!movie) return res.status(404).send('the movie with given id not exsiting');

   //validate the name
   const {error} = validateMovie(req.body);

   if(error) return res.status(400).send(error.details[0].message);;
   
   //if have
   movie.name = req.body.name;

   //return
   res.status(200).send(movies);
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`I am running on ${port}`);
  });

