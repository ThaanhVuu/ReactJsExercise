import {useEffect, useState} from "react";
import './RectangleAreaCaculator.css';

function RectangleAreaCalculator() {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [area, setArea] = useState(0);

    useEffect(() => {
        setArea(height * width)
    }, [height, width]);

    const heightHandler = (e) => {
        if (e.target.value < 0) {
            alert("Height must be greater than 0");
        } else {
            setHeight(parseFloat(e.target.value) || 0);
        }
    };

    const widthHandler = (e) => {
        if (e.target.value > 0) {
            setWidth(parseFloat(e.target.value) || 0);
        } else {
            alert("Width must be greater than 0");
        }
    };

    return (
        <div className={"RectangleAreaCaculator"}>
            <h1>Rectangle Area Caculator</h1>

            <div className={"form"}>
                <span>Height:</span>
                <input
                    type={"number"}
                    onChange={heightHandler}
                    placeholder={"Height"}
                />

                <span>Width:</span>
                <input
                    type={"number"}
                    onChange={widthHandler}
                    placeholder={"Width"}
                />
            </div>

            <h2>Rectangle Area: {area}</h2>
        </div>
    );
}

export default RectangleAreaCalculator;