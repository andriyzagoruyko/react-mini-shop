import React from 'react';
import productsModel from '~s/products.js';
import AddToCart from '~c/addToCart';

class Product extends React.Component {
    addToCart(productId) {
        cartModel.add(productId);
    }

    render() {
        const product = productsModel.getProduct(this.props.match.params.id)

        return (
            <div>
                <h2>{product.title}</h2>
                <p>Price: {product.price}</p>
                <p>
                    <AddToCart productId={product.id}/>
                </p>
            </div>
        );
    }
}

export default Product;