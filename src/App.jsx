import React from "react";
import "./App.css";
import SetText from "./setText";
import SimpleLabel from "./simple-label/label";
import ClassLabelDidUpdate from "./class-label-did-update/label";
import ClassLabelDerivedState from "./class-label-derived-state/label";
import ClassLabelSnapshot from "./class-label-snapshot/label";
import HooksLabel from "./hooks-label/label";

const App = () => {
    const [text, setText] = React.useState("Hello world!");

    return (
        <div className="App">
            <div className="App-Container">
                <SetText initialText={text} updateText={setText} />
                <div className="App-Container-Component">
                    <h3>Simple label</h3>
                    <SimpleLabel text={text} />
                </div>
                <div className="App-Container-Component">
                    <h3>Hooks component</h3>
                    <HooksLabel text={text} />
                </div>
                <div className="App-Container-Component">
                    <h3>Class component (componentDidUpdate)</h3>
                    <ClassLabelDidUpdate text={text} />
                </div>
                <div className="App-Container-Component">
                    <h3>Class component (getSnapshotBeforeUpdate)</h3>
                    <ClassLabelSnapshot text={text} />
                </div>
                <div className="App-Container-Component">
                    <h3>Class component (getDerivedStateFromProps)</h3>
                    <ClassLabelDerivedState text={text} />
                </div>
            </div>
        </div>
    );
};

export default App;
