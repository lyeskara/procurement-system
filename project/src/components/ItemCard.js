import React, { useState, useEffect, useRef } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { createOrder } from "./CreateOrder";
import "../tables.css/users.css";

function ProductContainer() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  var [supplier, setSupplier] = useState("");
  var [price, setPrice] = useState("");
  var [fulfillment, setFulfillment] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/item").then((Response) => {
      setData(Response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/item_supplier").then((Response) => {
      setData2(Response.data);
    });
  }, []);

  async function addOrder(item_name, quantity) {
    data.map((item) => {
      if (item_name === item.item_name && quantity != "0") {
        price = item.item_price;
        setPrice(item.item_price);
        data2.map((itemSupplier) => {
          if (item_name == itemSupplier.item_name) {
            supplier = itemSupplier.supplier_name;
            setSupplier(itemSupplier.supplier_name);
          }
        });
        var total = Number(price) * Number(quantity);
        if (total > 5000) {
          fulfillment = false;
          var fulfillmentString = "false";
        } else {
          fulfillment = true;
          var fulfillmentString = "true";
        }
        if (total === 0) {
          console.log("No Order Was Done");
        } else {
          console.log(
            "Order to be Sent: " +
              item_name +
              ", " +
              quantity +
              ", " +
              total +
              ", " +
              supplier +
              ", " +
              fulfillmentString
          );
          createOrder(item_name, supplier, quantity, fulfillment);
          var textUF = "";
          if (!fulfillment) {
            textUF = ".\n*****Order sent to supervisor for review*****";
          }
          window.alert(
            "Order Submitted, Fullfillment: " +
              fulfillmentString +
              " | name: " +
              item_name +
              ", quantity: " +
              quantity +
              ", total: " +
              total +
              ", from: " +
              supplier +
              textUF
          );
        }
      }
    });
  }

  return (
    <div>
      {data.map((item) => {
        return (
          <div className={"products"}>
            <Card>
              <Card.Img
                variant="top"
                src={item.product_image}
                alt="Image Not Yet Available"
              />
              <Card.Body>
                <Card.Title>
                  {item.item_name.charAt(0).toUpperCase() +
                    item.item_name.slice(1)}
                </Card.Title>
                <Card.Subtitle style={{ paddingBottom: 10 }}>
                  <span>Price: $ {item.item_price}</span>
                  <br />
                  <br />
                  <span>Description: {item.item_description}</span>
                  <br />
                  <br />
                  <span>Quantity: </span>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    id={item.item_name}
                  ></input>
                </Card.Subtitle>
                {
                  <Button
                    onClick={() => {
                      addOrder(
                        item.item_name,
                        document.getElementById(item.item_name).value
                      );
                    }}
                  >
                    Order
                  </Button>
                }
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default ProductContainer;
