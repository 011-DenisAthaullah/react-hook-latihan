import { useState, useEffect } from "react";

function FetchData() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            setUsers(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
        <h2>Data User</h2>
        <ul>
            {users.map((user) => (
            <li key={user.id}>{user.name}. Email: {user.email}</li>
            ))}
        </ul>
        </div>
    );
}

export default FetchData;