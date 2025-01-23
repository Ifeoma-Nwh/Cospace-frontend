import { useState } from "react";
import Button from "../common/Button";
import useToast from "../../contexts/toast/useToast";

import ICreateTag from "../../interfaces/Tag/createTag";
import { useCreateTag } from "../../hooks/useTag";

import Form from "../form/Form";
import Input from "../form/Input";

import useAuthContext from "../../contexts/auth/useAuthContext";

import MaterialSymbolsArrowBackRounded from "~icons/material-symbols/arrow-back-rounded";

type Props = {
  onBack: () => void;
};

export default function CreateTag({ onBack }: Props) {
  const authContext = useAuthContext();
  const authUser = authContext?.state.authUser;

  const mutation = useCreateTag();
  const toast = useToast();

  const [name, setName] = useState<string>("");

  const handleCreateTag = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const createdFields: ICreateTag = {
      createdBy: authUser!.id,
      name,
    };
    if (name !== "") {
      createdFields.name = name;
    }

    mutation.mutate(
      { ...createdFields },
      {
        onSuccess: () => {
          toast?.success("Tag créée avec succès !");
          setName("");
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
        <h4>Nouvelle tag</h4>
      </div>
      <div>
        <Form onSubmit={handleCreateTag}>
          <Input
            name="name"
            label="Nom"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={mutation.isPending}
              className="btn-secondary"
            >
              Ajouter la tag
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
