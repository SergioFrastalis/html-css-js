const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/create', (req, res) => {
    res.render('form', {});
});

app.post('/user', (req, res) => {
    let first = req.body.firstname; 
    let surname = req.body.lastname;
    let email = req.body.email;
    let sex = req.body.sex;

    console.log(first, surname); 
    res.render('user', {
        name: first, 
        surname: surname,
        email: email,
        sex: sex
    });
});

app.listen(port, () => {
    console.log("Server is up");
});
