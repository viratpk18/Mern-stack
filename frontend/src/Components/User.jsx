import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css';

const User = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = () => {
        axios.get("http://localhost:3000/api/user/fetch")
            .then(response => {
                setUser(response.data.users);
            })
            .catch(err => {
                console.log(err);
            });
    };
    const deleteUser = (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this user?");
        if (isConfirmed) {
            axios.delete(`http://localhost:3000/api/user/delete/${id}`)
                .then(() => {
                    alert("User deleted successfully!");
                    fetchUsers();
                })
                .catch(err => {
                    console.log(err);
                    alert("Failed to delete the user. Please try again.");
                });
        }
    };
    return (
        <div>
            <div id="uds">
                <h1>User's Data</h1>
                <h2><Link to="/create">Create User</Link></h2>
            </div>
            <table id="ut" border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link id="link" to={`/update/${user._id}`}>Update User</Link>
                                <button id="kem" onClick={() => deleteUser(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default User;