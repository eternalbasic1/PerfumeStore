const Database = "mongodb://localhost:27017/PerfumeStore"

const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const cors = require("cors");


//My Routes
const authRoutes = require("./routes/auth");
const productRoutes = require("./routes/product");


//DBConnection
mongoose.set('strictQuery',false);// not very much useful as of now
mongoose.connect(Database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("DB CONNECTED");
}).catch((err) => console.log(err));



// PORT
const port = 8008;

// Starting a server
app.listen(port,() => {
    console.log(`App is up and running at ${port}`)
})