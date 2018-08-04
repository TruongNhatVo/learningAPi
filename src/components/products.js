import React, { Component } from 'react';

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
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.children }
                        </tbody>
                    </table>
                    
                    
                </div>

            </div>
        );
    }
}


export default Products;
