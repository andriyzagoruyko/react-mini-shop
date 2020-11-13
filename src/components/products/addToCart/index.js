import { func } from "prop-types";

import React from 'react';
import { Button } from 'react-bootstrap';

export default  function(props) {
    let btn;

    if (props.inCart) {
        btn = <Button
            variant="danger"
            onClick={props.onRemove}
        >
            Remove from cart
        </Button>
    }
    else {
        btn = <Button
            variant="success"
            onClick={props.onAdd}
        >
            Add to cart
        </Button>
    }

    return btn;
}