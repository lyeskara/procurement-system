const client = require("../model/postgresdb")


// get all users 

const Users =(req, res)=>{     
        client.query(`SELECT * from users`,(err,result)=>{
         if(!err) { res.send(result.rows) }
         })
        }

// get a selected user

const User = (req,res)=>{
        client.query(`SELECT * FROM USERS where id =${req.params.id}`, (err,result)=>{
           if(!err){
                res.send(result.rows)
           }
        })
        
}

// get all suppliers 
const suppliers =(req, res)=>{     
        client.query(`SELECT * from supplier`,(err,result)=>{
         if(!err) { res.send(result.rows) }
         })
        }

// get a selected supplier

const supplier = (req,res)=>{
        client.query(`SELECT * FROM Supplier where id =${req.params.id}`, (err,result)=>{
           if(!err){
                res.send(result.rows)
           }
        })
        
}

const Orders =(req, res)=>{     
        client.query(`SELECT * from orders`,(err,result)=>{
         if(!err) { res.send(result.rows) }
         })
        }

// get a selected user

const order = (req,res)=>{
        client.query(`SELECT * FROM orders where id =${req.params.id}`, (err,result)=>{
           if(!err){
                res.send(result.rows)
           }
        })
        
}

// // create a user 

//  const Create =  (req,res)=>{
//         const user =req.body;
//         const insertion =`insert into users(user_name, email, password) values('${user.name}', '${user.email}', '${user.password}' ) `
//         client.query(insertion,(err,result)=>{
//                 if(!err){
//                         res.send('Insertion was successful')
//                     }
//                     else{ console.log(err.message) }
//                 })
//  }
      
    


module.exports = {Users,User,suppliers,supplier,order,Orders};

