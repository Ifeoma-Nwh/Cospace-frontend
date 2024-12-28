import { ReactNode, useMemo, useState } from "react";
import ICity from "../../interfaces/City/city";
import ICowork from "../../interfaces/cowork";
import ITag from "../../interfaces/tag";
import IUser from "../../interfaces/user";

import MaterialSymbolsArrowDropUpRounded from "~icons/material-symbols/arrow-drop-up-rounded";
import MaterialSymbolsArrowDropDownRounded from "~icons/material-symbols/arrow-drop-down-rounded";
import Pagination from "./Pagination";

type TableProps<T extends ICity | ICowork | ITag | IUser> = {
  tableHeadData: (keyof T)[]; // Array of keys that exist in T
  tableBodyData: T[];
  tableClass?: string;
};

const PageSize = 10;

export default function Table<T extends ICity | ICowork | ITag | IUser>({
  tableHeadData,
  tableBodyData,
  tableClass,
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
          <thead className="border-b-2 border-clr-black">
            <tr>
              <th></th>
              {tableHeadData.map((header, index) => (
                <th
                  key={index}
                  className="min-w-40 pb-4 px-4 text-left text-gray-600 cursor-pointer"
                  onClick={() => handleSort(header)}
                >
                  {typeof header === "symbol" ? String(header) : header}
                  {sortBy === header && sortOrder === "asc" ? (
                    <MaterialSymbolsArrowDropUpRounded width={16} height={16} />
                  ) : (
                    <MaterialSymbolsArrowDropDownRounded
                      width={16}
                      height={16}
                    />
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={rowIndex % 2 !== 0 ? "bg-slate-100" : ""}
              >
                <td className="py-4 px-4">1</td>
                {tableHeadData.map((header, index) => (
                  <td
                    key={index}
                    id={String(header)}
                    className="py-4 px-4 min-w-36"
                  >
                    {typeof row[header] === "symbol"
                      ? (String(row[header]) as ReactNode)
                      : (row[header] as ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
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
