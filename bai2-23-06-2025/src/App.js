import './App.css';
import React, {useState} from "react";

function App() {
    const [total, setTotal] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);

    const handleClick = () => {
        setTotal(number1 + number2);
    }

    return (
        <div className="App">
            <h2>Adding Two Number</h2>
            <input
                type={"number"}
                onChange={(e) => {
                    const value = parseFloat(e.target.value) || 0;
                    setNumber1(value);
                    setTotal(value + number2);
                }}
                placeholder="number"/>

            <input
                type={"number"}
                onChange={(e) => {
                    const value = parseFloat(e.target.value) || 0;
                    setNumber2(value);
                    setTotal(number1 + value);
                }}
                placeholder="number"/>

            <h3>Total: {total}</h3>
        </div>

    );
}

export default App;
