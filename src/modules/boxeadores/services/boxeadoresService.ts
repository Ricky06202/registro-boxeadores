import { parseBoxeadorGC } from "@/modules/shared/logic/boxeadoresConverter";
import axios from "axios";

export const getBoxeadores = async () => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/api/boxeadores`)
    .then(({ data }) => data.map((box: any) => parseBoxeadorGC(box)));
};

export const createBoxeador = async (boxeador: any) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/boxeadores`,
    boxeador
  );
};

export const updateBoxeador = async (
  id: number,
  boxeador: any
) => {
  return axios.put(
    `${process.env.NEXT_PUBLIC_API_URL}/api/boxeadores/${id}`,
    boxeador
  );
};

export const deleteBoxeador = async (id: number) => {
  return axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/api/boxeadores/${id}`
  );
};
