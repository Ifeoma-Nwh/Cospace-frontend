import { useParams } from "react-router-dom";
import { useGetCity } from "../hooks/useCity";

export default function City() {
  const { id } = useParams();
  const idCity = Number(id);
  const { data: city, isError, isFetching } = useGetCity(idCity);

  if (isError) {
    return <div>City not found</div>;
  }
  if (isFetching) {
    return <div>Loading...</div>;
  }

  return <div>{city?.name}</div>;
}
