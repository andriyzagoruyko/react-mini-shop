import React from 'react';
import { Container, Button, Image, Row, Col } from 'react-bootstrap';
import AddToCart from '~c/products/addToCart';

export default function (props) {
    return (
        <Container>
            <h1>{props.title}</h1>
            <hr />
            <Row className='justify-content-center mt-3'>
                <Col md={6}>
                    <Image src={props.image} thumbnail />
                </Col>
            </Row>
            <div>
                <strong className='mr-3'>Price: {props.price}</strong>
                <AddToCart
                    inCart={props.inCart}
                    onAdd={props.onAdd}
                    onRemove={props.onRemove}
                />
            </div>
            <hr />
            <div>
                <p>{props.description}</p>
                <props.linkComponent to={props.backUrl}>Back to list</props.linkComponent>
            </div>
            <hr />
        </Container>
    );
}