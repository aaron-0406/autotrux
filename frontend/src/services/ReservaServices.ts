import axios from "axios";
import { API } from "../config/config";
// import Expediente from "../interfaces/Expediente";
const api = `${API}/api/v0/reserva`;

export const getAll = async (page: number) => {
  return await axios.get(`${api}?page=${page}`);
};

export const getCount = async () => {
  return await axios.get(`${api}/count`);
};

export const getAllUser = async (page: number, idUser: number | undefined) => {
  return await axios.get(`${api}?page=${page}&id=${idUser}`);
};

export const getCountUser = async (idUser: number | undefined) => {
  return await axios.get(`${api}/count?id=${idUser}`);
};

export const eliminarReserva = async (id: string | undefined) => {
  return await axios.delete(`${api}/${id}`);
};

export const arReserva = async (
  id: string | undefined,
  estado: string | undefined
) => {
  return await axios.get(`${api}/ar?id=${id}&estado=${estado}`);
};
