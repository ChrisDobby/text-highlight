import React from "react";
import PropTypes from "prop-types";

class Label extends React.Component {
    state = { backgroundColour: "inherit" };

    componentDidUpdate(prevProps) {
        if (prevProps.text !== this.props.text) {
            this.updateAndNotify();
        }
    }

    componentWillUnmount() {
        if (this.updateTimer) {
            clearTimeout(this.updateTimer);
        }
    }

    updateAndNotify = () => {
        if (this.updateTimer) return;

        this.setState({ backgroundColour: "#9b34ee" });
        this.updateTimer = setTimeout(() => {
            this.setState({ backgroundColour: "inherit" });
            this.updateTimer = null;
        }, 1000);
    };

    render() {
        return (
            <span className="label-text" style={{ backgroundColor: this.state.backgroundColour }}>
                {this.props.text}
            </span>
        );
    }
}

Label.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Label;
