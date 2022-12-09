const client = require("../model/postgresdb");


const itemsAscendingPrice = (req, res) => {
  client.query(`Select * from items ORDER BY item_price ASC`, (err, result) => {
    if (!err) {
      res.send(result.rows);
      // console.log(("ascendingdata:"));
      // console.log(result);
    }
  });
};

const itemsDescendingPrice = (req, res) => {
  client.query(`Select * from items ORDER BY item_price DESC`, (err, result) => {
    if (!err) {
      res.send(result.rows);
      // console.log(("descendingdata:"));
      // console.log(result);
    }
  });
};

const itemsByRating = (req, res) => {
  client.query(`Select * from items Where rating = ${req.params.rating} ORDER BY item_price ${req.params.ordering}`, (err, result) => {
    if (!err) {
      res.send(result.rows);
      // console.log(("ordered with rating filter"));
      // console.log(result);
    }
  });
};

// get all items
const items = (req, res) => {
  client.query(`SELECT * from items`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
};

// get a selected item
const item = (req, res) => {
  client.query(
    `SELECT * FROM items where id =${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
};

// get all item-supplier duo
const itemSupplier = (req, res) => {
  client.query(`SELECT * from item_supplier`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
};

// get all users

const Users = (req, res) => {
  client.query(`SELECT * from users`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
};

// get a selected user

const User = (req, res) => {
  client.query(
    `SELECT * FROM USERS where id =${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      } else {
        console.log("Success");
      }
    }
  );
};

// get all suppliers
const suppliers = (req, res) => {
  client.query(`SELECT * from supplier`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
};

// get a selected supplier

const supplier = (req, res) => {
  client.query(
    `SELECT * FROM Supplier where id =${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
};

const Orders = (req, res) => {
  client.query(`SELECT * from orders`, (err, result) => {
    if (!err) {
      res.send(result.rows);
      console.log("success");
    }
  });
};

// get a selected user

const order = (req, res) => {
  client.query(
    `SELECT * FROM orders where id =${req.params.id}`,
    (err, result) => {
      if (!err) {
        res.send(result.rows);
      }
    }
  );
};

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

module.exports = {
  Users,
  User,
  suppliers,
  supplier,
  order,
  Orders,
  items,
  item,
  itemSupplier,
  itemsAscendingPrice,
  itemsDescendingPrice,
  itemsByRating,
};
