import { useGetTags } from "../../hooks/useTag";

export default function Tags() {
  const { data: tags, isFetching, isError } = useGetTags();

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error in fetching tags</div>;
  }

  return (
    <div>
      <h1>Tags</h1>
      <ul>
        {tags?.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    </div>
  );
}
