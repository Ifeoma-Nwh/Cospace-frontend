import { useState } from "react";
import { useGetCities } from "../../hooks/useCity";
import ICity from "../../interfaces/City/city";
import Table from "../common/Table/Table";
import EditCity from "./EditCity";

export default function Cities() {
  const { data: cities, isFetching, isError } = useGetCities();

  const [editCityId, setEditCityId] = useState<number | null>(null);

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error in fetching cities</div>;
  }

  const handleBack = () => {
    setEditCityId(null);
  };

  const tableHeaders: (keyof ICity)[] = [
    "id",
    "name",
    "zipcode",
    "createdAt",
    "updatedAt",
  ];

  return (
    <div>
      <h1>Cities</h1>
      {editCityId !== null ? (
        <EditCity cityId={editCityId} onBack={handleBack} />
      ) : (
        <Table<ICity>
          tableHeadData={tableHeaders}
          tableBodyData={cities!}
          editComponent={({ idRow }) => {
            setEditCityId(Number(idRow));
            return null;
          }}
        />
      )}
    </div>
  );
}
