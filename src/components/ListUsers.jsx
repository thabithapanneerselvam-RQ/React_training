import { useState } from "react";
import useUsers from "../hooks/useUsers";
import Card from "./Card";
import {
  USER_LIST_TITLE,
  LOAD_USERS_TEXT,
  SEARCH_PLACEHOLDER,
  ALL_COMPANIES
} from "../constants/textConstants";

function ListUsers() {
  const { users, loading, loadUsers } = useUsers();
  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");

  const filteredUsers = users.filter(user => {
    const matchName = user.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCompany =
      companyFilter === "" ||
      user.company.name === companyFilter;

    return matchName && matchCompany;
  });

  const companies = [...new Set(users.map(u => u.company.name))];

  return (
    <Card title={USER_LIST_TITLE}>
      <button onClick={loadUsers}>{LOAD_USERS_TEXT}</button>

      <br /><br />

      <input
        placeholder={SEARCH_PLACEHOLDER}
        value={search}
        onChange={e => setSearch(e.target.value)}
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
