const express = require('express');
const app = express();

let courses = [
    {id: 1, name: 'java'},
    {id: 2, name: 'javascript'},
    {id: 3, name: 'python'}
];

app.use(express.json());
function middleware(req, res, next) {
    let ip = req.ip;
    let date = new Date();
    let host = req.hostname;
    let method = req.method;
    console.log(`ip: ${ip} , date: ${date} , host: ${host} , method: ${method}`);
    next();
}

app.use(middleware);


app.get('/courses', (req, res) => {
    res.json(courses);
});
app.post('/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.status(201).json(course);
});



app.listen(3000, () => {
    console.log("server started");
});