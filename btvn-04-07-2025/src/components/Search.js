import {useState} from "react";
import "./Search.css"

function Search() {
    const [input, setInput] = useState('');
    const array2 = ["Banana", "Apple", "Watermelon", "Pineapple", "Dragonfruit"];

    const filteredArray = array2.filter(element =>
        element.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );

    return (
        <div className="search">
            <input
                className="input-group-text"
                placeholder="Search"
                value={input}
                onChange={(e) => setInput(e.target.value.trim())}
            />
            <div
                className="card"
                style={{ width: "18rem" }}
            >
                <ul className="list-group list-group-flush">
                    {filteredArray.map((element, index) => (
                        <li className="list-group-item" key={index}>{element}</li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Search;
