import React from "react";

const ProductList = (props) => {


    return (
        <div>
            {props.products.map( product => {
                return (
                    <ul key={product.id}>
                        <li className="product-item">Id: {product.id}<br />
                        Name: {product.name}<br />
                        Price: ${
                            (product.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) > Math.round((product.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))) ? (product.price.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")) : product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                            } usd<br />
                            <button onClick={() => props.onAddToCart(product.id)}>Add to Cart</button></li>
                    </ul>
                )
            })}
        </div>
    )
}

export default ProductList;