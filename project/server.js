const express = require('express');
const app = new express();
const cors= require('cors');

app.use(cors());
app.use(express.json())



app.get("/clients", (req,res)=>{
    const people = [{id:50,name:'lyes',surname:'kara'}]
    res.json(people);
})

const login = require('./serverRouting/LogAuth');
app.post('auth/register',login);




app.listen(5000, ()=> {
    console.log('backend working')
})
