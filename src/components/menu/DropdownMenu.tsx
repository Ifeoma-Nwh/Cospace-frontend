import { UseQueryResult } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import ICowork from "../../interfaces/cowork";

type Props<T> = {
  dropdownClass?: string;
  listQuery?: UseQueryResult<T[], Error>;
};

export default function DropdownMenu<
  T extends { id: number; name: string; coworksByCity: ICowork[] | null }
>({ dropdownClass, listQuery }: Props<T>) {
  if (listQuery?.isPending) {
    return <div>Loading...</div>;
  }
  if (listQuery?.isError) {
    return <div>Error: {listQuery.error.message}</div>;
  }

  return (
    <div className={`absolute z-10 top-9 left-auto ${dropdownClass}`}>
      <div className="mt-12">
        <ul className="dropdown">
          {listQuery?.data.map((item) => (
            <li key={item.id}>
              <Link to={`/cities/${item.id}`} className="dropdown-item">
                {item.name}
                {item.coworksByCity && ` (${item.coworksByCity.length})`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
