import React from 'react';
import { Button, Form } from 'react-bootstrap'
import Rating from "./Rating";
import { CartState } from "../context/Context"

const Filters = () => {

    const {
        productState:{byStock, byFastDelivery, sort, byRating, searchQuery }, 
        productDispatch 
    } = CartState();

    console.log(byStock, byFastDelivery, sort, byRating, searchQuery);

  return (
    <div className='filters'>
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check 
                inline
                label="Low to High Price"
                name="group1"
                type="radio"
                id={'inline-1'}
                onChange={(i) =>
                    productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: 1
                    })
                }
                checked={sort === 1}
            />
        </span>
        <span>
            <Form.Check 
                inline
                label="High to Low Price"
                name="group1"
                type="radio"
                id={'inline-2'}
                onChange={(i) =>
                    productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: 2
                    })
                }
                checked={sort === 2}
            />
        </span>
        <span>
            <Form.Check 
                inline
                label="Include Out of Stock"
                name="group1"
                type="checkbox"
                id={'inline-3'}
                onChange={(i) =>
                    productDispatch({
                        type: "FILTER_BY_STOCK"
                    })
                }
                checked={byStock}
            />
        </span>
        {/* <span>
            <Form.Check 
                inline
                label="Fast Delivery Only"
                name="group1"
                type="checkbox"
                id={'inline-4'}
                onChange={(i) =>
                    productDispatch({
                        type: "FILTER_BY_DELIVERY"
                    })
                }
                checked={byFastDelivery}
            />
        </span> */}
        <span>
            <label style={{paddingRight:10}}>Rating: </label>
            <Rating 
            rating={byRating} 
            onClick={(i) =>
                productDispatch({
                    type: "FILTER_BY_RATING",
                    payload: i+1,
                })
            }
            style={{cursor:"pointer"}} />
        </span>
        <Button 
            variant="light"
            onClick={(i) =>
                productDispatch({
                    type: "CLEAR_FILTERS",
                })
            }
        >
            Clear Filters
        </Button>
    </div>
  )
}

export default Filters