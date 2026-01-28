import { useEffect, useState } from "react";
import axios from "axios";

function Users(){
  const [users, setUsers]=useState([]);
  const [loading, setLoading]=useState(false);
  
  const fetchUsers=async()=>{
    try{
        setLoading(true);

        const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(response.data); 
    }catch(error){
        console.error("Error fetching users:", error);
    }finally{
        setLoading(false);
    }
};


  useEffect(()=>{
    console.log("component mounted")
  }, []);

  return(
    <div className="user-card">
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
