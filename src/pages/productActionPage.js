import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

const styleForm = ({
    width: '500px',
    margin: '0 auto',
})

class ProductActionPage extends Component {

    render() {

        return (


            <div className="panel panel-primary" style={styleForm}>
                <div className="panel-heading">
                    <h1 className="panel-title">Products Action form</h1>
                </div>
                <div className="panel-body">
                    <form>


                        <div className="form-group">
                            <label for="">label</label>
                            <input type="text" className="form-control" placeholder="Input field" />
                        </div>

                        <div className="form-group">
                            <label for="">label 2</label>
                            <input type="text" className="form-control" placeholder="Input field" />
                        </div>

                        <div className="form-group">
                            <label for="">label 3</label>
                            <input type="text" className="form-control" placeholder="Input field" />
                        </div>



                        <button className="btn btn-primary">Submit</button>
                    </form>
                  </div>
            </div>


        );
    }

}

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
