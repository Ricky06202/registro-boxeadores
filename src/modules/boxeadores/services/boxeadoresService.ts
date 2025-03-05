import { parseBoxeadorGC } from "@shared/logic/boxeadoresConverter";
import axios from "axios";

const getBoxeadores = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/boxeadores`
  );
  return data.map((box: any) => parseBoxeadorGC(box));
};

// todo crear el servicio para crear boxeadores
const createBoxeador = async () => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/boxeadores`,
    {}
  );
};

// todo crear el servicio para actualizar boxeadores

// todo crear el servicio para eliminar boxeadores

// todo crear en shared los servicios para Person crear editar eliminar
