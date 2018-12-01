const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to mongoDB'))
  .catch(err => console.error('can not connect to the MongoDB...',err));

const courseSchema = new mongoose.Schema({
  name: String,
  author:String,
  tags:[String],
  date:{type:Date, default: Date.now},
  isPublished:Boolean
});

// create decument

const Course = mongoose.model('Course', courseSchema);
async function createCourse(){
  const course = new Course({
    name:'Angular Mongo Demo',
    author:'HakM',
    tags:['node','Frontend'],
    isPublished:true
  });
  
  const result= await course.save();
  console.log(result);
}

// createCourse();

//get document

async function getCourses(){
//eq (equal)
//ne(not equal)
//gt(greater than)
//gte()...

const pageNumber =2;
const pageSize =10;



const courses = await Course

  .find({author:'HakM', isPublished:true})
  //.find({price:{$gte:10, $lte:20}})
  // find({price:{$in:[10,15,20]}})
  
  //regrex
  // .find({author:/^HakM/})
   // .find({author:/Kieu$/i})
  // .find(author:/.*ak*./i)

  //Conditions
  // .or([{author:'HakM'}, {isPublished:true}])
  // .and([]) is similar to find({author:'HakM', isPublished:true})
  .skip((pageNumber-1)*pageSize)
  .limit(pageSize)
  // .limit(10)
  .sort({name: 1})
  // .select({name:1, tags:1});
  .count()
console.log(courses);
}
getCourses();