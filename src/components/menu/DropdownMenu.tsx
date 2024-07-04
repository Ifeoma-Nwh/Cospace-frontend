import { UseQueryResult } from "@tanstack/react-query";

type Props<T> = {
  dropdownClass?: string;
  listQuery?: UseQueryResult<T[], Error>;
};

export default function DropdownMenu<T extends { id: number; name: string }>({
  dropdownClass,
  listQuery,
}: Props<T>) {
  if (listQuery?.isPending) {
    return <div>Loading...</div>;
  }
  if (listQuery?.isError) {
    return <div>Error: {listQuery.error.message}</div>;
  }

  return (
    <div className={dropdownClass}>
      <ul className="dropdown">
        {listQuery?.data.map((item) => (
          <li className="dropdown-item" key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
