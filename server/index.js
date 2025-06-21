const express = require("express");
const cors = require("cors");
let mongoose = require('mongoose');
const enquiryRouter = require('./App/Routes/web/enquiryRoutes');
require('dotenv').config();

let app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Routes
app.use('/api/website/enquiry',enquiryRouter);

//connect to Mongodb
mongoose .connect(process.env.DBURL).then(() => {
    console.log('connected to mongodb');
    app.listen(process.env.PORT , () => {
        console.log('server is running');
    });
}).catch((err) => {console.log(err)})