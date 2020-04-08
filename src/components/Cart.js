import React, { Component } from 'react';
import { connect } from 'react-redux';
import deleteProduct from '../actions/deleteProduct';
import './styles.css';

class Cart extends Component {
    render() {
        return (
            <>
                <div  className="main">
                    <table>
                        <thead>
                            <tr>
                                <th> Product Name  </th>
                                <th> Product Price  </th>
                                <th> #  </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.productCart.map((obj, index) => {

                                    return <tr key={index}>
                                        <td>{obj.productName}</td>
                                        <td>{obj.productPrice}</td>
                                        <td><button onClick={() => { this.props.onDeleteProduct(obj) }}>X</button></td>
                                    </tr>

                                })

                            }
                        </tbody>

                    </table>
                    <h5>The Total Cost is {this.props.totalCost}</h5>
                </div>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        totalCost: state.totalCost,
        productCart: state.productCart
    }

}

//mapDispatchToProps
let mapDispatchToProps = (dispatch) => {
    return {
        onDeleteProduct: (productData) => dispatch(deleteProduct(productData))

    }

}




export default connect(mapStateToProps, mapDispatchToProps)(Cart)
