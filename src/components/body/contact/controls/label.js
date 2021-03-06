import React from "react";
import PropTypes from "prop-types";

const Label = (props) => {
    return (
            <label>{props.text}</label>
        );
}

Label.propTypes= {
	text: PropTypes.string.isRequired
}

export default Label;