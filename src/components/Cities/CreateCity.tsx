import { useState } from "react";
import Button from "../common/Button";
import useToast from "../../contexts/toast/useToast";

import ICreateCity from "../../interfaces/City/createCity";
import { useCreateCity } from "../../hooks/useCity";
import { useGetCoworks } from "../../hooks/useCowork";

import Form from "../form/Form";
import Input from "../form/Input";

import useAuthContext from "../../contexts/auth/useAuthContext";

import MaterialSymbolsArrowBackRounded from "~icons/material-symbols/arrow-back-rounded";

type Props = {
  onBack: () => void;
};

export default function CreateCity({ onBack }: Props) {
  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;

  const mutation = useCreateCity();
  const toast = useToast();

  const [name, setName] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [selectedCoworkIds, setSelectedCoworkIds] = useState<number[]>([]);

  const {
    data: coworks,
    isFetching: coworksFetching,
    isError: coworksError,
  } = useGetCoworks();

  const handleCoworkSelection = (coworkId: number, isSelected: boolean) => {
    setSelectedCoworkIds((prev) =>
      isSelected ? [...prev, coworkId] : prev.filter((id) => id !== coworkId)
    );
  };

  const handleCreateCity = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const createdFields: Omit<ICreateCity, "id"> = {
      createdBy: authUser!.id,
      name,
      zipcode,
      coworks: selectedCoworkIds,
    };
    if (name !== "") {
      createdFields.name = name;
    }
    if (zipcode !== "") {
      createdFields.zipcode = zipcode;
    }
    if (selectedCoworkIds) {
      createdFields.coworks = selectedCoworkIds;
    }

    mutation.mutate(
      { ...createdFields },
      {
        onSuccess: () => {
          toast?.success("Ville créée avec succès !");
          setName("");
          setZipcode("");
          setSelectedCoworkIds([]);
        },
        onError: (error) => {
          if (Array.isArray(error)) {
            toast?.error(error[0].message);
          }
        },
      }
    );
  };

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
        <h4>Nouvelle ville</h4>
      </div>
      <div>
        <Form onSubmit={handleCreateCity}>
          <Input
            name="name"
            label="Nom"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            name="zipcode"
            label="Code postal"
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            required
          />
          <div className="my-4">
            <h5 className="mb-3">Ajouter des coworks</h5>
            {coworksFetching && <div>Loading...</div>}
            {coworksError && <div>Error in fetching coworks</div>}
            <div className="flex flex-wrap gap-x-4">
              {coworks?.map((cowork) => (
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
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="btn-secondary"
            >
              Ajouter la ville
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
