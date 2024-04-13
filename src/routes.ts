// src/routes.ts

import express from "express";
import { authController } from "./controllers/authController";
import { categoriesController } from "./controllers/categoriesController";
import { coursesController } from "./controllers/coursesControllers";
import { episodesController } from "./controllers/episodeController";
import { favoritesController } from "./controllers/favoritesController";
import { ensureAuth, ensureAuthViaQuery } from "./middleware/auth";

const router = express.Router();
router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);
router.post("/favorites", ensureAuth, favoritesController.save);

router.get("/categories", ensureAuth, categoriesController.index);
router.get("/categories/:id", ensureAuth, categoriesController.show);

router.get("/courses/featured", ensureAuth, coursesController.featured);
router.get("/courses/newest", ensureAuth, coursesController.newest); //cursos lançamentos
router.get("/courses/search", ensureAuth, coursesController.search);
router.get("/courses/:id", ensureAuth, coursesController.show);

router.get("/episodes/stream", ensureAuthViaQuery, episodesController.stream);

export { router };
