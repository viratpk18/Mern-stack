import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const Updateuser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState({ name: '', age: '', email: '' });

    useEffect(() => {
        axios
            .get(`https://backend-xg4e.onrender.com/api/user/fetch/${id}`)
            .then((response) => {
                setUser(response.data.user);
            })
            .catch((err) => {
                console.error("Error fetching user:", err);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(`https://backend-xg4e.onrender.com/api/user/update/${id}`, user)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                console.error("Error updating user:", err);
            });
    };

    return (
        <div>
            <h1>Update User</h1>
            <fieldset id="uset">
                <legend >Enter the updated user details</legend>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={user.age}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Update</button>
                </form>
            </fieldset>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default Updateuser;