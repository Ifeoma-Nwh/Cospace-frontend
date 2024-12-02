type TableProps = {
  tableHeadData: string[];
  tableBodyData: { [key: string]: string }[];
  tableClass?: string;
};
export default function Table({
  tableHeadData,
  tableBodyData,
  tableClass,
}: TableProps) {
  return (
    <table className={`table ${tableClass}`}>
      <thead>
        <tr>
          {tableHeadData.map((header, index) => (
            <th key={index} className="py-2 px-4">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBodyData.map((row, index) => (
          <tr key={index}>
            {tableHeadData.map((header) => (
              <td key={header} className="py-2 px-4">
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
