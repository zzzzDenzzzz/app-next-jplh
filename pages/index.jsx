import { useEffect, useState } from "react";

export default function Index() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div>
      <h1>{users.map((user) => user.name).join(", ")}</h1>
    </div>
  );
}
