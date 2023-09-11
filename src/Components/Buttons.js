import React from "react";
import Button from "react-bootstrap/Button";

function Buttons({ text }) {
    return (
        <Button variant="danger">{text}</Button>

        // <button type="button" class="btn btn-danger btn-rounded">{text}</button>
    );
}

export default Buttons;
