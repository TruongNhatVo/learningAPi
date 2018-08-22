import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Product extends Component {

    onDelete = (id) => {
        this.props.deleteItem(id)
    }

    render() {

        return (
            <tr className="contact">
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.status ? 'Còn hàng' : 'hết hàng'}</td>
                <td>
                    <span
                        onClick={() => this.onDelete(this.props.id)}
                        className="label label-danger"
                    >Delete</span>&nbsp;
                    <Link 
                        className="label label-info"
                        to={`/product/${this.props.id}`}
                    >Edit</Link>
                </td>
            </tr >
        );
    }
}


export default Product;
