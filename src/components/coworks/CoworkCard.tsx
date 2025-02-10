import ICowork from "../../interfaces/Cowork/cowork";
import Card from "../common/Card";

import MaterialSymbolsBookmarksRounded from "~icons/material-symbols/bookmarks-rounded";

type CardProps<T extends ICowork> = {
  cowork: T;
  className?: string;
};

export default function CoworkCard<T extends ICowork>({
  cowork,
  className,
}: CardProps<T>) {
  return (
    <Card className={`min-w-[20rem] flex flex-col p-8 ${className}`}>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">{cowork.name}</h2>
        <div className="flex gap-x-2">
          <p>12</p>
          <MaterialSymbolsBookmarksRounded />
        </div>
      </div>
      <div className="my-4 flex gap-x-4">
        <p className="text-sm text-clr-grey">{cowork.address}</p>
        <p className="text-sm text-clr-grey">{cowork.coworkCity?.name}</p>
      </div>
      <p className="my-4">{cowork.description}</p>
      <div className="flex gap-2 flex-wrap">
        {cowork.coworkTags?.map((tag) => (
          <div className="border border-clr-accent px-2 py-1 rounded text-clr-accent">{`#${tag.name}`}</div>
        ))}
      </div>
    </Card>
  );
}
