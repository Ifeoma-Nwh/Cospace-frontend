import { useGetCities } from "../../hooks/useCity";

export default function Cities() {
  const { data: cities, isFetching, isError } = useGetCities();

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error in fetching cities</div>;
  }

  return (
    <div>
      <h1>Cities</h1>
      <ul>
        {cities?.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}
