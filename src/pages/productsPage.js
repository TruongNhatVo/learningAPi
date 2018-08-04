import Products from './../components/products';
import Product from './../components/product';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';
import Pagination from "react-js-pagination";

class ProductsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          activePage: 1,
          itemPerPage: 5
        };
      }

    componentDidMount() {
        this.props.fetchAllProducts();
        
    }

    handlePageChange = (pageNumber) => {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
    }

    render() {
        var indexOfLastTodo = this.state.activePage * this.state.itemPerPage;
        var indexOfFirstTodo = indexOfLastTodo - this.state.itemPerPage;
        var  products = this.props.products.slice(indexOfFirstTodo, indexOfLastTodo);

        return (
            <Fragment>
                <Products>
                    {this.showProducts(products)}
                </Products>
                <div className="container">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemPerPage}
                        totalItemsCount={this.props.products.length}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange}
                    />
                </div>
            </Fragment>
        );
    }

    showProducts(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <Product
                        key={index}
                        {...product}
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actions.fetchProductRequest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
