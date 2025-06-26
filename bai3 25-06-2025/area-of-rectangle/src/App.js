import './App.css';
import {useState} from "react";
import RectangleAreaCalculator from "./components/rectangleAreaCalculator/RectangleAreaCalculator";
import SalaryCaculator from "./components/salaryCaculator/SalaryCaculator";

function App() {
    const [status, setStatus] = useState(0);

    const RectangleAreaCaculatorButtonHandler = () => {
        setStatus(1);
    }

    const SalaryCaculatorButtonHandler = () => {
        setStatus(2);
    }

    return (
        <div className={"App"}>
            <div>
                <button onClick={RectangleAreaCaculatorButtonHandler}>Rectangle Area Caculator</button>
                <button onClick={SalaryCaculatorButtonHandler}>Salary Caculator</button>
            </div>
            {status === 1 && <RectangleAreaCalculator/>}
            {status === 2 && <SalaryCaculator/>}
        </div>

    );
}

export default App;