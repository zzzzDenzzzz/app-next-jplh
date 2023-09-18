import { useEffect, useState } from "react";
import { Table, Loader, Dimmer } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default function Index() {
  const [users, setUsers] = useState([]),
    [error, setError] = useState(null),
    URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => setError(error));
  }, []);

  if (error)
    return (
      <Dimmer active inverted>
        <Loader active inline size="huge">
          Loading...
        </Loader>
      </Dimmer>
    );

  return (
    <Table celled structured>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell rowSpan="2">Name</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">UserName</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Email</Table.HeaderCell>
          <Table.HeaderCell colSpan="3">Address</Table.HeaderCell>

          <Table.HeaderCell rowSpan="2">Phone</Table.HeaderCell>
          <Table.HeaderCell rowSpan="2">Website</Table.HeaderCell>
          <Table.HeaderCell colSpan="3">Company</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell>Street</Table.HeaderCell>
          <Table.HeaderCell>Suite</Table.HeaderCell>
          <Table.HeaderCell>City</Table.HeaderCell>

          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>CatchPhrase</Table.HeaderCell>
          <Table.HeaderCell>BS</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {users.map((user) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.address.street}</Table.Cell>
            <Table.Cell>{user.address.suite}</Table.Cell>
            <Table.Cell>{user.address.city}</Table.Cell>
            <Table.Cell>{user.phone}</Table.Cell>
            <Table.Cell>{user.website}</Table.Cell>
            <Table.Cell>{user.company.name}</Table.Cell>
            <Table.Cell>{user.company.catchPhrase}</Table.Cell>
            <Table.Cell>{user.company.bs}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
