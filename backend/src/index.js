const express = require("express");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const cors = require("cors");
const MySQLStore = require("express-mysql-session");
const passport = require("passport");
const { database } = require("./keys");
const llaves = require("./config");

//initializations
const app = express();
require("./lib/passport");

//settings
app.set("port", process.env.PORT || 50000);

//public
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/public/build")));

//Middlewares
app.use(morgan("dev"));
app.use(
  cors()
  /*{
        origin: llaves.API, //Asi el frontend puede hacer peticiones
        credentials: true,
    }
    */
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: "autotrux",
    //Para que no se renueve la session
    resave: false,
    //Para que no se vuelva a establecer la session
    saveUninitialized: false,
    //Con esto decidimos donde guardar la session, en este caso dentro de la base de datos
    store: new MySQLStore(database),
  })
);
app.use(passport.initialize());
app.use(passport.session({ cookie: { maxAge: 3600 } }));

//Global variables
app.use(async (req, res, next) => {
  app.locals.user = req.user;
  next();
});

//routes
app.use("/api/v0/reserva", require("./routes/reserva.routes"));
app.use("/api/v0/autos", require("./routes/autos.routes"));
app.use("/api/v0/contacto", require("./routes/contacto.routes"));
app.use("/api/v0/usuario", require("./routes/usuario.routes"));
app.use(require("./routes/authentication.routes"));
app.use(require("./routes/index.routes"));

//Starting the server
//Aplicación escucha en el puerto.
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
