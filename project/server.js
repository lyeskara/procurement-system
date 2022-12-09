const express = require("express");
const app = new express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const Us = require("./serverRouting/GetAll");
const login = require("./serverRouting/LogAuth");
const quotation = require ("./serverRouting/getQuotations");

app.get("/Users", Us.Users);
app.get("/Users/:id", Us.User);

app.get("/supplier", Us.suppliers);
app.get("/supplier/:id", Us.supplier);

app.get("/order", Us.Orders);
app.get("/order/:id", Us.order);

app.get("/item", Us.items);
app.get("/item/:id", Us.item);

app.get("/item_supplier", Us.itemSupplier);

app.get('/quotations', quotation.Quotation);

app.get("/login", (req, res) => {
  const email = req.query.email;
  const password = req.query.password;
  login.Login(email, password, returnData);
  function returnData(data) {
    res.json(data);
    console.log(res.rows);
  }
});

app.get("/item_price_asc", Us.itemsAscendingPrice);
app.get("/item_price_desc", Us.itemsDescendingPrice);
app.get("/item_rating/:rating/:ordering", Us.itemsByRating);

app.listen(5000, () => {
  console.log("backend working");
});
