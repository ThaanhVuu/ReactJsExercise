import './ContactManager.css'
import { useState } from "react";

function ContactManager() {
    const [contacts, setContacts] = useState([]);
    const [form, setForm] = useState({
        id: "",
        name: "",
        phoneNumber: ""
    });
    const [idContact, setIdContact] = useState(1);
    const [fullContacts, setFullContacts] = useState([]);

    //field sẽ phụ thuộc vào thuộc tính name và value của thẻ input html
    const onchangeInputHandler = (e) => {
        let nameField = e.target.name;
        let valueField = e.target.value;

        setForm(prevState => ({
            ...prevState,
            [nameField]: valueField
        }));
    };

    const addBtnHandler = () => {
        const newForm = {
            ...form,
            id: idContact
        };
        const newContacts = [...contacts, newForm];
        setContacts(newContacts);
        setFullContacts(newContacts);
        setIdContact(idContact + 1);
        setForm({ id: "", name: "", phoneNumber: "" });
    };

    const deleteBtnHandler = (id) => {
        const newContacts = [...contacts];
        const indexToDelete = newContacts.findIndex(contact => contact.id === id);
        if (indexToDelete !== -1) {
            newContacts.splice(indexToDelete, 1);
            setContacts(newContacts);
            setFullContacts(newContacts);
        }
    };

    const searchHandler = (e) => {
        const keyword = e.target.value.trim();
        if (keyword === "") {
            setContacts(fullContacts);
        } else {
            const filtered = fullContacts.filter(contact =>
                contact.name.includes(keyword) || contact.phoneNumber.includes(keyword)
            );
            setContacts(filtered);
        }
    };

    return (
        <div className="ContactManager">
            <h1>Contact Manager</h1>

            <div className="mb-3 search">
                <input
                    className="form-control"
                    placeholder="Search"
                    type="text"
                    name="name"
                    onChange={searchHandler}
                />
            </div>

            <div className="inputForm">
                <div className="mb-3">
                    <input
                        className="form-control"
                        placeholder="Name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={onchangeInputHandler}
                    />
                </div>
                <div className="mb-3">
                    <input
                        className="form-control"
                        placeholder="Phone Number"
                        type="text"
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={onchangeInputHandler}
                    />
                </div>
                <button className="btn btn-success" onClick={addBtnHandler}>Add</button>
            </div>

            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact) => (
                    <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.phoneNumber}</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteBtnHandler(contact.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default ContactManager;
