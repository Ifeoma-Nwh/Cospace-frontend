import ICowork from "../../interfaces/Cowork/cowork";

export default function CoworkCard({ cowork }: { cowork: ICowork }) {
  return (
    <div>
      <p>{cowork.name}</p>
      <p>{cowork.address}</p>
      <p>{cowork.description}</p>
      <p>{cowork.timetable}</p>
      <p>{cowork.phoneNumber}</p>
      <p>{cowork.dailyPrice}</p>
      <p>{cowork.monthlyPrice}</p>
    </div>
  );
}
