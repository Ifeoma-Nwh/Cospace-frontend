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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
    onError: (error) => {
      console.error("Error creating tag:", error);
    },
  });
};

export const useUpdateTag = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedTag: ITag) => updateTag(updatedTag),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
      queryClient.invalidateQueries({ queryKey: ["tag", variables.id] });
    },
    onError: (error) => {
      console.error("Error updating tag:", error);
    },
  });
};

export const useDeleteTag = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteTag(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tags"] });
    },
    onError: (error) => {
      console.error("Error deleting tag:", error);
    },
  });
};
