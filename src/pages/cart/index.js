import React from 'react';
import AppMinMax from '~c/inputs/minmax';

import {observer} from 'mobx-react';
import cartModel from '~s/cart.js';
import productsModel from '~s/products.js';


import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';

@observer class Cart extends React.Component{
    render(){
        let productsRows = cartModel.items.map((item, i) => {
            let product = productsModel.getProduct(item.id);

            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1} 
                                   max={product.rest} 
                                   cnt={cartModel.items[i].count} 
                                   onChange={(cnt) => cartModel.change(i, cnt)}
                        />
                    </td>
                    <td>{product.price * item.count}</td>
                    <td>
                        <button onClick={() => cartModel.remove(product.id)}>
                            X
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            <div>
                <h2>Cart</h2>
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
                <br/>
                <h3>Total: {cartModel.total}</h3>
                <hr/>
                <Link to={routesMap.order} className="btn btn-primary">
                    Send
                </Link>
            </div>
        );
    }
}

export default Cart;