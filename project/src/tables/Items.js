import React, { useState, useEffect } from "react";
import axios from "axios";
import "../tables.css/users.css";

function Items() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/item").then((Response) => {
      setData(Response.data);
    });
  }, []);
  return (
    <div>
      <div>
        <h1 id="hh">Item Table</h1>

        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.item_name}</td>
                  <td>{item.item_description}</td>
                  <td>{item.item_price}</td>
                  <td>
                    <img
                      src={item.product_image}
                      alt="Image Not Yet Available"
                      width="250"
                      height="250"
                    ></img>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <h1> name is {user.user_name}</h1>
  <h1>email is {user.email}</h1>
  <h1>password is {user.password}</h1>
  <h1>is supervisor {user.supervisor}</h1> */}
      </div>
    </div>
  );
}

export default Items;
