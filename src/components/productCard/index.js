import React from 'react';
import { urlBuilder } from '~/routes';
import { Link } from 'react-router-dom';
import {Card} from 'react-bootstrap'
import cartModel from '~s/cart.js';
import AddToCart from '~c/addToCart';

class ProductCard extends React.Component{
    
    render(){
        return (
            <Card className='m-2' style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>
                        <Link to={urlBuilder('product', {id: this.props.product.id})}> {this.props.product.title}</Link>
                    </Card.Title>
                    <Card.Text>{this.props.product.price}</Card.Text>
                    <AddToCart productId={this.props.product.id}/>
                </Card.Body>
            </Card>
        );
    }
}

export default ProductCard;