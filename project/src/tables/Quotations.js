import React, { useEffect, useState } from "react";
import axios from "axios";
import '../componentCSS/quotations.css'
import { denyOrder } from "../components/CreateOrder";
import { approveOrder } from "../components/CreateOrder";
function Quotation() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/quotations").then((Response) => {
      setData(Response.data);
    });
  }, []);
  return (
    <div>
      <div>
        <h1 id="hh">Quotations waiting for Approval</h1>
        <table class="quotation-table">
          <thead>
            <tr>
              <th>item</th>
              <th>supplier</th>
              <th>quantity</th>
              <th>fulfilment</th>
            </tr>
          </thead>
          <tbody>
            {data.map((order) => {
              return (
                <>
                  <tr key={order.id}>
                    <td>{order.item_name}</td>
                    <td>{order.supplier_name}</td>
                    <td>{order.quantity}</td>
                    <td>{order.fulfillment.toString()}</td>
                    <button class={"approve-button"}
                      onClick={() => {
                        approveOrder(order.id);
                      }}
                    >
                      Approve
                    </button>
                    <button class={"deny-button"}
                      onClick={() => {
                        denyOrder(order.id);
                      }}
                    >
                      Deny
                    </button>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default Quotation;
