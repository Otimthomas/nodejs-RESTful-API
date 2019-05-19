const Joi = require('joi');

const express = require('express');
const app = express();

app.use(express.json());

const courses = [
  {id: 1, name: "Ruby"},
  {id: 2, name: "JavaScript"},
  {id: 3, name: "PHP"}
];

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) res.status(404).send("The course with the specified ID does not exit");
  res.send(course);
});

app.post('/api/courses', (req, res) => {
  const course = {
    id: courses.length + 1,
    name: req.body.name
  };

  const { error } = validateCourse(req.body);

  if (error){
    res.status(400).send(error.details[0].message)
    return;
  }

  courses.push(course)
  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) res.status(404).send("The course with the specified ID does not exit");

  const { error } = validateCourse(req.body);

  if (error){
    res.status(400).send(error.details[0].message)
    return;
  }

  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) res.status(404).send("The course with the specified ID does not exit");

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(courses);
});


function validateCourse(course){
  const schema = {
    name: Joi.string().min(3).required()
  };

  return Joi.validate(course, schema)
}

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log(`The app is running on ${port}...`)
});
