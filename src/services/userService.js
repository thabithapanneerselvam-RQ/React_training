import axios from "axios";


export const fetchUsers = async(url)=>{
  const response = await axios.get(url);
  return response.data;
};
