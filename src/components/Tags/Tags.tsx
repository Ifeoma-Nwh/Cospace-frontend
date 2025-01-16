import { useGetTags } from "../../hooks/useTag";
import Table from "../common/Table/Table";

export default function Tags() {
  const { data: tags, isFetching, isError } = useGetTags();

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error in fetching tags</div>;
  }

  return (
    <div>
      <h1>Tags</h1>
      <Table
        tableHeadData={[
          "id",
          "name",
          "createdAt",
          "updatedAt",
          "createdBy",
          "updatedBy",
        ]}
        tableBodyData={tags!}
      />
    </div>
  );
}
