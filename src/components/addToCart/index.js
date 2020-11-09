import React from 'react';
import cartModel from '~s/cart.js';
import {Button} from 'react-bootstrap'
import {observer} from 'mobx-react';

@observer class AddToCart extends React.Component{
    render(){
        let button;

        if (cartModel.contains(this.props.productId)) {
            button = <Button 
                            variant="warning"
                            onClick={ () => cartModel.remove(this.props.productId) }>
                            Remove from cart
                    </Button>
        } else {
            button = <Button 
                        variant="primary"
                        onClick={ () => cartModel.add(this.props.productId) }>
                        Add to cart
                    </Button>
        }

        return button;
    }
}

export default AddToCart;