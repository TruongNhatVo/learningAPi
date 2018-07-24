import React, { Component } from 'react';
import Product from './product';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Products extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();

        var { products } = this.props;
        console.log(products);
        console.log('1231');
    }
    

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

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actions.fetchProductRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
