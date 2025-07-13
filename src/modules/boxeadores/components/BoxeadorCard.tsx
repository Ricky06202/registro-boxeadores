import { FC } from "react";
import no_image from "../assets/no_image.jpeg";
import Flag from "react-world-flags";
import { useImageUrl } from "@/modules/shared/hooks/useImageUrl";
import { Button } from "@mui/material";
interface IBoxeadorCardProps {
  boxeadorId: number;
  nombre: string;
  categoria: string;
  nacionalidad: string;
  countryCode: string;
  imagen?: any;
  onClickVerDetalles: () => void;
  onClickEditar: () => void;
  onClickEliminar: () => void;
}

export const BoxeadorCard: FC<IBoxeadorCardProps> = ({
  boxeadorId,
  nombre,
  categoria,
  nacionalidad,
  countryCode,
  imagen,
  onClickVerDetalles,
  onClickEditar,
  onClickEliminar,
}) => {
  const imgUrl = useImageUrl(imagen);

  return (
    <div
      className="cursor-pointer flex items-center rounded-lg border border-transparent hover:bg-blue-50 p-2 hover:border hover:border-blue-500 relative overflow-hidden group w-90"
    >
      <img
        className="h-20 w-16 rounded-lg object-cover cursor-pointer hover:scale-110 transition-all duration-200"
        src={imgUrl ?? no_image.src}
        alt={`Imagen de ${nombre}`}
        onClick={onClickVerDetalles}
      />
      <div className="flex flex-col items-start ml-2">
        <h3 className="text-lg font-bold flex items-center cursor-pointer hover:text-blue-500 hover:underline" onClick={onClickVerDetalles}>
          <Flag
            className="h-5 w-5 mr-2"
            code={countryCode}
            title={nacionalidad}
          />{" "}
          {nombre}
        </h3>
        <p className="text-sm text-gray-500">{categoria}</p>
      </div>
      <div className="absolute bg-black/20 opacity-0 group-hover:opacity-100 top-0 right-0 left-0 bottom-0 flex items-center justify-evenly">
        <Button variant="contained" color="primary" onClick={onClickEditar}>
          Editar
        </Button>
        <Button variant="contained" color="info" onClick={onClickVerDetalles}>
          Ver Detalles
        </Button>
        <Button variant="contained" color="error" onClick={onClickEliminar}>
          Eliminar
        </Button>
      </div>
    </div>
  );
};
