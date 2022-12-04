if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (err) => console.log(err));

const directoryRouter = require('./routes/directory');

app.use('/', directoryRouter);

app.listen(3000, () => console.log("listening on port 3000"));