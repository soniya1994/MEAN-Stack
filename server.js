// const express = require('express')
// const app = express()
// const mongoose = require('mongoose');
// const routes=require('./src/route/routes');
// mongoose.set("strictQuery", false);

// app.listen(1999,function check(err)
// {
//     if(err)
//     {
//         console.log("error")
//     }
//     else{
//         console.log("started")
//     }
// });

// mongoose.connect('mongodb://127.0.0.1:27017/nodeproject')
// .then(() => console.log('Connected!'));
  
// app.use(routes);
// app.use(express.json());

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./src/route/routes');
const cors=require('cors');
// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors({
    origin: "http://localhost:4200"
}));
mongoose.set("strictQuery", false);

app.listen(1999, function check(err) {
    if (err) {
        console.log("error")
    } else {
        console.log("started")
    }
});

mongoose.connect('mongodb://127.0.0.1:27017/nodeproject')
    .then(() => console.log('Connected!'));

app.use(routes);
