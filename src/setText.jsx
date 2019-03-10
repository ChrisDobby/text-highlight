import React from "react";
import PropTypes from "prop-types";
import "./setText.css";

const SetText = ({ initialText, updateText }) => {
    const [text, setText] = React.useState(initialText);

    const keyDown = ev => {
        if (ev.keyCode === 13) updateText(text);
    };

    return (
        <div className="outline">
            <input className="text-input" value={text} onChange={ev => setText(ev.target.value)} onKeyDown={keyDown} />
            <button type="button" className="execute-button" onClick={() => updateText(text)}>
                <i className="fas fa-bolt" />
            </button>
        </div>
    );
};

SetText.propTypes = {
    initialText: PropTypes.string.isRequired,
    updateText: PropTypes.func.isRequired,
};

export default SetText;
