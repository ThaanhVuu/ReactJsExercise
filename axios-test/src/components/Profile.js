import axios from "axios";
import { useState, useEffect } from "react";
import './Profile.css';

function Profile() {
    const [profileUser, setProfileUser] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newProfile, setNewProfile] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        city: "",
        gender: "",
        email: "",
        phoneNumber: ""
    });

    const token = sessionStorage.getItem("token");

    useEffect(() => {
        axios.get("http://localhost:8888/profile/api", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                console.log(response.data.result);
                setProfileUser(response.data.result);
            })
            .catch(error => {
                alert("Lỗi khi gọi API endpoint");
                console.log(error);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleAddProfile = () => {
        axios.post("http://localhost:8888/profile/api", newProfile, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                alert("Thêm thành công!");
                setProfileUser(prev => [...prev, response.data.result]);
                setNewProfile({
                    firstName: "",
                    lastName: "",
                    dob: "",
                    city: "",
                    gender: "",
                    email: "",
                    phoneNumber: ""
                });
                setShowForm(false);
            })
            .catch(error => {
                alert("Thêm thất bại!");
                console.log(error);
            });
    };

    return (
        <div className="Profile">
            <h1>Profile</h1>

            <button onClick={() => setShowForm(true)}>Add</button>

            {showForm && (
                <div className="form-add">
                    <input name="firstName" placeholder="First Name" value={newProfile.firstName} onChange={handleInputChange} />
                    <input name="lastName" placeholder="Last Name" value={newProfile.lastName} onChange={handleInputChange} />
                    <input name="dob" placeholder="Date of Birth" type="date" value={newProfile.dob} onChange={handleInputChange} />
                    <input name="city" placeholder="City" value={newProfile.city} onChange={handleInputChange} />
                    <input name="gender" placeholder="Gender" value={newProfile.gender} onChange={handleInputChange} />
                    <input name="email" placeholder="Email" value={newProfile.email} onChange={handleInputChange} />
                    <input name="phoneNumber" placeholder="Phone Number" value={newProfile.phoneNumber} onChange={handleInputChange} />

                    <button onClick={handleAddProfile}>Thêm</button>
                    <button onClick={() => setShowForm(false)}>Huỷ</button>
                </div>
            )}

            <div className="card-container">
                {profileUser.map((profile) => (
                    <div className="card" key={profile.id} style={{ width: "18rem", margin: "1rem" }}>
                        <div className="card-body">
                            <h3 className="card-title">{profile.lastName} {profile.firstName}</h3>
                            <span className="card-subtitle mb-2 text-body-secondary">{profile.city}</span><br />
                            <span className="card-text">{profile.email}</span><br />
                            <span className="card-text">{profile.phoneNumber}</span><br />
                            <span className="card-text">{profile.dob}</span><br />
                            <span className="card-text">{profile.gender}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Profile;
