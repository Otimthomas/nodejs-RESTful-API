# nodejs-RESTful-API
This is a CRUD RESTful API that can create a course, retrieve a course/courses, update a course, and delete a course from the courses array.

SETUP
Install all the dependencies in the package.json
Run nodemon index.js to start the server
Test the API endpoints using postman

COURSES:
http://localhost:3000/api/courses GET: This URL will return all the courses in the courses array

http://localhost:3000/api/courses/:id GET: This URL will return a particular course

http://localhost:3000/api/courses POST: This URL will create a new course

http://localhost:3000/api/courses/:id DELETE: This URL will delete an existing course from the courses array

http://localhost:3000/api/courses/:id PUT: This URL will update a course with the specified id
