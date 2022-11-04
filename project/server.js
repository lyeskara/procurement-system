const express = require('express');
const app = new express();
const cors= require('cors');

app.use(cors());
app.use(express.json())



const  Us = require('./serverRouting/GetAll');

app.get('/Users',Us.Users);
app.get('/Users/:id',Us.User);

app.get('/supplier',Us.suppliers);
app.get('/supplier/:id',Us.supplier);

app.get('/order',Us.Orders);
app.get('/order/:id',Us.order);


app.listen(5000, ()=> {
    console.log('backend working')
})
