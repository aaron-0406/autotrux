import axios from "axios";
import { API } from "../config/config";
import Contactanos from "../interfaces/Contactanos";

const api = `${API}/api/v0/contacto`;

export const sendMessage = async (dataContactanos: Contactanos) => {
    return await axios.post(`${api}`, dataContactanos);
}