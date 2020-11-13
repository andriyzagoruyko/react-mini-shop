import React from 'react';
import styles from './index.module.css';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddToCart from '~c/products/addToCart';

export default function (props) {
    return <div className={'col-sm-12 col-md-6 col-lg-4 ' + styles.product} key={props.product.id}>
        <Card className={styles.productCard}>
            <Card.Body className={styles.productBody}>
                <Card.Title className='mb-3'>{props.product.title}</Card.Title>

                <Card.Img className={styles.productImage} variant="top" src={props.product.image} />

                <Row className={'justify-content-around mt-3 ' + styles.productText}>
                    <strong>Price: {props.product.price}</strong>
                    <Link to={props.link}>
                        Get more...
                    </Link>
                </Row>

                <Row className='justify-content-center mt-3'>
                    <AddToCart
                        inCart={props.inCart}
                        onAdd={props.onAdd}
                        onRemove={props.onRemove}
                    />
                </Row>
            </Card.Body>
        </Card>
    </div>
}