import ICity from "../../../interfaces/City/city";
import ICowork from "../../../interfaces/cowork";
import ITag from "../../../interfaces/tag";
import IUser from "../../../interfaces/user";

import MaterialSymbolsArrowDropUpRounded from "~icons/material-symbols/arrow-drop-up-rounded";
import MaterialSymbolsArrowDropDownRounded from "~icons/material-symbols/arrow-drop-down-rounded";

type TableHeadProps<T extends ICity | ICowork | ITag | IUser> = {
  tableHeadData: (keyof T)[]; // Array of keys that exist in T
  sortBy: keyof T;
  sortOrder: string;
  handleSort: (header: keyof T) => void;
};

export default function TableHead<T extends ICity | ICowork | ITag | IUser>({
  tableHeadData,
  sortBy,
  sortOrder,
  handleSort,
}: TableHeadProps<T>) {
  return (
    <thead className="border-b-2 border-clr-black">
      <tr>
        <th className="min-w-20 pb-4 px-4 text-left text-gray-600">Actions</th>
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
              <MaterialSymbolsArrowDropDownRounded width={16} height={16} />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}
