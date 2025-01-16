import { useGetUsers } from "../../hooks/useUser";
import Table from "../common/Table/Table";

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
      <Table
        tableHeadData={[
          "id",
          "email",
          "fullName",
          "roleId",
          "createdAt",
          "updatedAt",
        ]}
        tableBodyData={users!}
      />
    </div>
  );
}
