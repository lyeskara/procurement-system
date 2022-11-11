const pgclient = require("../model/postgresdb");
const client = require("../model/postgresdb");

const Quotation = (req,res)=>{
    client.query(`SELECT * FROM orders WHERE fulfillment = false`, (err,result)=>{
        if(!err){
            res.send(result.rows)
        }
    })

}

module.exports = {Quotation}