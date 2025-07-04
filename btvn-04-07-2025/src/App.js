import './App.css';
import Search from "./components/Search";
import {useState} from "react";
import Login from "./components/Login";
import AddNumber from "./components/AddNumber";

function App() {
    const [button, setButton] = useState("Search");

    return (
        <div className="App">
            <div className={"buttons"}>
                <button onClick={() => setButton("Search")} className={"btn btn-primary"}>Search</button>

                <button className={"btn btn-primary"} onClick={() => setButton("AddNumber")}>Add number</button>

                <button className={"btn btn-primary"} onClick={() => setButton("Login")}>Login</button>

            </div>
            <div>
                {button === "Search" && <Search/>}
                {button === "AddNumber" && <AddNumber/>}
                {button === "Login" && <Login/>}
            </div>
        </div>
    );
}

export default App;
