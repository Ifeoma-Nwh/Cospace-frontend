import { useGetCoworks } from "../../hooks/useCowork";

export default function Coworks() {
  const { data: coworks, isFetching, isError } = useGetCoworks();

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error in fetching coworks</div>;
  }

  return (
    <div>
      <h1>Coworks</h1>
      <ul>
        {coworks?.map((cowork) => (
          <li key={cowork.id}>{cowork.name}</li>
        ))}
      </ul>
    </div>
  );
}
