const express = require("express");
const router = express.Router();
const path = require("path");
const ctrlIndex = require("../controllers/index.controllers");
const { isAdmin, isLoggedIn, isNotLoggedIn } = require("../lib/auth");

router.get("/dashboard/", [isLoggedIn, isAdmin], ctrlIndex.index);
router.get("/dashboard/*", [isLoggedIn, isAdmin], ctrlIndex.index);
router.get("/perfil", [isLoggedIn, isAdmin], ctrlIndex.index);
router.get("/perfil/*", [isLoggedIn, isAdmin], ctrlIndex.index);
router.get("/login", [isNotLoggedIn], ctrlIndex.index);
router.get("/registrarse", [isNotLoggedIn], ctrlIndex.index);
router.get("/*", ctrlIndex.index);

module.exports = router;
