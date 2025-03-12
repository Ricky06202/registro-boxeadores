"use client";
import { PanelFlotante } from "@shared/components/PanelFlotante";
import { useFormStateStore } from "@shared/store/formStateStore";
import { useBoxeadorStore } from "@boxeadores/store/boxeadorStore";
import FormPerson from "./FormPerson";
import FormNationality from "./FormNationality";
import FormLugar from "./FormLugar";

export interface NewBoxeadorProps {
  onAccept: () => void;
  title?: string;
  acceptText?: string;
}

export const NewBoxeadorPanel: React.FC<NewBoxeadorProps> = ({
  onAccept,
  title,
  acceptText,
}) => {
  const visible = useFormStateStore((state) => state.createPanel);
  const hideCreate = useFormStateStore((state) => state.hideCreate);
  const resetBoxeador = useBoxeadorStore((state) => state.resetBoxeador);
  const setBoxeador = useBoxeadorStore((state) => state.setBoxeador);
  const boxeador = useBoxeadorStore((state) => state.boxeador);

  const currenPage = useFormStateStore((state) => state.currentPage);
  const setCurrentPage = useFormStateStore((state) => state.setCurrentPage);

  const handleClose = () => {
    resetBoxeador();
    hideCreate();
    setCurrentPage(1);
  };

  const getSubtitle = () => {
    switch (currenPage) {
      case 1:
        return "Datos personales";
      case 2:
        return "Nacionalidad";
      case 3:
        return "Lugar de nacimiento";
      case 4:
        return "Lugar de residencia";
      default:
        return "";
    }
  };

  if (!visible) return null;

  return (
    <PanelFlotante
      onClose={handleClose}
      onAccept={onAccept}
      title={title}
      subtitle={getSubtitle()}
      acceptText={acceptText}
      totalPages={4}
    >
      {currenPage === 1 && <FormPerson />}
      {currenPage === 2 && <FormNationality />}
      {currenPage === 3 && <FormLugar />}
      {currenPage === 4 && <FormLugar />}
    </PanelFlotante>
  );
};
