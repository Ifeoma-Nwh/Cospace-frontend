import { useState } from "react";
import Button from "../common/Button";
import useToast from "../../contexts/toast/useToast";
import useAuthContext from "../../contexts/auth/useAuthContext";

import ICreateCowork from "../../interfaces/Cowork/createCowork";
import { useCreateCowork } from "../../hooks/useCowork";
import { useGetTags } from "../../hooks/useTag";
import { useGetCities } from "../../hooks/useCity";

import Form from "../form/Form";
import Input from "../form/Input";

import MaterialSymbolsArrowBackRounded from "~icons/material-symbols/arrow-back-rounded";

type Props = {
  onBack: () => void;
};

export default function CreateCowork({ onBack }: Props) {
  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;
  const mutation = useCreateCowork();
  const toast = useToast();

  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [description, setDescription] = useState<string | undefined>();
  const [cityId, setCityId] = useState<number | null>(null);
  const [timetable, setTimetable] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [dailyPrice, setDailyPrice] = useState<number>(0);
  const [monthlyPrice, setMonthlyPrice] = useState<number>(0);
  const [thumbnailUrl, setThumbnailUrl] = useState<string | undefined>();
  const [websiteUrl, setWebsiteUrl] = useState<string | undefined>();
  const [selectedTagsIds, setSelectedTagsIds] = useState<number[]>([]);

  const {
    data: tags,
    isFetching: tagsFetching,
    isError: tagsError,
  } = useGetTags();
  const {
    data: cities,
    isFetching: citiesFetching,
    isError: citiesError,
  } = useGetCities();

  const handleCitySelection = (cityId: number) => {
    setCityId(cityId);
  };
  const handleTagsSelection = (tagId: number, isSelected: boolean) => {
    setSelectedTagsIds((prev) =>
      isSelected ? [...prev, tagId] : prev.filter((id) => id !== tagId)
    );
  };

  const handleUpdateCowork = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const createdFields: ICreateCowork = {
      createdBy: authUser!.id,
      name,
      address,
      description,
      timetable,
      phoneNumber,
      dailyPrice,
      monthlyPrice,
      thumbnailUrl,
      websiteUrl,
      cityId,
      coworkTags: selectedTagsIds,
    };
    if (name !== null) {
      createdFields.name = name;
    }
    if (address !== null) {
      createdFields.address = address;
    }
    if (description !== null) {
      createdFields.description = description;
    }
    if (cityId !== null) {
      createdFields.cityId = cityId;
    }
    if (timetable !== null) {
      createdFields.timetable = timetable;
    }
    if (phoneNumber !== null) {
      createdFields.phoneNumber = phoneNumber;
    }
    if (dailyPrice !== null) {
      createdFields.dailyPrice = dailyPrice;
    }
    if (monthlyPrice !== null) {
      createdFields.monthlyPrice = monthlyPrice;
    }
    if (thumbnailUrl !== null) {
      createdFields.thumbnailUrl = thumbnailUrl;
    }
    if (websiteUrl !== null) {
      createdFields.websiteUrl = websiteUrl;
    }
    if (selectedTagsIds) {
      createdFields.coworkTags = selectedTagsIds;
    }

    mutation.mutate(
      { ...createdFields },
      {
        onSuccess: () => {
          toast?.success("Cowork ajouté avec succès !");
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
        <h4>Nouveau Cowork</h4>
      </div>
      <div>
        <Form onSubmit={handleUpdateCowork}>
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
            name="address"
            label="Addresse"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            inputClass="w-1/2"
            required
          />
          <Input
            name="description"
            label="Description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            inputClass="w-1/2"
          />
          <Input
            name="timetable"
            label="Horaires"
            type="text"
            value={timetable}
            onChange={(e) => setTimetable(e.target.value)}
            inputClass="w-1/2"
            required
          />
          <Input
            name="phoneNumber"
            label="Numero de telephone"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            inputClass="w-1/2"
            required
          />
          <Input
            name="dailyPrice"
            label="Prix journalier"
            type="number"
            value={dailyPrice}
            onChange={(e) => setDailyPrice(+e.target.value)}
            inputClass="w-1/2"
            required
          />
          <Input
            name="monthlyPrice"
            label="Prix mensuel"
            type="number"
            value={monthlyPrice}
            onChange={(e) => setMonthlyPrice(+e.target.value)}
            inputClass="w-1/2"
            required
          />
          <Input
            name="thumbnailUrl"
            label="URL de l'image"
            type="text"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
            inputClass="w-1/2"
          />
          <Input
            name="websiteUrl"
            label="URL du site"
            type="text"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            inputClass="w-1/2"
          />
          <div className="mt-6">
            <p className="mb-2">Ville :</p>
            {citiesFetching && <div>Loading...</div>}
            {citiesError && <div>Error in fetching cities</div>}
            <div className="flex flex-wrap gap-x-4">
              {cities?.map((city) => (
                <Input
                  key={city.id}
                  name="city"
                  label={city.name}
                  type="radio"
                  value={city.id}
                  checked={city.id === cityId}
                  onChange={(e) => handleCitySelection(+e.target.value)}
                />
              ))}
            </div>
          </div>
          <hr />
          <div className="my-4">
            <h5 className="mb-3">Ajouter des tags</h5>
            {tagsFetching && <div>Loading...</div>}
            {tagsError && <div>Error in fetching coworks</div>}
            <div className="flex flex-wrap gap-x-4">
              {tags?.map((tag) => (
                <Input
                  key={tag.id}
                  name="tag"
                  label={tag.name}
                  type="checkbox"
                  value={tag.id}
                  checked={selectedTagsIds.includes(tag.id)}
                  onChange={(e) =>
                    handleTagsSelection(tag.id, e.target.checked)
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
              Ajouter le cowork
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
