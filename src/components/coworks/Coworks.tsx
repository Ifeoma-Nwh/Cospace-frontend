import { useGetCoworks } from "../../hooks/useCowork";
import Table from "../common/Table";

export default function Coworks() {
  const { data: coworks, isFetching, isError } = useGetCoworks();

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error in fetching coworks</div>;
  }

  return (
    <div>
      <h1>Coworks</h1>
      <Table
        tableHeadData={[
          "id",
          "name",
          "address",
          "timetable",
          "phoneNumber",
          "dailyPrice",
          "monthlyPrice",
          "thumbnailUrl",
          "websiteUrl",
          "cityId",
          "createdBy",
          "updatedBy",
          "createdAt",
          "updatedAt",
        ]}
        tableBodyData={coworks!}
      />
    </div>
  );
}
