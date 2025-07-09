import {useEffect, useState} from "react";
import "./Character.css";

function Character() {
    const [characters, setCharacters] = useState([]);
    const [input, setInput] = useState("");
    const [showList, setShowList] = useState(false);

    const filteredArray = characters.filter(element =>
        element.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );

    useEffect(() => {
        // Gọi API lấy danh sách nhân vật
        window.axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res => {
                setCharacters(res.data.results);
            })
            .catch(error => {
                alert(`get characters failed`);
                console.log(error);
            })
    }, []);

    return (
        <div className="Character">
            <h1>Rick and Morty Characters</h1>
            <div className="Navigate">
                <button
                    className="btn btn-primary"
                    onClick={() => setShowList(prev => !prev)}
                >
                    {showList ? "Hide" : "Display"}
                </button>
                <input
                    className="input-group-text"
                    placeholder="Search"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>

            {showList && (
                <div className="row custom-grid">
                    {filteredArray.map((character) => (
                        <div className="card-container" key={character.id}>
                            <div className="card h-100">
                                <img
                                    src={character.image}
                                    className="card-img-top"
                                    alt={character.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                    <span className="card-text">Status: {character.status}</span><br />
                                    <span className="card-text">Species: {character.species}</span><br />
                                    <span className="card-text">Gender: {character.gender}</span><br />
                                    <span className="card-text">Origin: {character.origin.name}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Character;
