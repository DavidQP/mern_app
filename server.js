const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users');

const app =  express();
app.use(bodyParser.json());

app.use(bodyParser.json());

const db = require('./keys').mongoURI;

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDb conected ...'))
    .catch(err => console.log(err));

// Routes

app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Served started on port ${port}`));

