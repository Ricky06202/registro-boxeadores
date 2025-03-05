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
