if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');

const User = require('./models/userModel');
const app = express();

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const directoryRouter = require('./routes/directory');

app.use(cors({
    origin: '*',
    methods: ['POST', 'GET']
}))

app.use('/', directoryRouter);

app.post('/login', (req, res, next) => {
    User.findOne((err, user) => {
        if (err) {
            return next(err);
        }
        if (user.username !== req.body.username) {
            return res.json({message: "Invalid username"});
        }

        bcrypt.compare(req.body.password, user.password, (err, match) => {
            if (err) {
                return next(err);
            }

            if (match) {
                jwt.sign({user}, process.env.SECRET_KEY, {expiresIn: '1h'}, (err, token) => {
                    res.json({user: user, token: token});
                });
                
            } else {
                res.json({message: 'Wrong password'});
            }
        })
    })
})

app.post('/register', (req, res) => {
    User.findOne({username: req.username}, (err, theUser) => {
        if (err) throw err;

        if(theUser) res.send("User Exists Already");

        if(!theUser) {
            bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
                if (err) throw err;

                const newUser = new User({
                    username: req.body.username,
                    password: hashedPassword,
                    email: req.body.email,
                    submissions: [],
                })

                newUser.save();
                res.send("New user created");
            })
        }
    })
})

app.listen(3000, () => console.log("listening on port 3000"));