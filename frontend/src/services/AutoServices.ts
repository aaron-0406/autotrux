import axios from "axios";
import { API } from "../config/config";
// import Expediente from "../interfaces/Expediente";
const api = `${API}/api/v0/autos`;

export const getAll = async (page: number, keyword: string) => {
  if (keyword.trim() !== "")
    return await axios.get(`${api}?keyword=${keyword}&page=${page}`);
  return await axios.get(`${api}?page=${page}`);
};
export const getAllVehiculos = async (vehiculo: string) => {
  return await axios.get(`${api}/all?vehiculo=${vehiculo}`);
};
export const getByCodigoAuto = async (id: string) => {
  return await axios.get(`${api}/${id}`);
};
export const getCount = async (keyword: string) => {
  if (keyword.trim() === "") return await axios.get(`${api}/count`);
  return await axios.get(`${api}/count?keyword=${keyword}`);
};
export const getResumen = async () => {
  return await axios.get(`${api}/resumen`);
};

export const createAuto = async (auto: any, progressBar: any) => {
  return await axios.post(`${api}`, auto, {
    onUploadProgress: (e) => {
      let progress = Math.round((e.loaded * 100.0) / e.total);
      if (progressBar != null) {
        progressBar.innerHTML = `${progress}%`;
        progressBar.style.width = `${progress}%`;
      }
    },
  });
};
export const editarAuto = async (
  id: string | undefined,
  auto: any,
  progressBar: any
) => {
  return await axios.put(`${api}/${id}`, auto, {
    onUploadProgress: (e) => {
      let progress = Math.round((e.loaded * 100.0) / e.total);
      if (progressBar != null) {
        progressBar.innerHTML = `${progress}%`;
        progressBar.style.width = `${progress}%`;
      }
    },
  });
};

export const eliminarAuto = async (id: string | undefined) => {
  return await axios.delete(`${api}/${id}`);
};
