"use client"
import { BoxeadorCard } from "@boxeadores/components/BoxeadorCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { BoxeadorGenericCard } from "@shared/types/boxeadoresTypes";
import { parseBoxeadorGC } from "@shared/logic/boxeadoresConverter";
import { PlusIcon } from "lucide-react";
import { FormBoxeador } from "@boxeadores/components/FormBoxeador";
import { useFormStateStore } from "@shared/store/formStateStore";

export default function BoxeadoresPage() {
  const [boxeadores, setBoxeadores] = useState<BoxeadorGenericCard[]>([]);
  const showCreate = useFormStateStore((state) => state.showCreate);
  useEffect(() => {
    
    getBoxeadores()
  }, [])

  

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold my-8">Boxeadores</h1>
        <div className="">
          <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-sm" onClick={showCreate}>
            <PlusIcon className="h-5 w-5 mr-2" />
            Nuevo Boxeador
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {boxeadores.map((boxeador) => (
          <BoxeadorCard
            key={boxeador.id}
            boxeadorId={boxeador.id}
            nombre={boxeador.persona.nombre}
            categoria={boxeador.categoria}
            imagen={boxeador.persona.imagen}
            nacionalidad={boxeador.persona.nacionalidad.nacionalidad}
            countryCode={boxeador.persona.nacionalidad.codigo}
          />
        ))}
      </div>
      {/* <PanelFlotante
        onClose={() => {}}
        onAccept={() => {}}
      >
        Hola
      </PanelFlotante> */}
      <FormBoxeador acceptText="Crear Boxeador" title="Nuevo Boxeador" onAccept={() => {}}/>
    </div>
  );
}
