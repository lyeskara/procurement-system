import React, {useEffect, useState} from 'react'
import axios from 'axios';


function Quotation() {

    const [orders, setOrders] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:5000/quotations/')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    })
    // function quotation(){
    //     axios.get(`${url}`).then((response)=>{
    //         if(response.data[0] === undefined){
    //             console.log("no orders")
    //         }
    //         else{
    //             response.data.map(response.data)
    //             console.log('order ' + response.data[0].item_name)
    //
    //         }
    //
    //     })
    // }

    return (
        <div>
            <ul>
                {
                    orders.map(order => <li item_name={order.item_name}>{order.quantity}</li>)
                }
            </ul>
        </div>
      //   <section className='Quotation'>
      //       <h2 className='header'>Quotations </h2>
      //       <pre>
      //
      //
      //
      //
      //
      // </pre>
      //
      //
      //   </section>
    )
}

export default Quotation