"use client";
import { useEffect, useState } from "react";
import { getLugares } from "@boxeadores/services/fieldOptionsService";
import { OptionField } from "@shared/components/OptionField";
import { TextField } from "@shared/components/TextField";
import Tabs from "@shared/components/Tabs";
import { useFormStateStore } from "@shared/store/formStateStore";

export default function FormLugar() {
  const currentTab = useFormStateStore((state) => state.currentTab);

  const [lugar, setLugar] = useState(0);
  const [lugares, setLugares] = useState<{ label: string; id: number }[]>([]);

  useEffect(() => {
    getLugares().then((data) => setLugares(data));
  }, []);

  return (
    <form className="grid gap-2">
      <Tabs tabs={["Existente", "Nueva"]} />

      {currentTab === 0 && (
        <OptionField
          label="Lugar"
          selectedOption={lugar.toString()}
          onChange={(e) => setLugar(Number(e.target.value))}
          id="lugar"
          options={lugares}
        />
      )}
      {currentTab === 1 && (
        <>
          <TextField label="Ciudad" id="nueva_lugar_ciudad" />
          <TextField label="Provincia" id="nueva_lugar_provincia" />
          <TextField label="País" id="nueva_lugar_pais" />
        </>
      )}
    </form>
  );
}
