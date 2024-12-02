import { useGetUsers } from "../../hooks/useUser";

export default function Users() {
  const { data: users, isFetching, isError } = useGetUsers();

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error in fetching users</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}
