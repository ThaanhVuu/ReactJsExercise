import {useState} from "react";
import './AppNote.css';

function NoteApp() {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('');

    const handleAddNewBtn = () => {
        if (input.trim() === "") return;
        //...notes -> giải mảng ra thành các phần tử, rồi thêm phần tử input vào mảng, rồi set thành mảng mới (setNotes)
        // nếu trực tiếp thao tác với mảng, react sẽ k render, chỉ khi dùng set... mới render
        setNotes([...notes, input]);
        setInput("");
    }

    //index sẽ được gán cho btn trong html
    const handleDeleteBtn = (index) => {
        //tạo 1 mảng mới với các phần tử của mảng cũ được lọc qua filter, rồi thay thế mảng cũ bằng mảng mới để react render
        const newNotes = notes.filter((element, i) => i !== index);
        setNotes(newNotes);
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
            </div>
            <div className={"listNote"}>
                {
                    notes.map((note, index) => (
                        <div key={index}>
                            <span>{note}</span>
                            <button onClick={() => handleDeleteBtn(index)}>Delete</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default NoteApp;