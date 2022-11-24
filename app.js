
require('dotenv').config() //importing the env file
const router = require('./route/app') // importing route folder
const express = require('express') // express is a nodejs framework
const app = express()
const path = require('path')
const {engine} = require('express-handlebars')

app.use('/public', express.static(path.join(__dirname, 'public')))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.use('/', router)

const port = 5000
app.listen(port,() => {
    console.log(`server is listening on port ${port}`);
})
