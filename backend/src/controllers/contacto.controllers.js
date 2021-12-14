const controller_contacto = {};
const pool = require("../database");

//get("/")
controller_contacto.getAllMessage = async (req, res) => {
  try {
    if (req.query.page) {
      const data = await pool.query(
        `SELECT * FROM contactanos ORDER BY id_contactanos DESC`
      );
      const cantidadDatos = 10;
      const pagina = (parseInt(req.query.page) - 1) * cantidadDatos;
      return res.json({
        success: "Datos obtenidos",
        autos: data.splice(pagina, cantidadDatos),
      });
    }

    const datos = await pool.query(`SELECT * FROM contactanos`);
    return res.json({ success: "Datos obtenidos", autos: datos });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error" });
  }
};

controller_contacto.getCount = async (req, res) => {
  try {
    const rows = await pool.query("SELECT COUNT(*) FROM contactanos");
    if (rows[0]["COUNT(*)"]) return res.json(rows[0]["COUNT(*)"]);
    return res.json(0);
  } catch (error) {
    console.log(error);
    return res.json(0);
  }
};

//post("/")
controller_contacto.sendMessage = async (req, res) => {
  try {
    const result = await pool.query("INSERT INTO contactanos SET ? ", [
      req.body,
    ]);
    if (result.affectedRows === 1)
      return res.json({ success: "Mensaje enviado" });
    return res.json({ error: "Ocurrio un error" });
  } catch (error) {
    //console.log(error);
    return res.json({ error: "Ocurrio un error" });
  }
};

//delete("/:id")
controller_contacto.deleteContacto = async (req, res) => {
  try {
    const rows = await pool.query(
      "DELETE FROM contactanos WHERE id_contactanos = ?",
      [req.params.id]
    );
    //affectedRows => filas afectadas
    if (rows.affectedRows === 1)
      return res.json({ success: "Mensaje eliminado" }); //Se logró eliminar
    return res.json({ error: "Ocurrió un error" });
  } catch (error) {
    console.log(error);
    return res.json({ error: "Ocurrió un error" });
  }
};

module.exports = controller_contacto;
