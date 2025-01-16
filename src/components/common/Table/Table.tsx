import { ReactNode, useMemo, useState } from "react";
import ICity from "../../../interfaces/City/city";
import ICowork from "../../../interfaces/cowork";
import ITag from "../../../interfaces/tag";
import IUser from "../../../interfaces/user";

import Pagination from "../Pagination";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

type TableProps<T extends ICity | ICowork | ITag | IUser> = {
  tableHeadData: (keyof T)[]; // Array of keys that exist in T
  tableBodyData: T[];
  tableClass?: string;
  editComponent?: (props: { idRow: number }) => ReactNode;
  deleteComponent?: (props: { idRow: number }) => ReactNode;
};

const PageSize = 10;

export default function Table<T extends ICity | ICowork | ITag | IUser>({
  tableHeadData,
  tableBodyData,
  tableClass,
  editComponent,
  deleteComponent,
}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const [sortBy, setSortBy] = useState<keyof T>("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (key: keyof T) => {
    if (sortBy === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(key);
      setSortOrder("asc");
    }
  };

  // Sorting logic based on sortBy and sortOrder
  const sortedTableBodyData = [...tableBodyData].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];
    if (sortOrder === "asc") {
      return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    } else {
      return bValue < aValue ? -1 : bValue > aValue ? 1 : 0;
    }
  });

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return sortedTableBodyData?.slice(firstPageIndex, lastPageIndex);
  }, [sortedTableBodyData, currentPage]);

  return (
    <>
      <div className="mt-10 overflow-x-auto">
        <table className={`table ${tableClass || ""}`}>
          <TableHead
            tableHeadData={tableHeadData}
            handleSort={handleSort}
            sortBy={sortBy}
            sortOrder={sortOrder}
          />
          <TableBody
            tableHeadData={tableHeadData}
            tableBodyData={currentTableData}
            editComponent={editComponent}
            deleteComponent={deleteComponent}
          />
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalCount={tableBodyData!.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
