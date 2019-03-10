import React from "react";
import PropTypes from "prop-types";
import "../label.css";

const Label = ({ text }) => <span className="label-text">{text}</span>;

Label.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Label;
