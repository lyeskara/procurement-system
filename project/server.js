const express = require('express');
const app = new express();
const cors= require('cors');

app.use(cors());
app.use(express.json())



const  Us = require('./serverRouting/GetAll');
const login = require("./serverRouting/LogAuth");

app.get('/Users',Us.Users);
app.get('/Users/:id',Us.User);

app.get('/supplier',Us.suppliers);
app.get('/supplier/:id',Us.supplier);

app.get('/order',Us.Orders);
app.get('/order/:id',Us.order);

app.get('/quotations', (req, res) => {
    quotation.Quotation(returnData)

    function returnData(data){
        res.json(data)
        console.log(res.rows)
    }
} )

app.get("/login",  (req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    login.Login( email , password, returnData);
    function returnData(data){

        res.json(data)
        console.log(res.rows)}

})

app.listen(5000, ()=> {
    console.log('backend working')
})
