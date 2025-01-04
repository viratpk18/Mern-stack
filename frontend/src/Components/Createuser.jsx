import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            age: parseInt(age),
            email: email
        };

        axios.post('http://localhost:3000/api/user/create', newUser)
            .then((response) => {
                console.log('User Created:', response.data);
                alert('User created successfully!');
                navigate('/');
            })
            .catch((err) => {
                console.error('Error creating user:', err);
                alert('Failed to create user. Please try again.');
            });
    };

    return (
        <div>
            <h1>Create New User</h1>
            <fieldset id="uset">
                <legend>Enter the user details</legend>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Age:</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Create User</button>
                </form>
            </fieldset>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default CreateUser;
