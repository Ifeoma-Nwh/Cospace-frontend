import { useState } from "react";
import Button from "../common/Button";
import useToast from "../../contexts/toast/useToast";

import ICreateCity from "../../interfaces/City/createCity";
import { useCreateCity } from "../../hooks/useCity";
import { useGetCoworks } from "../../hooks/useCowork";

import Form from "../form/Form";
import Input from "../form/Input";

import useAuthContext from "../../contexts/auth/useAuthContext";

type Props = {
  onBack: () => void;
};

export default function CreateCity({ onBack }: Props) {
  const {
    data: coworks,
    isFetching: coworksFetching,
    isError: coworksError,
  } = useGetCoworks();

  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;

  const mutation = useCreateCity();
  const toast = useToast();

  const [name, setName] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [selectedCoworkIds, setSelectedCoworkIds] = useState<number[]>([]);

  const handleCoworkSelection = (coworkId: number, isSelected: boolean) => {
    setSelectedCoworkIds((prev) =>
      isSelected ? [...prev, coworkId] : prev.filter((id) => id !== coworkId)
    );
  };

  const handleUpdateCity = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedFields: Omit<ICreateCity, "id"> = {
      createdBy: authUser!.id,
      name,
      zipcode,
      coworks: selectedCoworkIds,
    };
    if (name !== "") {
      updatedFields.name = name;
    }
    if (zipcode !== "") {
      updatedFields.zipcode = zipcode;
    }
    if (selectedCoworkIds) {
      updatedFields.coworks = selectedCoworkIds;
    }

    mutation.mutate(
      { ...updatedFields },
      {
        onSuccess: () => {
          toast?.success("Ville créée avec succès !");
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
    <div>
      <div className="flex">
        <Button type="button" onClick={onBack}>
          Retour
        </Button>
        <h3>Modifier une ville</h3>
      </div>
      <div>
        <Form onSubmit={handleUpdateCity}>
          <Input
            name="name"
            label="Nom"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            name="zipcode"
            label="Code postal"
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
          />
          <hr />
          <div>
            <h4>Ajouter des coworks</h4>
            {coworksFetching && <div>Loading...</div>}
            {coworksError && <div>Error in fetching coworks</div>}
            {coworks?.map((cowork) => (
              <Input
                key={cowork.id}
                name="coworks"
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
          <Button type="submit" disabled={mutation.isPending}>
            Ajouter la ville
          </Button>
        </Form>
      </div>
    </div>
  );
}
