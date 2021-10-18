module.exports = {
    isLoggedIn(request, response, next) {
        //isAuthenticated() -> método de passport para validar si la session existe o no, devuelve true o false.
        if (request.isAuthenticated()) {
            return next();
        }
        return response.redirect("/Iniciar");
    },
    isNotLoggedIn(request, response, next) {
        //isAuthenticated() -> método de passport para validar si la session existe o no, devuelve true o false.
        if (!request.isAuthenticated()) {
            return next();
        }
        return response.redirect("/dashboard");
    },
    isAdmin(request, response, next) {
        if (request.user.rango == 1) {
            return next();
        }
        return response.redirect("/");
    },
};
