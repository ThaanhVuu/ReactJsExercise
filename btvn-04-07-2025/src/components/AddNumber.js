import {useEffect, useState} from "react";
import './AddNumber.css'

function AddNumber() {
    const [n, setN] = useState({
        n1: "",
        n2: ""
    })
    const [result, setResult] = useState(0);

    useEffect(() => {
        setResult(n.n1 + n.n2);
    }, [n]);

    const onchangeInputHandler = (e) => {
        const value = e.target.value === "" ? 0 : parseFloat(e.target.value);

        setN(prevState => (
            {
                ...prevState,
                [e.target.name]: parseFloat(value)
            }
        ))
    }

    return (
        <div className={"AddNumber"}>
            <div>
                <span>Number 1</span>
                <input
                    placeholder={"Number 1"}
                    name={"n1"}
                    type={"number"}
                    onChange={onchangeInputHandler}
                    className={"input-group-text"}
                />
            </div>
            <div>
                <span>Number 2</span>
                <input
                    placeholder={"Number 2"}
                    type={"number"}
                    name={"n2"}
                    onChange={onchangeInputHandler}
                    className={"input-group-text"}
                />
            </div>
            <h3>Result: {result}</h3>
        </div>
    );
}

export default AddNumber;