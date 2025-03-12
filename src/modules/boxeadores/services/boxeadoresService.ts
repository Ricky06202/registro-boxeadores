import { Prisma } from "@prisma/client";
import { parseBoxeadorGC } from "@shared/logic/boxeadoresConverter";
import axios from "axios";

export const getBoxeadores = async () => {
  return axios
    .get(`${process.env.NEXT_PUBLIC_API_URL}/api/boxeadores`)
    .then(({ data }) => data.map((box: any) => parseBoxeadorGC(box)));
};

export const createBoxeador = async (boxeador: Prisma.boxeadorCreateInput) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/boxeadores`,
    boxeador
  );
};

export const updateBoxeador = async (
  id: number,
  boxeador: Prisma.boxeadorCreateInput
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
