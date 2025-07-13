import { parseBoxeadorGC } from '@/modules/shared/logic/boxeadoresConverter'
import axios from 'axios'

export const getBoxeadores = async () => {
  return axios
    .get(`/api/boxeadores`)
    .then(({ data }) => data.map((box: any) => parseBoxeadorGC(box)))
}

export const createBoxeador = async (boxeador: any) => {
  return axios.post(`/api/boxeadores`, boxeador)
}

export const getBoxeadorById = async (id: number) => {
  return axios.get(`/api/boxeadores/${id}`)
}

export const updateBoxeador = async (id: number, boxeador: any) => {
  return axios.put(`/api/boxeadores/${id}`, boxeador)
}

export const deleteBoxeador = async (id: number) => {
  return axios.delete(`/api/boxeadores/${id}`)
}
