export interface Reserva {
  id_reservas?: number;
  usuario?: string;
  usuario_id_usuario: number;
  vehiculo_id_vehiculo: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  estado_reserva: string;
  costo_reserva: number;
}
