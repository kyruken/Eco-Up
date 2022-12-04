const express = require('express');

const app = express();

const directoryRouter = require('./routes/directory');

app.use('/', directoryRouter);

app.listen(3000, () => console.log("listening on port 3000"));