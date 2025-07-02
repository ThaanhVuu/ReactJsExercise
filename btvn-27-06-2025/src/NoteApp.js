import {useState} from "react";
import './AppNote.css';

function NoteApp() {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('');
    const [notesFiltered, setNotesFiltered] = useState([]);

    const handleAddNewBtn = () => {
        if (input.trim() === "") return;
        const newNote = { id: Date.now(), text: input.trim() };
        let newList = [...notes, newNote];
        setNotes(newList);
        setNotesFiltered(newList);
        setInput("");
    }

    const handleDeleteBtn = (note) => {
        const newNotes = notes.filter((element) => element.id !== note.id);
        setNotesFiltered(newNotes);
    }

    const handlerSearchBtn = (searchInput) => {
        if (input.trim() === "") {
            setNotesFiltered(notes);
        } else {
            let newList = notes.filter((element) => element.text === searchInput);
            setNotesFiltered(newList);
        }
    }

    return (
        <div className={'AppNote'}>
            <h1>Note Manager</h1>
            <div>
                <input
                    placeholder={"Add a new note"}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={handleAddNewBtn}>Add</button>
                <button onClick={() => handlerSearchBtn(input)}>Search</button>
            </div>
            <div className={"listNote"}>
                {
                    notesFiltered.map((note) => (
                        <div key={note.id}>
                            <span>{note.text}</span>
                            <button onClick={() => handleDeleteBtn(note)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default NoteApp;
