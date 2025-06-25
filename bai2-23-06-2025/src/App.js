import './App.css';
import { useEffect, useState } from 'react';

function App(){
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(number1 + number2);
    }, [number1, number2]);

    const number1Onchange = (e) => {
        setNumber1(parseFloat(e.target.value) || 0);
    }

    const number2Onchange = (e) => {
        setNumber2(parseFloat(e.target.value) || 0);
    }

    return (
        <div className="App">
            <h2>Adding Two Number</h2>
            <input
                type={"number"}
                onChange={number1Onchange}
                placeholder="number"/>

            <input
                type={"number"}
                onChange={number2Onchange}
                placeholder="number"/>

            <h3>Total: {total}</h3>
        </div>

    );
}

export default App;