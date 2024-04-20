require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

const authRoute = require('./routes/authRoutes');
// const cartRoute = require('./routes/cartRoutes');
// const categoryRoute = require('./routes/categoryRoutes');
// const orderRoute = require('./routes/orderRoutes');
// const productRoute = require('./routes/productRoutes');

mongoose.connect(process.env.MONGO_URL);

app.use('/' , authRoute)

app.listen(port , (err) => {
    if(err) {
        console.log(`Error occured: ${err.message}`);
    }else {
        console.log(`Request is listening at port: ${port}`);
    }
})