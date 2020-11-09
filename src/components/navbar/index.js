import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {urlBuilder} from '~/routes';
import { Link, NavLink } from 'react-router-dom';
import cartModel from '~s/cart.js';
import {observer} from 'mobx-react';

@observer class Menu extends React.Component{
    render() {
        return (
            <Navbar bg="light" variant="light">
                <Link className="navbar-brand" to={ urlBuilder('home') }>OnlineStore</Link>
                <Nav className="mr-auto ">
                    <NavLink className="nav-link" exact={true} to={ urlBuilder('home') }>Shop</NavLink>
                    <NavLink className="nav-link" to={ urlBuilder('cart') }>Cart { cartModel.count > 0 && "(" + cartModel.count + ")" }</NavLink>
                    <NavLink className="nav-link" to={ urlBuilder('order') }>Order</NavLink>
                </Nav>
            </Navbar>
        );
    }
}

export default Menu;
