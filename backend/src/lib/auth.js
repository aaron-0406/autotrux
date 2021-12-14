module.exports = {
  isLoggedIn(request, response, next) {
    //isAuthenticated() -> método de passport para validar si la session existe o no, devuelve true o false.
    if (request.isAuthenticated()) {
      return next();
    }
    return response.redirect("/login");
  },
  isNotLoggedIn(request, response, next) {
    //isAuthenticated() -> método de passport para validar si la session existe o no, devuelve true o false.
    if (!request.isAuthenticated()) {
      return next();
    }
    return response.redirect("/dashboard");
  },
  isAdmin(request, response, next) {
    if (request.user.rol === "ADMINISTRADOR") {
      return next();
    }
    if (request.user.rol === "CLIENTE") {
      return next();
    }
    return response.redirect("/");
  },
};
