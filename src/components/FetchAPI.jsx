import { useEffect, useState } from "react";

function Users(){
  const [users, setUsers]=useState([]);
  const [loading, setLoading]=useState(false);

  const fetchUsers=async()=>{
    setLoading(true);
    const response=await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data=await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(()=>{
    console.log("component mounted")
  }, []);

  return(
    <div>
      <h2>Users List</h2>

      <button onClick={fetchUsers}>Load Users</button>

      {loading && <p>Loading...</p>}

      <ul>
        {users.map((user)=>(
          <li key={user.id}>
            {user.name} - {user.email}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
