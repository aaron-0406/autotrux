const controller_reserva = {};
const pool = require("../database");

//get("/") -> total de reservas
controller_reserva.getReservas = async (req, res) => {
  try {
    if (req.query.page && req.query.id) {
      const data = await pool.query(
        `SELECT * FROM reservas WHERE usuario_id_usuario=${req.query.id} ORDER BY id_reservas ASC`
      );
      const cantidadDatos = 10;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      return res.json({
        success: "Datos obtenidos",
        autos: data.splice(pagina, cantidadDatos),
      });
    }

    if (req.query.page) {
      const data = await pool.query(
        `SELECT r.id_reservas AS id_reservas,
        u.nombres AS usuario,
        r.usuario_id_usuario AS usuario_id_usuario,
        r.vehiculo_id_vehiculo AS vehiculo_id_vehiculo,
        r.fecha_inicio AS fecha_inicio,
        r.fecha_fin AS fecha_fin,
        r.estado_reserva AS estado_reserva,
        r.costo_reserva AS costo_reserva FROM reservas r INNER JOIN usuario u 
        ON (r.usuario_id_usuario = u.id_usuario) ORDER BY id_reservas ASC`
      );
      const cantidadDatos = 10;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      return res.json({
        success: "Datos obtenidos",
        autos: data.splice(pagina, cantidadDatos),
      });
    }

    if (req.query.id) {
      const datos = await pool.query(
        `SELECT * FROM reservas WHERE usuario_id_usuario=${req.query.id}`
      );
      return res.json({ success: "Datos obtenidos", autos: datos });
    }

    const datos = await pool.query(`SELECT r.id_reservas AS id_reservas,
    u.nombres AS usuario,
    r.usuario_id_usuario AS usuario_id_usuario,
    r.vehiculo_id_vehiculo AS vehiculo_id_vehiculo,
    r.fecha_inicio AS fecha_inicio,
    r.fecha_fin AS fecha_fin,
    r.estado_reserva AS estado_reserva,
    r.costo_reserva AS costo_reserva FROM reservas r INNER JOIN usuario u 
    ON (r.usuario_id_usuario = u.id_usuario)`);
    return res.json({ success: "Datos obtenidos", autos: datos });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error" });
  }
};

//get("/count") -> total de reservas
controller_reserva.getCount = async (req, res) => {
  try {
    if (req.query.id) {
      const rows = await pool.query(
        `SELECT COUNT(*) FROM reservas WHERE usuario_id_usuario=${req.query.id}`
      );
      if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);
      return res.json(0);
    }

    const rows = await pool.query("SELECT COUNT(*) FROM reservas");
    if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);
    return res.json(0);
  } catch (error) {
    console.log(error);
    return res.json(0);
  }
};

//post("/")
controller_reserva.sendReserva = async (req, res) => {
  try {
    const result = await pool.query("INSERT INTO reservas SET ? ", [req.body]);
    if (result.affectedRows === 1)
      return res.json({ success: "Solicitud de reserva enviada" });
    return res.json({ error: "Ocurrio un error" });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrio un error" });
  }
};

//delete("/:id")
controller_reserva.deleteReserva = async (req, res) => {
  try {
    const rows = await pool.query(
      "DELETE FROM reservas WHERE id_reservas = ?",
      [req.params.id]
    );
    //affectedRows => filas afectadas
    if (rows.affectedRows === 1)
      return res.json({ success: "Reserva eliminada" }); //Se logró eliminar
    return res.json({ error: "Ocurrió un error" });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error" });
  }
};

//get("/ar")
controller_reserva.arReserva = async (req, res) => {
  try {
    const rows = await pool.query(
      "SELECT * FROM reservas WHERE id_reservas = ?",
      [req.query.id]
    );
    if (req.query.estado === "ACTIVA") {
      rows[0].estado_reserva = "ACTIVA";
      const data = await pool.query(
        "UPDATE reservas set ? WHERE id_reservas = ?",
        [rows[0], req.query.id]
      );
      //affectedRows => filas afectadas
      if (data.affectedRows === 1)
        return res.json({
          success: `Reserva ${rows[0].id_reservas} ACTIVA`,
        }); //Se logró actualizar
    }
    if (req.query.estado === "RECHAZADA") {
      rows[0].estado_reserva = "RECHAZADA";
      const data = await pool.query(
        "UPDATE reservas set ? WHERE id_reservas = ?",
        [rows[0], req.query.id]
      );
      //affectedRows => filas afectadas
      if (data.affectedRows === 1)
        return res.json({
          success: `Reserva ${rows[0].id_reservas} RECHAZADA`,
        }); //Se logró actualizar
    }
    if (req.query.estado === "FINALIZADA") {
      rows[0].estado_reserva = "FINALIZADA";
      const data = await pool.query(
        "UPDATE reservas set ? WHERE id_reservas = ?",
        [rows[0], req.query.id]
      );
      //affectedRows => filas afectadas
      if (data.affectedRows === 1)
        return res.json({
          success: `Reserva ${rows[0].id_reservas} FINALIZADA`,
        }); //Se logró actualizar
    }
    if (req.query.estado === "RETRASADA") {
      rows[0].estado_reserva = "RETRASADA";
      const data = await pool.query(
        "UPDATE reservas set ? WHERE id_reservas = ?",
        [rows[0], req.query.id]
      );
      //affectedRows => filas afectadas
      if (data.affectedRows === 1)
        return res.json({
          success: `Reserva ${rows[0].id_reservas} RETRASADA`,
        }); //Se logró actualizar
    }
    return res.json({ error: "Ocurrió un error" });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error" });
  }
};

module.exports = controller_reserva;
