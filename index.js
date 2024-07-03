const express = require('express');
const app = express();

let courses = [
    {id: 1, name: 'java'},
    {id: 2, name: 'javascript'},
    {id: 3, name: 'python'}
];

app.use(express.json());

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

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

app.listen(3000, () => {
    console.log("server started");
});