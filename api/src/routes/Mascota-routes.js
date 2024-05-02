const express = require("express");
const router = express.Router();
const {
  createMascota,
  getMascota,
} = require("../controllers/Mascota-controller");

const middleware = require("../middlewares/videogame-middleware");

router.get("/:id"); //trae por id
router.get("/:name"); //trae por query o sea el name
router.get("/", getMascota); //trae todos
router.post("/", createMascota); //crea un videogame

//agregados
router.put("/:id"); //actualiza un videogame
router.delete("/:id"); //elimina un videogame

module.exports = router;
