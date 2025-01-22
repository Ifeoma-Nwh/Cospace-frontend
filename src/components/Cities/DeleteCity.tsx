import useToast from "../../contexts/toast/useToast";
import { useDeleteCity, useGetCity } from "../../hooks/useCity";
import { createPortal } from "react-dom";
import ModalOverlay from "../modal/ModalOverlay";
import Button from "../common/Button";

type Props = {
  cityId: number;
  onBack: () => void;
};
export default function DeleteCity({ cityId, onBack }: Props) {
  const { data: city } = useGetCity(cityId);
  const mutation = useDeleteCity();
  const toast = useToast();

  const closeModal = () => {
    onBack();
  };

  const handleDeleteCity = () => {
    mutation.mutate(cityId, {
      onSuccess: () => {
        toast?.success("Ville supprimée avec succès !");
        onBack();
      },
      onError: (error) => {
        if (Array.isArray(error)) {
          toast?.error(error[0].message);
        }
      },
    });
  };

  return (
    <>
      {cityId &&
        createPortal(
          <ModalOverlay onClose={closeModal}>
            <div className="min-h-full px-6 py-3 lg:px-8">
              <h3 className="text-center">Confirmation de suppression</h3>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <p className="text-center">
                  Etes-vous certain de vouloir supprimer la ville de{" "}
                  {city?.name} ?
                </p>
                <div className="mt-5 flex justify-between">
                  <Button
                    type="button"
                    className="btn-alert"
                    onClick={closeModal}
                  >
                    Annuler
                  </Button>
                  <Button
                    type="submit"
                    className="btn-success"
                    disabled={mutation.isPending}
                    onClick={handleDeleteCity}
                  >
                    Supprimer
                  </Button>
                </div>
              </div>
            </div>
          </ModalOverlay>,
          document.body
        )}
    </>
  );
}
