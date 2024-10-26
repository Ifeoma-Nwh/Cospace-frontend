import { UseQueryResult } from "@tanstack/react-query";
import { Link } from "react-router-dom";

// Define a minimum type requirement for T
type CoworkTypes<TCowork> = {
  id: number;
  name: string;
  coworksByCity?: TCowork[] | null;
};

// Props for the DropdownMenu component
type Props<T> = {
  dropdownClass?: string;
  listQuery?: UseQueryResult<T[], Error>;
};

export default function DropdownMenu<T extends CoworkTypes<unknown>>({
  dropdownClass,
  listQuery,
}: Props<T>) {
  if (listQuery?.isLoading) {
    return <div>Loading...</div>;
  }
  if (listQuery?.isError) {
    return <div>Error: {listQuery.error.message}</div>;
  }

  return (
    <div className={`absolute z-10 top-9 left-auto ${dropdownClass}`}>
      <div className="mt-12">
        <ul className="dropdown">
          {listQuery?.data?.map((item) => (
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
