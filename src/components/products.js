import React, { Component } from 'react';
import Product from './product';

class Products extends Component {
    render() {
        return (
            <div className="Products">

                <div className="container">
                    <h1>This is Products page</h1>
                    
                    
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Products name</th>
                                <th>status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Product />
                        </tbody>
                    </table>
                    
                    
                </div>

            </div>
        );
    }
}

export default Products;
