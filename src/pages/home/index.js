import React from 'react';
import {observer} from 'mobx-react';
import {Container, Row} from 'react-bootstrap'
import ProductCard from '~c/productCard';
import productsModel from '~s/products.js';

@observer class Home extends React.Component{

    render(){
        let products = productsModel.products.map((product, i) => {
            return (
                <ProductCard product={product} key={product.id}/>
            );
        });

        return (
            <div>
                <h2>Shop</h2>
                <br/>
                <Container>
                <Row xs={2} md={4} lg={6}>
                    {products}
                </Row>
                </Container>
            </div>
        );
    }
}

export default Home;