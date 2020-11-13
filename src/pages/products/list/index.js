import React from 'react';
import { urlBuilder } from '~/routes';
import { Row } from 'react-bootstrap';
import withStore from '~/hocs/withStore';
import ProductCard from '~c/products/card';

class Products extends React.Component {
    render() {
        let productModel = this.props.stores.products;
        let cart = this.props.stores.cart;

        let productsCards = productModel.items.map((product) => {
            return <ProductCard
                product={product}
                inCart={cart.inCart(product.id)}
                link={urlBuilder('product', { id: product.id })}
                onRemove={() => cart.remove(product.id)}
                onAdd={() => cart.add(product.id)}
                key={product.id}
            />
        });

        return (
            <div>
                <h1>Products page</h1>
                <Row >
                    {productsCards}
                </Row>
                <hr />
            </div>
        );
    }
}

export default withStore(Products);