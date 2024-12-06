import { useGetCities } from "../../hooks/useCity";
import Table from "../common/Table";

export default function Cities() {
  const { data: cities, isFetching, isError } = useGetCities();

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error in fetching cities</div>;
  }

  return (
    <div>
      <h1>Cities</h1>
      <Table
        tableHeadData={["id", "name", "zipcode", "createdAt", "updatedAt"]}
        tableBodyData={cities!}
      />
    </div>
  );
}
