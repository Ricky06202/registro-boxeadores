"use client";
import { useEffect, useState } from "react";
import { getLugares } from "@/modules/boxeadores/services/fieldOptionsService";
import { OptionField } from "@/modules/shared/components/OptionField";
import { TextField } from "@/modules/shared/components/TextField";
import Tabs from "@/modules/shared/components/Tabs";
import { useTabsStateStore } from "@/modules/shared/store/tabsStateStore";

export default function FormLugar() {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const [lugar, setLugar] = useState(0);
  const [lugares, setLugares] = useState<{ label: string; id: number }[]>([]);

  useEffect(() => {
    getLugares().then((data) => setLugares(data));
  }, []);

  return (
    <form className="grid gap-2">
      <Tabs tabs={["Existente", "Nueva"]} currentTab={currentTab} setCurrentTab={setCurrentTab} />

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
