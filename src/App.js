import React, {useState} from 'react';

function App() {
    const myName = "Runhao Hong";
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [showSecondClock, setShowSecondClock] = useState(false);

    const refreshTime = () => {
        setTime(new Date().toLocaleTimeString());
    };

    const addSecondClock = () => {
        setShowSecondClock(true);
    };

    return (
        <React.Fragment>
            <div className="App">
                <h1>{myName}</h1>
                <h2>{time}</h2>
                {showSecondClock && <h2>{new Date().toLocaleTimeString()}</h2>}
                <button onClick={refreshTime}>Refresh Time</button>
                <button onClick={addSecondClock}>Add Second Clock</button>
            </div>
        </React.Fragment>
    );
}

export default App;
