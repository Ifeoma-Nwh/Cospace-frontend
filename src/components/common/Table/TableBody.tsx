import { ReactNode } from "react";
import ICity from "../../../interfaces/City/city";
import ICowork from "../../../interfaces/Cowork/cowork";
import ITag from "../../../interfaces/Tag/tag";
import IUser from "../../../interfaces/user";
import Button from "../Button";

import MaterialSymbolsEditRounded from "~icons/material-symbols/edit-rounded";
import MaterialSymbolsDeleteForeverRounded from "~icons/material-symbols/delete-forever-rounded";

type TableBodyProps<T extends ICity | ICowork | ITag | IUser> = {
  tableBodyData: T[];
  tableHeadData: (keyof T)[];
  editComponent?: (props: { idRow: number }) => ReactNode;
  deleteComponent?: (props: { idRow: number }) => ReactNode;
};
export default function TableBody<T extends ICity | ICowork | ITag | IUser>({
  tableBodyData,
  tableHeadData,
  editComponent,
  deleteComponent,
}: TableBodyProps<T>) {
  return (
    <tbody>
      {tableBodyData.map((row, rowIndex) => (
        <tr key={rowIndex} className={rowIndex % 2 !== 0 ? "bg-slate-100" : ""}>
          <td className="py-4 px-4">
            <div className="flex justify-between">
              <Button
                type="button"
                children={
                  <MaterialSymbolsEditRounded className="hover:text-clr-primary" />
                }
                onClick={() =>
                  editComponent && editComponent({ idRow: row["id"] })
                }
              />
              <Button
                type="button"
                children={
                  <MaterialSymbolsDeleteForeverRounded className="hover:text-clr-alert" />
                }
                onClick={() =>
                  deleteComponent && deleteComponent({ idRow: row["id"] })
                }
              />
            </div>
          </td>
          {tableHeadData.map((header, index) => (
            <td key={index} id={String(header)} className="py-4 px-4 min-w-36">
              {typeof row[header] === "symbol"
                ? (String(row[header]) as ReactNode)
                : (row[header] as ReactNode)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
