import ICowork from "../../interfaces/Cowork/cowork";
import Card from "../common/Card";

import MaterialSymbolsBookmarksRounded from "~icons/material-symbols/bookmarks-rounded";

export default function CoworkCard({ cowork }: { cowork: ICowork }) {
  return (
    <Card>
      <div className="flex justify-between">
        <h2>{cowork.name}</h2>
        <div className="flex gap-y-2">
          <p>12</p>
          <MaterialSymbolsBookmarksRounded />
        </div>
      </div>
      <div className="flex gap-y-4">
        <p>{cowork.address}</p>
        <p>{cowork.phoneNumber}</p>
      </div>
      <p>{cowork.description}</p>
      <div className="flex gap-y-2">
        {cowork.coworkTags?.map((tag) => (
          <div className="border border-clr-grey px-2 py-1 rounded text-clr-grey">{`#${tag.name}`}</div>
        ))}
      </div>
    </Card>
  );
}
