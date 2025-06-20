import { useState } from "react";

const Changename = () => {
    const [name, setName] = useState(`User`);

    const changeName = () => {
        if (name === `User`) {
            setName(`HTV`)
        } else {
            setName(`User`)
        }
    }

    return (
        <div id="abc">
            <h2>Tên: {name}</h2>
            <button
                onClick={changeName}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "8px"
                }}>
                Change Name
            </button>
        </div>
    );
}

export default Changename;