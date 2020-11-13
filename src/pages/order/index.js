import React from 'react';
import {Form, Button, Modal} from 'react-bootstrap';
import withStore from '~/hocs/withStore';

import { routesMap } from '~/routes';
import { Link } from 'react-router-dom';

class Order extends React.Component{
    state = {
        showModal: false
    }

    show = () => {
        this.setState({showModal: true});
    }

    hide = () => {
        this.setState({showModal: false});
    }

    confirm = () => {
        this.props.stores.order.send()
        this.hide();
        this.props.history.push(routesMap.result);
    }

    render(){
        let orderModel = this.props.stores.order;
        let formFields = [];

        for(let name in orderModel.formData){
            let field = orderModel.formData[name];
            
            formFields.push(
                <Form.Group key={name} controlId={'order-form-' + name}>
                    <Form.Label>{field.label}</Form.Label>
                    <Form.Control 
                        type="text" 
                        value={field.value}
                        onChange={(e) => orderModel.change(name, e.target.value)}
                    />
                    {field.valid === null || field.valid ? '' : 
                        <Form.Text className="text-muted">
                            {field.errorText}
                        </Form.Text>
                    }
                </Form.Group>
            );
        }

        return (
            <div>
                <h2>Order</h2>
                <br/>
                <Form>
                    {formFields}
                </Form>
                <Link className="btn btn-warning" to={routesMap.cart}>
                    Back to cart
                </Link>
                &nbsp;
                <hr/>
                <Button variant="primary" 
                        onClick={this.show} 
                        disabled={!orderModel.formValid}>
                    Apply order
                </Button>
                <Modal show={this.state.showModal} backdrop="static" onHide={this.hide}>
                    <Modal.Header closeButton>
                        <Modal.Title>Check information</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <strong>Total: {this.props.stores.cart.total}</strong>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.hide}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={this.confirm}>
                            All right
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default withStore(Order);