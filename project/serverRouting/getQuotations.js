const pgclient = require("../model/postgresdb");

function Quotation(callback){
    pgclient.query('SELECT * FROM orders', (err, res) => {
        const data = res.rows

        if(!err){
            console.log(res.rows)
            data.forEach(row => {
                console.log(` item name: ${row.item_name}, quantity: ${row.quantity}`)
            })
            callback(data)
        }
        else{
            console.log(err.message)
            callback(data)
        }
        pgclient.end
    })
}


//get all orders
function getAllOrders(){
    pgclient.query('SELECT * FROM orders', (err, res) => {
        if(!err){
            console.log(res.rows)
        }
        else{
            console.log(err.message)
        }
        pgclient.end
    })
}

//get orders that HAVE NOT been fulfilled (need supervisor approval)
function getQuotations(){
    pgclient.query('SELECT * FROM orders WHERE fulfillment = false', (err, res) => {
        if(!err){
            console.log(res.rows)
        }
        else{
            console.log(err.message)
        }
        pgclient.end
    })
}

module.exports = {Quotation}