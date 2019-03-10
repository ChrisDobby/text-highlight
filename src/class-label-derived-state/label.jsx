import React from "react";
import PropTypes from "prop-types";

class Label extends React.Component {
    state = { backgroundColour: "inherit", text: this.props.text };

    componentDidMount() {
        this.updateAndNotify();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.backgroundColour !== "inherit" && prevState.backgroundColour !== this.state.backgroundColour) {
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
                {this.state.text}
            </span>
        );
    }
}

Label.getDerivedStateFromProps = (props, state) => {
    if (props.text !== state.text) {
        return { backgroundColour: "#9b34ee", text: props.text };
    }

    return { text: props.text };
};

Label.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Label;
