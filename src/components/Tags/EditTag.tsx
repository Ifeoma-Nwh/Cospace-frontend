import { useEffect, useState } from "react";
import Button from "../common/Button";
import useToast from "../../contexts/toast/useToast";

import IUpdateTag from "../../interfaces/Tag/updateTag";
import { useGetTag, useUpdateTag } from "../../hooks/useTag";

import Form from "../form/Form";
import Input from "../form/Input";

import useAuthContext from "../../contexts/auth/useAuthContext";

import MaterialSymbolsArrowBackRounded from "~icons/material-symbols/arrow-back-rounded";

type Props = {
  tagId: number;
  onBack: () => void;
};

export default function EditTag({ tagId, onBack }: Props) {
  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;
  const mutation = useUpdateTag();
  const toast = useToast();

  const [name, setName] = useState<string>("");
  const [selectedCoworkIds, setSelectedCoworkIds] = useState<number[]>([]);

  const { data: tag, isFetching, isError } = useGetTag(tagId);

  const taggedCoworks = tag?.taggedCoworks;

  useEffect(() => {
    if (tag) {
      setName(tag.name);
      setSelectedCoworkIds(tag.taggedCoworks?.map((cowork) => cowork.id) || []);
    }
  }, [tag]);

  const handleCoworkSelection = (coworkId: number, isSelected: boolean) => {
    setSelectedCoworkIds((prev) =>
      isSelected ? [...prev, coworkId] : prev.filter((id) => id !== coworkId)
    );
  };

  const handleUpdateCity = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedFields: Omit<IUpdateTag, "id"> = {
      updatedBy: authUser!.id,
    };
    if (name !== tag?.name) {
      updatedFields.name = name;
    }
    if (selectedCoworkIds) {
      updatedFields.taggedCoworks = selectedCoworkIds;
    }

    mutation.mutate(
      { id: tagId, ...updatedFields },
      {
        onSuccess: () => {
          toast?.success("Tag modifiée avec succès !");
          onBack();
        },
        onError: (error) => {
          if (Array.isArray(error)) {
            toast?.error(error[0].message);
          }
        },
      }
    );
  };

  if (isFetching) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error in fetching city</div>;
  }

  return (
    <div className="mt-4">
      <div className="mb-4 flex flex-col gap-3">
        <Button
          className="w-fit hover:text-clr-primary"
          type="button"
          onClick={onBack}
        >
          <MaterialSymbolsArrowBackRounded width={28} height={28} />
        </Button>
        <h4>Mis à jour de la tag</h4>
      </div>
      <div>
        <Form onSubmit={handleUpdateCity}>
          <Input
            name="name"
            label="Nom"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            inputClass="w-1/2"
            required
          />
          <div className="mt-6">
            <p className="mb-2">Coworks ayant ce tag :</p>
            {taggedCoworks?.length === 0 && <p>Aucun cowork ayant ce tag</p>}
            {taggedCoworks?.map((cowork) => (
              <Input
                key={cowork.id}
                name="cowork"
                label={cowork.name}
                type="checkbox"
                value={cowork.id}
                checked={selectedCoworkIds.includes(cowork.id)}
                onChange={(e) =>
                  handleCoworkSelection(cowork.id, e.target.checked)
                }
              />
            ))}
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="btn-secondary"
            >
              Modifier
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
