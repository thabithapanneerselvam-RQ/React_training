import { useState, useEffect } from "react";
import axios from "axios";

function Users(){
  const [users, setUsers]=useState([]);
  const [loading, setLoading]=useState(false);
  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");

  const fetchUsers=async()=>{
    try{
      setLoading(true);
      const response=await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    }catch(error){
      console.error("error in fetching users list", error)
    }finally{
      setLoading(false);
    }
  }



  const filteredUsers=users.filter((user)=>{
    const searchUser=user.name.toLowerCase().includes(search.toLowerCase());

    const filterData=companyFilter==="" || user.company.name===companyFilter;

    return searchUser && filterData;
  })






return(
  <>
  <div class="user-card">
    <h2>Users List</h2> 
    <button onClick={fetchUsers}>Load users</button> <br /><br />

    <input className="getInput" type="text" placeholder="search by name" value={search} onChange={(e)=>
      setSearch(e.target.value)}
    />

    <select value={companyFilter} onChange={(e)=>
      setCompanyFilter(e.target.value)}>
    
    <option value="">All companies</option>
    {[...new Set(users.map((user)=>user.company.name))].map(
      (company, index)=>(
        <option key={index} value={company}>
          {company}
          </option>
        )
    )}
    
    </select>

    {loading && <p>Loading...</p>}

    <ul>
      {filteredUsers.map((user)=>(
        <li key={user.id}>
          {user.name} - {user.email}
           <br />
          </li>
      ))}
    </ul>
  </div>
  </>
)

}

export default Users;