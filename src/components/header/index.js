const { func } = require("prop-types");

import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom';
import { urlBuilder } from '~/routes';


export default function (props) {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Link className="navbar-brand" to={urlBuilder('home')}>OnlineStore</Link>
                    <Nav className="mr-auto ">
                        <NavLink className="nav-link" exact={true} to={urlBuilder('home')}>Shop</NavLink>
                        <NavLink className={props.total > 0 ? "nav-link" : "nav-link disabled"} to={urlBuilder('order')}>Order now</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to={urlBuilder('cart')}>
                            In Cart: {props.cartCnt} &nbsp; Total: {props.total}
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}