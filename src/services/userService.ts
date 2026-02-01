import axios from "axios";
import type { User } from '../hooks/useUsers'

export const fetchUsers = async(url: string): Promise<User[]>=>{
  const response = await axios.get(url);
  return response.data;
};
