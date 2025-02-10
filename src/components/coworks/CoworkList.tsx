import { useGetCoworks } from "../../hooks/useCowork";
import CoworkCard from "./CoworkCard";
type Props = {
  className?: string;
  limit?: number;
};
export default function CoworkList({ className, limit }: Props) {
  const { data: coworks, isFetching, isError } = useGetCoworks();

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error in fetching coworks</div>;
  }
  return (
    <div className={`flex justify-center flex-wrap gap-10 ${className}`}>
      {coworks?.slice(0, limit).map((cowork) => (
        <CoworkCard cowork={cowork} key={cowork.id} />
      ))}
    </div>
  );
}
