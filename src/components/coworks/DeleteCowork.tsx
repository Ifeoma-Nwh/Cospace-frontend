import { createPortal } from "react-dom";

import useToast from "../../contexts/toast/useToast";
import { useDeleteCowork, useGetCowork } from "../../hooks/useCowork";

import ModalOverlay from "../modal/ModalOverlay";
import Button from "../common/Button";

type Props = {
  coworkId: number;
  onBack: () => void;
};
export default function DeleteTag({ coworkId, onBack }: Props) {
  const { data: cowork } = useGetCowork(coworkId);
  const mutation = useDeleteCowork();
  const toast = useToast();

  const closeModal = () => {
    onBack();
  };

  const handleDeleteCowork = () => {
    mutation.mutate(coworkId, {
      onSuccess: () => {
        toast?.success("Cowork supprimé avec succès !");
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
      {coworkId &&
        createPortal(
          <ModalOverlay onClose={closeModal}>
            <div className="min-h-full px-6 py-3 lg:px-8">
              <h3 className="text-center">Confirmation de suppression</h3>
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <p className="text-center">
                  Etes-vous certain de vouloir supprimer ce Cowork :{" "}
                  {cowork?.name} ?
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
                    onClick={handleDeleteCowork}
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
