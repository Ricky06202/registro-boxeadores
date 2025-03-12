"use client";
import { useEffect, useState } from "react";
import { getNacionalidades } from "@boxeadores/services/fieldOptionsService";
import { OptionField } from "@shared/components/OptionField";
import { TextField } from "@shared/components/TextField";
import Tabs from "@shared/components/Tabs";
import { useFormStateStore } from "@shared/store/formStateStore";

export default function FormNationality() {
  const currentTab = useFormStateStore((state) => state.currentTab);

  const [person, setPerson] = useState({
    name: "",
    alias: "",
    birthname: "",
    image: new File([""], ""),
  });

  const [nacionalidad, setNacionalidad] = useState(0);
  const [nacionalidades, setNacionalidades] = useState<
    { label: string; id: number; countryCode?: string }[]
  >([]);

  useEffect(() => {
    getNacionalidades().then((data) => setNacionalidades(data));
  }, []);

  return (
    <form className="grid gap-2">
      <Tabs tabs={["Existente", "Nueva"]} />

      {currentTab === 0 && (
        <OptionField
          label="Nacionalidad"
          selectedOption={nacionalidad.toString()}
          onChange={(e) => setNacionalidad(Number(e.target.value))}
          id="nacionalidad"
          options={nacionalidades}
        />
      )}
      {currentTab === 1 && (
        <>
          <TextField label="Nacionalidad" id="nueva_nacionalidad" />
          <TextField label="Código de país" id="nueva_nacionalidad_codigo" />
        </>
      )}
    </form>
  );
}
