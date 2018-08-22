import React, { Component } from 'react'
import Form from "react-jsonschema-form";
import { connect } from 'react-redux'
import * as actions from './../actions/index'

const schema = {
    type: "object",
    properties: {
        name: { type: "string", title: "Product Name" },
        price: { 'type': "number", title: "Product price" },
        status: { type: "boolean", title: "Product status", default: false }
    }
}

const log = (type) => console.log.bind(console, type)

class ProductActionPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            formValue : {}
        };
    }

    componentDidMount() {
        let {match} = this.props
        if (match) {
            this.props.fetchProductById(match.params.id)
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if (nextProps && nextProps.formDataReducer) {
            this.setState({
                formValue : nextProps.formDataReducer
            })
        }
    }

    onChangeValue = (data) => {
        this.setState({
            formValue : data.formData
        })
    }

    onSubmitFormHandler = (dataForm) => {
        let { history } = this.props
        let productID = this.state.formValue.id
        productID ? this.props.updateProduct(dataForm) : this.props.saveProduct(dataForm)
        history.goBack()
    } 

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Add products form</h3>
                </div>
                <div className="panel-body">
                    <Form schema={schema}
                        formData={this.state.formValue}
                        onChange={(changeValue) => this.onChangeValue(changeValue)}
                        onSubmit={() => this.onSubmitFormHandler(this.state.formValue)}
                        onError={log("errors")}>
                        <button className="btn btn-primary" type="submit">Add product</button>
                    </Form>
                </div>
            </div>

        );
    }

}

const mapStateToProps = state => {
    return {
        formDataReducer : state.productEdit
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        saveProduct: (product) => {
            dispatch(actions.addProductRequest(product))
        },
        fetchProductById: (productId) => {
            dispatch(actions.fetchProductByIdRequest(productId))
        },
        updateProduct: (newProductValue) => {
            dispatch(actions.updateProductRequest(newProductValue))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
