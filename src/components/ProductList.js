import React from "react";

const ProductList = (props) => {
    return (
        <div>
            {props.products.map( ({...props}) => {
                return (
                    <ul key={props.id}>
                        <li>Id: {props.id}<br />
                        Name: {props.name}<br />
                        Price: ${
                            (props.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) > Math.round((props.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))) ? (props.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) : props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            } usd<br /></li>
                    </ul>
                )
            })}
        </div>
    )
}

export default ProductList;