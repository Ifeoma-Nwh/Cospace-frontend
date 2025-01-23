import ITag from "../interfaces/Tag/tag";
import ICreateTag from "../interfaces/Tag/createTag";
import IUpdateTag from "../interfaces/Tag/updateTag";
import api from "./api";

export async function getTags(): Promise<ITag[]> {
  const tags = await api("/tags", "GET");
  return tags;
}

export async function getTag(id: number): Promise<ITag> {
  const tag = await api(`/tags/${id}`, "GET");
  return tag;
}

export async function createTag(tag: ICreateTag): Promise<ITag> {
  const createdTag = await api("/tags", "POST", tag);
  return createdTag;
}

export async function updateTag(tag: IUpdateTag): Promise<ITag> {
  const updatedTag = await api(`/tags/${tag.id}`, "PUT", tag);
  return updatedTag;
}

export async function deleteTag(id: number): Promise<string> {
  await api(`/tags/${id}`, "DELETE");
  return "Tag deleted successfully";
}
