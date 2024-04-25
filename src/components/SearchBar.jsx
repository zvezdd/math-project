import React, { useState, useEffect, useCallback } from "react";
import useInput from "../hooks/useInput";
import userData from "../database/userData"; // Импорт массива пользователей
import "./SearchBar.css"; // Подключаем файл со стилями
import UserList from "./UserList";

export default function SearchBar() {
  const input = useInput("");
  const [loading, setLoading] = useState(false);
  const [foundUsers, setFoundUsers] = useState([]);
  const [ableUser, setAbleUser] = useState([]);

  const fetchUsers = useCallback(() => {
    setLoading(true);
    const filteredUsers = userData.filter((user) =>
      user.name.toLowerCase().includes(input.value.toLowerCase())
    );
    setFoundUsers(filteredUsers);
    setLoading(false);
  }, [input.value]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const dayCheck = (day) => {
    const filteredUsers = userData.filter((user) =>
      user.ableDays.toLowerCase().includes(day.toLowerCase())
    );
    setAbleUser(filteredUsers);
  }

  return (
    <div className="search-container">
      <div className="teachers" >
      <h2 className="h2-title" >Search a teacher</h2>
      <input
        type="text"
        className="control"
        placeholder="Search user"
        {...input}
      />
      {loading && <p className="loading">Loading...</p>}
      {!loading &&
        foundUsers.length > 0 &&
        input.value !== "" &&
        input.value !== " " && (
          <ul>
            {foundUsers.map((user) => (
              <>
                <li key={user.id}>
                  <b>{user.name}</b>
                  <p>{user.subject}</p>
                  <p>{user.ableDays}</p>
                </li>
              </>
            ))}
          </ul>
        )}
      {!loading && foundUsers.length === 0 && <p>No users found</p>}
      </div>
      <h2>Search by days</h2>

      <div className="choose-day">
        <h3>Select</h3>
        <div>
          <button onClick={() => dayCheck('Monday')}>Monday</button>
          <button onClick={() => dayCheck('Tuesday')}>Tuesday</button>
          <button onClick={() => dayCheck('Wednesday')}>Wednesday</button>
          <button onClick={() => dayCheck('Thursday')}>Thursday</button>
          <button onClick={() => dayCheck('Friday')}>Friday</button>
          {foundUsers.length > 0 ? (
        <UserList className="user-list" users={ableUser} />
      ) : (
        <p>No users available on selected day</p>
      )}
        </div>
      </div>
    </div>
  );
}
