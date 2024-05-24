var path = require('path');
//require('dotenv').config();
const express = require('express')
//const mongoose = require('mongoose')
const app = express();
const bodyparser = require('body-parser')

const cors = require('cors');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'template/pages'));
app.use(express.static(path.join(__dirname, "template/styles")));
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))


const PORT_NUMBER =  process.env.PORT || 8085;
//const MONGO_URL =  process.env.MONGO_URL || 'mongodb://localhost/videogame';


//#region ********** DATABASE RESOURCES **********/
// mongoose.set("strictQuery", false);

//  mongoose.connect(MONGO_URL, {
//     useNewUrlParser: true
// });

// const db = mongoose.connection;

// //This is in the case of an error with the connection
// db.on('error', err => console.log(err));

// //This is to run once we have connected to the database
// db.once('open', () => console.log('Connected To The Database'));

//#endregion


//#region ********** ROUTES **********/

//Route for the index file

const indexRouter = require('./routes/index');
// const userValidationRouter = require('./routes/uservalidation');
// const gameRouter = require('./routes/gameIndex');

//#endregion


app.use('/api/v1/user', indexRouter);
// app.use('/api/v1/user/validation', userValidationRouter);
// app.use('/api/v1/games', gameRouter);

app.listen(PORT_NUMBER, () => { console.log(`Connected To ${PORT_NUMBER}`);})