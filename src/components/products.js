import React, { Component } from 'react';

class Products extends Component {

    render() {

        return (
            <div className="Products">

                <h1>This is Products page</h1>


                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Products name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
}


export default Products;
