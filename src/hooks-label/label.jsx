import React from "react";
import PropTypes from "prop-types";

const Label = ({ text }) => {
    const [backgroundColour, setBackgroundColour] = React.useState("inherit");
    const updateTimer = React.useRef(null);

    function setUpdate() {
        setBackgroundColour("#9b34ee");
        updateTimer.current = setTimeout(() => {
            setBackgroundColour("inherit");
            updateTimer.current = null;
        }, 1000);
    }

    React.useEffect(() => {
        return () => {
            if (updateTimer.current) {
                clearTimeout(updateTimer.current);
            }
        };
    }, []);

    React.useEffect(() => {
        if (!updateTimer.current) setUpdate();
    }, [text]);

    return (
        <span className="label-text" style={{ backgroundColor: backgroundColour }}>
            {text}
        </span>
    );
};

Label.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Label;
