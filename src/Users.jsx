import React, { use } from 'react';

const Users = ({ userPromise }) => {
    const users = use(userPromise)
    console.log(users);

    const handleForm = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = { name, email }
        console.log(name, email);

        // create user in the server
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="name" id="" /><br />
                <input type="email" name="email" id="" /><br />
                <input type="submit" name="" value='Add User' id="" />
            </form>
            <div>
                {
                    users.map(user => <p key={user.id}>
                        {user.name} : {user.email}
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;