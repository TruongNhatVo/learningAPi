import React from 'react'

const Product = (props) => {
    return (
        <tr className="contact">
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.status ? 'Còn hàng' : 'hết hàng'}</td>
        </tr >
    )
}

export default Product;