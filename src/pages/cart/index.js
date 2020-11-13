import React from 'react';
import PropTypes from 'prop-types';
import AppMinMax from '~c/inputs/minmax';
import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';
import withStore from '~/hocs/withStore';

class Cart extends React.Component{
    render(){
        let cartModel = this.props.stores.cart;

        if (cartModel.cartCnt < 1) {
            return (
                <>
                    <h1>Cart is empty</h1>
                    <hr/>
                    <div className="alert alert-warning">
                        <p>
                            There are no produts in your cart.
                            <br/>
                            <Link to={routesMap.home}>Back to shop</Link>
                        </p>
                    </div>
                </>
            );
        }

        let productsRows = cartModel.productsDetailed.map((product) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax 
                            min={1} 
                            max={10} 
                            cnt={product.cnt} 
                            onChange={(cnt) => cartModel.change(product.id, cnt)}
                        />
                    </td>
                    <td>{(product.price * product.cnt).toFixed(2)}</td>
                    <td>
                        <button onClick={() => cartModel.remove(product.id)}>
                            &times;
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <h1>Cart</h1>
                <br/>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {productsRows}
                    </tbody> 
                </table>
                <h3>Total: {cartModel.total}</h3>
                <hr/>
                <Link to={routesMap.order} className="btn btn-primary">
                    Send
                </Link>
            </div>
        );
    }
}

export default withStore(Cart);