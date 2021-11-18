const controller_auto = {};
const pool = require("../database");

//get("/")
controller_auto.getAutos = async (req, res) => {
  try {
    if (req.query.keyword && req.query.page) {
      const data = await pool.query(
        `SELECT * FROM vehiculo WHERE (placa_vehiculo LIKE '%${req.query.keyword}%') ORDER BY id_vehiculo DESC`
      );
      const cantidadDatos = 12;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      return res.json({
        success: "Datos obtenidos",
        autos: data.splice(pagina, cantidadDatos),
      });
    }

    if (req.query.keyword) {
      const data = await pool.query(
        `SELECT * FROM vehiculo WHERE (placa_vehiculo LIKE '%${req.query.keyword}%') ORDER BY id_vehiculo DESC`
      );
      return res.json({ success: "Datos obtenidos", autos: data });
    }

    if (req.query.page) {
      const data = await pool.query(
        `SELECT * FROM vehiculo ORDER BY id_vehiculo DESC`
      );
      const cantidadDatos = 12;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      return res.json({
        success: "Datos obtenidos",
        autos: data.splice(pagina, cantidadDatos),
      });
    }
    const datos = await pool.query(`SELECT * FROM vehiculo`);
    return res.json({ success: "Datos obtenidos", autos: datos });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error" });
  }
};

//get("/all")
controller_auto.getAll = async (req, res) => {
  try {
    const datos = await pool.query(
      `SELECT * FROM vehiculo WHERE tipo_vehiculo='${req.query.vehiculo}'`
    );
    return res.json({ success: "Datos obtenidos", autos: datos });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error" });
  }
};

//get("/count")
controller_auto.getCount = async (req, res) => {
  try {
    if (req.query.keyword) {
      const data = await pool.query(
        `SELECT COUNT(*) FROM vehiculo WHERE (placa_vehiculo LIKE '%${req.query.keyword}%')`
      );
      if (data[0]["COUNT(*)"]) return res.json(data[0]["COUNT(*)"]);
      return res.json(0);
    }
    const rows = await pool.query("SELECT COUNT(*) FROM vehiculo");
    if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);
    return res.json(0);
  } catch (error) {
    console.log(error);
    return res.json(0);
  }
};

//get("/:id")
controller_auto.getAutoByCodigo = async (req, res) => {
  try {
    const expediente = await pool.query(
      "SELECT * FROM vehiculo WHERE placa_vehiculo = ?",
      [req.params.id]
    );
    if (expediente[0]) {
      if (expediente[0].habilitado == "1")
        return res.json({ autos: expediente[0], success: "Encontrado" });
      return res.json({ error: "Auto inhabilitado" });
    }
    return res.json({ error: "No existe tal auto" });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error" });
  }
};

//post("/")
controller_auto.createAuto = async (req, res) => {
  // Guardando en la bd
  try {
    const rows = await pool.query("INSERT INTO vehiculo SET ?", [req.body]);
    if (rows.affectedRows !== 1)
      return res.json({ error: "Ocurrió un error." });
    res.json({ success: "Auto creado" });
  } catch (error) {
    console.log(error);
    if (error.code === "ECONNREFUSED")
      return res.json({ error: "Base de datos desconectada" });
    if (error.code === "ER_DUP_ENTRY")
      return res.json({ error: `Ese codigo ya está registrado` });
    res.json({ error: "Ocurrió un error." });
  }
};

//put("/:id")
controller_auto.updateAuto = async (req, res) => {
  const {
    modelo_vehiculo,
    marca_vehiculo,
    color_vehiculo,
    anio_vehiculo,
    transmision_vehiculo,
    combustible_vehiculo,
    motor_vehiculo,
    traccion_vehiculo,
    potencia_vehiculo,
    torque_vehiculo,
    rendimiento_vehiculo,
    asientos_vehiculo,
    costo_vehiculo,
    foto_vehiculo,
  } = req.body;
  const newAuto = {
    modelo_vehiculo,
    marca_vehiculo,
    color_vehiculo,
    anio_vehiculo,
    transmision_vehiculo,
    combustible_vehiculo,
    motor_vehiculo,
    traccion_vehiculo,
    potencia_vehiculo,
    torque_vehiculo,
    rendimiento_vehiculo,
    asientos_vehiculo,
    costo_vehiculo,
    foto_vehiculo,
  };
  try {
    const rows = await pool.query(
      "UPDATE vehiculo set ? WHERE id_vehiculo = ?",
      [newAuto, req.params.id]
    );
    if (rows.affectedRows !== 1)
      return res.json({ error: "Ocurrió un error." });
    res.json({ success: "Auto Actualizado" });
  } catch (error) {
    console.log(error);
    if (error.code === "ECONNREFUSED")
      return res.json({ error: "Base de datos desconectada" });
    res.json({ error: "Ocurrió un error." });
  }
};

//delete("/:id")
controller_auto.deleteAuto = async (req, res) => {
  try {
    const rows = await pool.query(
      "SELECT * FROM vehiculo WHERE id_vehiculo = ?",
      [req.params.id]
    );
    rows[0].estado_vehiculo == "HABILITADO"
      ? (rows[0].estado_vehiculo = "INHABILITADO")
      : (rows[0].estado_vehiculo = "HABILITADO");
    const data = await pool.query(
      "UPDATE vehiculo set ? WHERE id_vehiculo = ?",
      [rows[0], req.params.id]
    );
    let estado = "";
    rows[0].estado_vehiculo == "INHABILITADO"
      ? (estado = "INHABILITADO")
      : (estado = "HABILITADO");
    //affectedRows => filas afectadas
    if (data.affectedRows === 1)
      return res.json({ success: `Auto ${rows[0].placa_vehiculo} ${estado}` }); //Se logró actualizar
    return res.json({ error: "Ocurrió un error" });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error" });
  }
};

module.exports = controller_auto;
