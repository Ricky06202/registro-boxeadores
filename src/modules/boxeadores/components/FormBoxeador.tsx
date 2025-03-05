"use client"
import { ImgField } from "@shared/components/ImgField";
import { OptionField } from "@shared/components/OptionField";
import { PanelFlotante } from "@shared/components/PanelFlotante";
import { TextField } from "@shared/components/TextField";
import { useFormStateStore } from "@shared/store/formStateStore";
import { useBoxeadorStore } from "@boxeadores/store/boxeadorStore";
import { useEffect, useState } from "react";
import { getGeneros, getCategorias, getNacionalidades } from "@boxeadores/services/fieldOptionsService";

export interface FormBoxeadorProps {
  onAccept: () => void;
  title?: string;
  acceptText?: string;
}


export const FormBoxeador: React.FC<FormBoxeadorProps> = ({ onAccept, title, acceptText }) => {
  const visible = useFormStateStore((state) => state.createPanel);
  const hideCreate = useFormStateStore((state) => state.hideCreate);
  const nombre = useBoxeadorStore((state) => state.nombre);
  const alias = useBoxeadorStore((state) => state.alias);
  const categoria = useBoxeadorStore((state) => state.categoria);
  const genero = useBoxeadorStore((state) => state.genero);
  const nacionalidad = useBoxeadorStore((state) => state.nacionalidad);
  const imagen = useBoxeadorStore((state) => state.imagen);
  const resetBoxeador = useBoxeadorStore((state) => state.resetBoxeador);
  const setNombre = useBoxeadorStore((state) => state.setNombre);
  const setAlias = useBoxeadorStore((state) => state.setAlias);
  const setCategoria = useBoxeadorStore((state) => state.setCategoria);
  const setGenero = useBoxeadorStore((state) => state.setGenero);
  const setNacionalidad = useBoxeadorStore((state) => state.setNacionalidad);
  const setImagen = useBoxeadorStore((state) => state.setImagen);

  const [generos, setGeneros] = useState<{ label: string; id: number }[]>([]);
  const [categorias, setCategorias] = useState<{ label: string; id: number }[]>([]);
  const [nacionalidades, setNacionalidades] = useState<{ label: string; id: number; countryCode?: string }[]>([]);

  useEffect(() => {
    getGeneros().then(data => setGeneros(data));
    getCategorias().then(data => setCategorias(data));
    getNacionalidades().then(data => setNacionalidades(data));
  }, []);

  const handleClose = () => {
    resetBoxeador();
    hideCreate();
  };

  if (!visible) return null;

  return (
    <PanelFlotante
      onClose={handleClose}
      onAccept={onAccept}
      title={title}
      acceptText={acceptText}
    >
      <form className="grid grid-cols-2 gap-4">
        <TextField
          label="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          id="nombre"
        />

        <TextField
          label="Alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          id="alias"
        />

        <OptionField
          label="Genero"
          selectedOption={genero.toString()}
          onChange={(e) => setGenero(Number(e.target.value))}
          id="genero"
          options={generos}
        />

        <OptionField
          label="Nacionalidad"
          selectedOption={nacionalidad.toString()}
          onChange={(e) => setNacionalidad(Number(e.target.value))}
          id="nacionalidad"
          options={nacionalidades}
        />

        <OptionField
          label="Categoria"
          selectedOption={categoria.toString()}
          onChange={(e) => setCategoria(Number(e.target.value))}
          id="categoria"
          options={categorias}
        />

        <ImgField
          label="Imagen"
          id="imagen"
          value={imagen}
          onChange={(file) => setImagen(file)}
        />
        
      </form>
    </PanelFlotante>
  );
};
