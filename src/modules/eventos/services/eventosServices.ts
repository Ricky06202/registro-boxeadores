import axios from "axios"
import { parseEvento } from "@/modules/shared/logic/parseEvento"

export const getEventos = async () => {
  return axios.get(`/api/eventos`).then(({ data }) => data.map((evento: any) => parseEvento(evento)))
}