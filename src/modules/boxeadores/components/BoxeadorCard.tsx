import { FC, useEffect, useState } from "react";
import no_image from "../assets/no_image.jpeg"
import Flag from "react-world-flags"
import { useImageUrl } from "@shared/hooks/useImageUrl";
interface IBoxeadorCardProps extends React.HTMLAttributes<HTMLButtonElement> {
    boxeadorId: number
    nombre: string
    categoria: string
    nacionalidad: string
    countryCode: string
    imagen?: any
};

export const BoxeadorCard: FC<IBoxeadorCardProps> = ({ boxeadorId, nombre, categoria, nacionalidad, countryCode, imagen, ...props }) => {
    const imgUrl = useImageUrl(imagen)
    
    return (
        <button {...props} className="flex items-center rounded-lg border border-transparent hover:bg-blue-50 p-2 hover:border hover:border-blue-500">
            <img className="h-20 w-16 rounded-lg object-cover" src={imgUrl ?? no_image.src} alt={`Imagen de ${nombre}`} />
            <div className="flex flex-col items-start ml-2">
                <h3 className="text-lg font-bold flex items-center">
                    <Flag className="h-5 w-5 mr-2" code={countryCode} title={nacionalidad} /> {nombre}</h3>
                <p className="text-sm text-gray-500">{categoria}</p>
            </div>
        </button>
    );
}
