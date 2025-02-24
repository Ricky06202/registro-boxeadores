"use client"
import { BoxeadorCard } from "@boxeadores/components/BoxeadorCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { BoxeadorGenericCard, BoxeadorGenericCardAPI } from "@shared/types/boxeadoresTypes";
import { parseBoxeadorGC } from "@shared/logic/boxeadoresConverter";
import { PlusIcon } from "lucide-react";
import { PanelFlotante } from "@shared/components/PanelFlotante";

export default function BoxeadoresPage() {
  const [boxeadores, setBoxeadores] = useState<BoxeadorGenericCard[]>([]);
  useEffect(() => {
    const getBoxeadores = async () => {
      const { data } = await axios.get("http://localhost:3000/api/boxeadores")
      setBoxeadores(data.map((box: BoxeadorGenericCardAPI) => parseBoxeadorGC(box)))
    }
    getBoxeadores()
  }, [])
  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold my-8">Boxeadores</h1>
        <div className="">
          <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
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
            nombre={boxeador.nombre}
            apellido={boxeador.apellido}
            categoria={boxeador.categoria}
            imagen=""
            nacionalidad={boxeador.nacionalidad.nacionalidad}
            countryCode={boxeador.nacionalidad.codigo}
          />
        ))}
      </div>
      {/* <PanelFlotante
        onClose={() => {}}
        onAccept={() => {}}
      >
        Hola
      </PanelFlotante> */}
    </div>
  );
}
