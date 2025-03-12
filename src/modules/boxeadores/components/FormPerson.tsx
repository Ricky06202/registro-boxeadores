import { TextField } from "@shared/components/TextField";
import { ImgField } from "@shared/components/ImgField";
import { useState } from "react";
import { DateField } from "@shared/components/DateField";

export default function FormPerson() {
  const [person, setPerson] = useState({
    name: "",
    alias: "",
    birthname: "",
    image: new File([""], ""),
  });
  return (
    <form className="grid gap-2">
      <TextField
        label="Nombre"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
        id="nombre"
      />

      <TextField
        label="Alias"
        value={person.alias}
        onChange={(e) => setPerson({ ...person, alias: e.target.value })}
        id="alias"
      />

      <TextField
        label="Nombre de nacimiento"
        value={person.birthname}
        onChange={(e) => setPerson({ ...person, birthname: e.target.value })}
        id="nombre_de_nacimiento"
      />

      <ImgField
        label="Imagen"
        id="imagen"
        onChange={(file) => setPerson({ ...person, image: file })}
      />
    </form>
  );
}

{
  /* <OptionField
          label="Genero"
          selectedOption={genero.toString()}
          onChange={(e) => setGenero(Number(e.target.value))}
          id="genero"
          options={generos}
        />

        

        <OptionField
          label="Categoria"
          selectedOption={categoria.toString()}
          onChange={(e) => setCategoria(Number(e.target.value))}
          id="categoria"
          options={categorias}
        /> */
}
