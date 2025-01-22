import { useEffect, useState } from "react";
import Button from "../common/Button";
import useToast from "../../contexts/toast/useToast";

import IUpdateCity from "../../interfaces/City/updateCity";
import { useUpdateCity } from "../../hooks/useCity";
import { useGetCity } from "../../hooks/useCity";
import { useGetCoworks } from "../../hooks/useCowork";

import Form from "../form/Form";
import Input from "../form/Input";

import useAuthContext from "../../contexts/auth/useAuthContext";

import MaterialSymbolsArrowBackRounded from "~icons/material-symbols/arrow-back-rounded";

type Props = {
  cityId: number;
  onBack: () => void;
};

export default function EditCity({ cityId, onBack }: Props) {
  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;
  const mutation = useUpdateCity();
  const toast = useToast();

  const [name, setName] = useState<string>("");
  const [zipcode, setZipcode] = useState<string>("");
  const [selectedCoworkIds, setSelectedCoworkIds] = useState<number[]>([]);

  const { data: city, isFetching, isError } = useGetCity(cityId);
  console.log("🚀 ~ EditCity ~ city:", city);
  const {
    data: coworks,
    isFetching: coworksFetching,
    isError: coworksError,
  } = useGetCoworks();

  const cityCoworks = city?.coworksByCity;
  const coworksWithoutCity = coworks?.filter(
    (cowork) => !cityCoworks?.some((citycowork) => citycowork.id === cowork.id)
  );

  useEffect(() => {
    if (city) {
      setName(city.name);
      setZipcode(city.zipcode);
      setSelectedCoworkIds(
        city.coworksByCity?.map((cowork) => cowork.id) || []
      );
    }
  }, [city]);

  const handleCoworkSelection = (coworkId: number, isSelected: boolean) => {
    setSelectedCoworkIds((prev) =>
      isSelected ? [...prev, coworkId] : prev.filter((id) => id !== coworkId)
    );
  };

  const handleUpdateCity = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedFields: Omit<IUpdateCity, "id"> = {
      updatedBy: authUser!.id,
    };
    if (name !== city?.name) {
      updatedFields.name = name;
    }
    if (zipcode !== city?.zipcode) {
      updatedFields.zipcode = zipcode;
    }
    if (selectedCoworkIds) {
      updatedFields.coworks = selectedCoworkIds;
    }

    mutation.mutate(
      { id: cityId, ...updatedFields },
      {
        onSuccess: () => {
          toast?.success("Ville modifiée avec succès !");
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
        <h4>Mis à jour de la ville</h4>
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
          <Input
            name="zipcode"
            label="Code postal"
            type="text"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            inputClass="w-1/2"
            required
          />
          <div className="mt-6">
            <p className="mb-2">Coworks actuellement dans la ville :</p>
            {cityCoworks?.map((cowork) => (
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
          <hr />
          <div className="my-4">
            <h5 className="mb-3">Ajouter des coworks à la ville :</h5>
            {coworksFetching && <div>Loading...</div>}
            {coworksError && <div>Error in fetching coworks</div>}
            <div className="flex flex-wrap gap-x-4">
              {coworksWithoutCity?.map((cowork) => (
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
              Modifier
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
