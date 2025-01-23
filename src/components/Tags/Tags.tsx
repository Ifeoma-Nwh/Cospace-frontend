import { useState } from "react";
import { useGetTags } from "../../hooks/useTag";
import ITag from "../../interfaces/Tag/tag";
import Table from "../common/Table/Table";
import EditTag from "./EditTag";
import CreateTag from "./CreateTag";
import DeleteTag from "./DeleteTag";

import Button from "../common/Button";

type ViewState = "table" | "edit" | "create";

export default function Tags() {
  const { data: tags, isFetching, isError } = useGetTags();

  const [editTagId, setEditTagId] = useState<number | null>(null);
  const [deleteTagId, setDeleteTagId] = useState<number | null>(null);
  const [view, setView] = useState<ViewState>("table");

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error in fetching tags</div>;
  }

  const handleBack = () => {
    setEditTagId(null);
    setView("table");
  };

  const closeModal = () => {
    setDeleteTagId(null);
  };

  const tableHeaders: (keyof ITag)[] = [
    "id",
    "name",
    "createdAt",
    "updatedAt",
    "createdBy",
    "updatedBy",
  ];

  const renderView = () => {
    switch (view) {
      case "create":
        return <CreateTag onBack={handleBack} />;
      case "edit":
        return <EditTag tagId={editTagId!} onBack={handleBack} />;
      default:
        return (
          <>
            <Table<ITag>
              tableHeadData={tableHeaders}
              tableBodyData={tags!}
              editComponent={({ idRow }) => {
                setEditTagId(Number(idRow));
                setView("edit");
                return null;
              }}
              deleteComponent={({ idRow }) => {
                setDeleteTagId(Number(idRow));
                return null;
              }}
            />
            {deleteTagId && (
              <DeleteTag tagId={deleteTagId} onBack={closeModal} />
            )}
          </>
        );
    }
  };

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1>Tags</h1>
        <Button
          type="button"
          className={`${view === "create" ? "btn-disabled" : "btn-primary"}`}
          onClick={() => setView("create")}
          disabled={view === "create"}
        >
          Créer une tag
        </Button>
      </div>
      {renderView()}
    </>
  );
}
