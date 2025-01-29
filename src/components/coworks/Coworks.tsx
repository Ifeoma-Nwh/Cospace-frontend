import { useState } from "react";
import { useGetCoworks } from "../../hooks/useCowork";
import ICowork from "../../interfaces/Cowork/cowork";
import EditCowork from "./EditCowork";
import CreateCowork from "./CreateCowork";
import DeleteCowork from "./DeleteCowork";

import Table from "../common/Table/Table";
import Button from "../common/Button";

type ViewState = "table" | "edit" | "create";

export default function Coworks() {
  const { data: coworks, isFetching, isError } = useGetCoworks();
  const [editCoworkId, setEditCoworkId] = useState<number | null>(null);
  const [deleteCoworkId, setDeleteCoworkId] = useState<number | null>(null);
  const [view, setView] = useState<ViewState>("table");

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error in fetching coworks</div>;
  }

  const handleBack = () => {
    setEditCoworkId(null);
    setView("table");
  };

  const closeModal = () => {
    setDeleteCoworkId(null);
  };

  const tableHeaders: (keyof ICowork)[] = [
    "id",
    "name",
    "address",
    "cityId",
    "createdBy",
    "updatedBy",
    "createdAt",
    "updatedAt",
    "timetable",
    "phoneNumber",
    "dailyPrice",
    "monthlyPrice",
    "thumbnailUrl",
    "websiteUrl",
  ];

  const renderView = () => {
    switch (view) {
      case "create":
        return <CreateCowork onBack={handleBack} />;
      case "edit":
        return <EditCowork coworkId={editCoworkId!} onBack={handleBack} />;
      default:
        return (
          <>
            <Table<ICowork>
              tableHeadData={tableHeaders}
              tableBodyData={coworks!}
              editComponent={({ idRow }) => {
                setEditCoworkId(Number(idRow));
                setView("edit");
                return null;
              }}
              deleteComponent={({ idRow }) => {
                setDeleteCoworkId(Number(idRow));
                return null;
              }}
            />
            {deleteCoworkId && (
              <DeleteCowork coworkId={deleteCoworkId} onBack={closeModal} />
            )}
          </>
        );
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1>Coworks</h1>
        <Button
          type="button"
          className={`${view === "create" ? "btn-disabled" : "btn-primary"}`}
          onClick={() => setView("create")}
          disabled={view === "create"}
        >
          Créer un cowork
        </Button>
      </div>
      {renderView()}
    </>
  );
}
