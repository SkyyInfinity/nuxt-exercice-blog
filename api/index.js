const express = require('express');
const app = express();
const BodyParser = require('body-parser');
const cors = require('cors');

const postRoute = require('./routes/post');
const userRoute = require('./routes/user');

app.use(cors());

app.use(BodyParser.json({limit: '50mb'}))
app.use(BodyParser.urlencoded({extended: true}))

app.use('/posts', postRoute)
app.use('/users', userRoute)

app.listen(4000, () => {
    console.log('Serveur à l\'écoute.');
})
