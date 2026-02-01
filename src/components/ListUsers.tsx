import { useState } from "react";
import useUsers from "../hooks/useUsers";
import Card from "./Card";
import {
  USER_LIST_TITLE,
  LOAD_USERS_TEXT,
  SEARCH_PLACEHOLDER,
  ALL_COMPANIES
} from "../constants/textConstants";
import { setSearch } from "../app/user.slice";
import { useAppDispatch, useAppSelector } from "../app/hooks";


function ListUsers() {
  const { users, loading, loadUsers } = useUsers("https://jsonplaceholder.typicode.com/users");

  const dispatch = useAppDispatch();
  const search = useAppSelector(state=>state.user.search)

  const [companyFilter, setCompanyFilter] = useState<string>("");

  const filteredUsers = users.filter(user => {
    const matchName = user.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCompany =
      companyFilter === "" ||
      user.company.name === companyFilter;

    return matchName && matchCompany;
  });
  
  const companies = Array.from(
    new Set(users.map(user=>user.company.name))
  )

  return (
    <Card title={USER_LIST_TITLE}>
      <button onClick={loadUsers}>{LOAD_USERS_TEXT}</button>

      <br /><br />

      <input
        placeholder={SEARCH_PLACEHOLDER}
        value={search}
        onChange={e => dispatch(setSearch(e.target.value))}
      />

      <select
        value={companyFilter}
        onChange={e => setCompanyFilter(e.target.value)}
      >
        <option value="">{ALL_COMPANIES}</option>
        {companies.map(company => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>

      {loading && <p>Loading...</p>}

      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default ListUsers;
