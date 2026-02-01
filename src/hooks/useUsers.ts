import { useState } from "react";
import { fetchUsers } from "../services/userService";

export type User={
  id: number
  name: string
  email: string
  company: {
    name: string
  }
}


function useUsers(url: string) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadUsers = async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await fetchUsers(url);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users", error);
    } finally {
      setLoading(false);
    }
  };
  return { users, loading, loadUsers };
}

export default useUsers;
