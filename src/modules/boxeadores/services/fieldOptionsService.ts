import { formatearUbicacion } from "@shared/logic/formatLocation";
import axios from "axios";

export const getGeneros = async () => {
  const { data } = await axios.get<any[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/generos`
  );
  return data.map(({ id, genero }) => ({ label: genero, id }));
};

export const getCategorias = async () => {
  const { data } = await axios.get<any[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categorias`
  );
  return data.map(({ id, categoria }) => ({ label: categoria, id }));
};

export const getNacionalidades = async () => {
  const { data } = await axios.get<any[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/nacionalidades`
  );
  return data.map(({ id, nacionalidad, countryCode }) => ({
    label: nacionalidad,
    id,
    countryCode,
  }));
};

export const getLugares = async () => {
  const { data } = await axios.get<any[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/lugares`
  );
  return data.map(({ id, pais, provincia, ciudad }) => ({
    label: formatearUbicacion({ pais, provincia, ciudad }),
    id,
  }));
};

export const getPersons = async () => {
  const { data } = await axios.get<any[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/persons`
  );
  return data.map(({ id, nombre }) => ({ label: nombre, id }));
};

export const getRoles = async () => {
  const { data } = await axios.get<any[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/roles`
  );
  return data.map(({ id, role }) => ({ label: role, id }));
};

export const getGuards = async () => {
  const { data } = await axios.get<any[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/guards`
  );
  return data.map(({ id, guardia }) => ({ label: guardia, id }));
};

export const getManagers = async () => {
  const { data } = await axios.get<any[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/managers`
  );
  return data.map(({ id, manager }) => ({ label: manager, id }));
};

export const getPromoters = async () => {
  const { data } = await axios.get<any[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/promoters`
  );
  return data.map(({ id, promotor }) => ({ label: promotor, id }));
};

export const getTrainers = async () => {
  const { data } = await axios.get<any[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/trainers`
  );
  return data.map(({ id, trainer }) => ({ label: trainer, id }));
};
