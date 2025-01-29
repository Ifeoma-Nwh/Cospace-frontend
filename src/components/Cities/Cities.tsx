import { useState } from "react";
import { useGetCities } from "../../hooks/useCity";
import ICity from "../../interfaces/City/city";
import EditCity from "./EditCity";
import CreateCity from "./CreateCity";
import DeleteCity from "./DeleteCity";

import Table from "../common/Table/Table";
import Button from "../common/Button";

type ViewState = "table" | "edit" | "create";

export default function Cities() {
  const { data: cities, isFetching, isError } = useGetCities();
  const [editCityId, setEditCityId] = useState<number | null>(null);
  const [deleteCityId, setDeleteCityId] = useState<number | null>(null);
  const [view, setView] = useState<ViewState>("table");

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error in fetching cities</div>;
  }

  const handleBack = () => {
    setEditCityId(null);
    setView("table");
  };

  const closeModal = () => {
    setDeleteCityId(null);
  };

  const tableHeaders: (keyof ICity)[] = [
    "id",
    "name",
    "zipcode",
    "createdAt",
    "updatedAt",
  ];

  const renderView = () => {
    switch (view) {
      case "create":
        return <CreateCity onBack={handleBack} />;
      case "edit":
        return <EditCity cityId={editCityId!} onBack={handleBack} />;
      default:
        return (
          <>
            <Table<ICity>
              tableHeadData={tableHeaders}
              tableBodyData={cities!}
              editComponent={({ idRow }) => {
                setEditCityId(Number(idRow));
                setView("edit");
                return null;
              }}
              deleteComponent={({ idRow }) => {
                setDeleteCityId(Number(idRow));
                return null;
              }}
            />
            {deleteCityId && (
              <DeleteCity cityId={deleteCityId} onBack={closeModal} />
            )}
          </>
        );
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1>Cities</h1>
        <Button
          type="button"
          className={`${view === "create" ? "btn-disabled" : "btn-primary"}`}
          onClick={() => setView("create")}
          disabled={view === "create"}
        >
          Créer une ville
        </Button>
      </div>
      {renderView()}
    </>
  );
}
