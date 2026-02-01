import useUsers from "../hooks/useUsers";
import { useEffect } from "react";
import Card from "./Card";
import {
  USER_LIST_TITLE,
  LOAD_USERS_TEXT,
} from "../constants/textConstants";

function FetchApi() {
  const { users, loading, loadUsers } = useUsers("https://jsonplaceholder.typicode.com/users");

  useEffect(()=>{
    console.log("component mounted")
  }, []);

  return (
    <Card title={USER_LIST_TITLE}>
      <button onClick={loadUsers}>{LOAD_USERS_TEXT}</button>

      {loading && <p>loading...</p>}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default FetchApi;




  