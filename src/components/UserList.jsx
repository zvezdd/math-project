import React from "react";

export default function UserList({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <b>{user.name}</b>
          <p>{user.subject}</p>
        </li>
      ))}
    </ul>
  );
}
