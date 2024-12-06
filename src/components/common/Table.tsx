import { ReactNode } from "react";
import ICity from "../../interfaces/city";
import ICowork from "../../interfaces/cowork";
import ITag from "../../interfaces/tag";
import IUser from "../../interfaces/user";

type TableProps<T extends ICity | ICowork | ITag | IUser> = {
  tableHeadData: (keyof T)[]; // Array of keys that exist in T
  tableBodyData: T[];
  tableClass?: string;
};

export default function Table<T extends ICity | ICowork | ITag | IUser>({
  tableHeadData,
  tableBodyData,
  tableClass,
}: TableProps<T>) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className={`table ${tableClass || ""}`}>
        <thead>
          <tr className="bg-purple-200">
            {tableHeadData.map((header, index) => (
              <th key={index} className="py-2 px-4 text-left">
                {typeof header === "symbol" ? String(header) : header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableBodyData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 !== 0 ? "bg-slate-100" : ""}
            >
              {tableHeadData.map((header) => (
                <td key={String(header)} className="py-4 px-4 min-w-36">
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
  );
}
