import { useParams } from "react-router-dom";
import { useGetCity } from "../hooks/useCity";
import CoworkCard from "../components/coworks/CoworkCard";

export default function City() {
  const { city_id } = useParams();
  const idCity = Number(city_id);
  const { data: city, isError, isFetching } = useGetCity(idCity);

  if (isError) {
    return <div>City not found</div>;
  }
  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1>{city?.name}</h1>
      <p>{city?.zipcode}</p>
      <div>
        {city?.coworksByCity?.map((cowork) => (
          <CoworkCard key={cowork.id} cowork={cowork} />
        ))}
      </div>
    </div>
  );
}
