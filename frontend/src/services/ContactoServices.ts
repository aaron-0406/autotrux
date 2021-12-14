import axios from "axios";
import { API } from "../config/config";
import { ContactoModel } from "../interfaces/Contactanos";

const api = `${API}/api/v0/contacto`;

export const getAll = async (page: number) => {
  return await axios.get(`${api}?page=${page}`);
};

export const getCount = async () => {
  return await axios.get(`${api}/count`);
};

export const sendMessage = async (dataContactanos: ContactoModel) => {
  return await axios.post(`${api}`, dataContactanos);
};

export const eliminarContacto = async (id: string | undefined) => {
  return await axios.delete(`${api}/${id}`);
};
