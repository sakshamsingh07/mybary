if(process.env.NODE_ENV !=='production'){
    require('dotenv').config()
}


const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')

const indexRouter = require('./routes/index') //indexRouter variable will write router variable in index.js file

//configuring the Express Application

app.set('view engine','ejs') //we set View engine and it is ejs
app.set('views',__dirname+'/views') //we set Views and views will come from the folder named views . from the views folder all the files will go to server

//hookup express layout

app.set('layout','layouts/layout') //idea behind the layout is that every single file is going to be put inside of this layout file , so we don't have to duplicate all of the beginning HTML and ending HTML of our projects such as the header and footer.
                                   //we set layout is set inside of a layout folder inside of the file called layouts.


//to use the application we write .use

app.use(expressLayout) //using the express layout variable that we included from library
app.use(express.static('public')) // we tell express that where our public files is going to be, these are the files going to be such as our style sheet , js , images

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', ()=> console.log('Connected to Mongoose'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)