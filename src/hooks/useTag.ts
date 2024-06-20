import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getTags, getTag, createTag, updateTag, deleteTag } from "../api/tags";
import ITag from "../interfaces/tag";

export const useGetTags = () => {
  return useQuery({ queryKey: ["tags"], queryFn: getTags });
};

export const useGetTag = (id: number) => {
  return useQuery({ queryKey: ["tag", id], queryFn: () => getTag(id) });
};

export const useCreateTag = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newTag: ITag) => createTag(newTag),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};

export const useUpdateTag = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedTag: ITag) => updateTag(updatedTag),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};

export const useDeleteTag = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteTag(id),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
  });
};
