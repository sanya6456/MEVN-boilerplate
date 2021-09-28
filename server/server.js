const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(helmet());

app.use('/api', routes);
app.use(require('connect-history-api-fallback')())
app.use('/', express.static(path.join(__dirname, '/public')))


// Connect to DB
mongoose
    .connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.htas1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// Check connection and setup server
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    app.listen(`${process.env.PORT}`, function(){
        console.log('Server is running on Port:', `${process.env.PORT}`);
    });

    app.get('/', (req, res)=>{
        res.sendFile(__dirname + 'index.html');
    })

    app.get('/api', function (req,res) {
        res.sendFile(__dirname + "/routes");
    });
});
